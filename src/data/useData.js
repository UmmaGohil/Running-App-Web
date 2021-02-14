import { useQuery } from 'react-query'
import axios from 'axios'

const getData = async () => {
  const { data } = await axios.get(
    'https://yqupgbkal5.execute-api.eu-central-1.amazonaws.com/latest/api/runs'
  )
  return data
}

export default function useData() {
  return useQuery('runs', getData)
}
