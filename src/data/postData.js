import { useQuery } from 'react-query'
import axios from 'axios'

const postData = async () => {
  const { data } = await axios.post(
    'https://yqupgbkal5.execute-api.eu-central-1.amazonaws.com/latest/api/runs'
  )
  return data
}

export default function useData() {
  return useQuery('postRun', postData)
}
