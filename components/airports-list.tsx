import Link from "next/link"
import React from "react"
import Airport from "../types/airport"

interface AirportsListsProps {
  airports: Airport[]
}

const AirportsList: React.FC<AirportsListsProps> = ({ airports }) => {
  return (
    <div className="flex flex-column flex-wrap">
      {airports.map(airport => (
        <div className="w-1/2" key={airport.iata}>
          <Link href={`/airports/${airport.iata.toLowerCase()}`} >
            <a className='flex flex-col h-full p-5 my-5 mr-4 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none'>
              <span className="pb-2">
                {airport.name}, {airport.city}
              </span>
              <span className='text-gray-500'>
                {airport.country}
              </span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default React.memo(AirportsList)
