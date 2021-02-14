import React from 'react'

const RunDetails = ({ data }) => {
  return (
    <div className="bg-white rounded-md p-12 text-paleYellow-500">
      <h1>Time</h1>
      <p>1:05:23 </p>
      <h1>Distance</h1>
      <p>10.02 km </p>
      <h1>Date</h1>
      <p>01/01/21</p>
      {data}
    </div>
  )
}

export default RunDetails
