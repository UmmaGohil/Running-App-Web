import React from 'react'
import Nav from '../components/Nav'
const Page = ({ children, bgColour, home }) => {
  const pageVar = `w-screen h-screen bg-${bgColour}-500 p-8`
  return (
    <div className={pageVar}>
      <div className="rounded-lg border-2 border-white">
        {home && <div className="m-0 h-full w-1/2 bg-green-500">[home div]</div>}
        <div className="h-10 w-10 bg-blue-500">[title goes here]</div>
        {children}
        {home ? <Nav homeText={'home-text'} /> : <Nav/>}
      </div>
    </div>
  )
}

export default Page
