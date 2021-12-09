import { NextPage } from 'next'
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import AirportsList from '../components/airports-list'

import Layout from '../components/layout'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'

const Page: NextPage = () => {
  const [query, setQuery] = useState("")
  const { data: airports, clearResults } = useApiData<Airport[]>('/api/airports', query)

  const searchAirports = (ev: SyntheticEvent) => {
    const target = ev.target as HTMLInputElement;

    if (target.value.length > 3) {
      setQuery(target.value);
    } else if (!target.value.length) {
      clearResults();
    }
  }

  return <Layout>
    <h1 className='text-2xl font-bold'>Code Challenge: Airports</h1>

    <input
      type="text"
      placeholder="Start typing..."
      className="border border-gray-300 rounded-md p-3 my-8"
      onChange={searchAirports}
    />

    <div className="flex flex-column gap-2 align-center">
      <h2 className="text-xl font-semibold">Airports</h2>
      <div className="bg-blue-500 text-white font-bold px-3 rounded-full">
        {airports.length}
      </div>
    </div>

    <AirportsList airports={airports}/>
  </Layout>
}

export default Page
