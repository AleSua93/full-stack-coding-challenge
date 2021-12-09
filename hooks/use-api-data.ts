import axios from "axios"
import { useEffect, useState } from "react"

export const useApiData = <T>(path: string, query: string, defaultValue: any = []): any => {
  const [ data, setData ] = useState<T>(defaultValue)
  const url = `${path}?q=${query}`;

  const clearResults = () => {
    setData(defaultValue)
  }

  useEffect(() => {
    axios.get<T>(url).catch(err => err.response).then(response => {
      setData(response.data)
    })
  }, [query])

  return {
    data,
    clearResults
  }
}

export default useApiData
