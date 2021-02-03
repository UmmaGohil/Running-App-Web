import React from 'react'
import Nav from '../components/Nav'

const Page = ({ children, bgColour, home, title, homeBlockColour }) => {

  const pageVar = `w-screen h-screen bg-${bgColour}-500 p-8`

  const homeBlock = home ? `h-50vh w-2/4 bg-${homeBlockColour}-500 text-6xl` : `h-20vh w-2/4 bg-${homeBlockColour}-500 text-6xl`
  return (
    <div className={pageVar}>
      <div className="rounded-lg border-2 border-white">
        {home && <div className="m-0 h-full w-1/2 bg-green-500">[home div]</div>}
        <div className={homeBlock}>{title}</div>
        {children}
        {home ? <Nav homeText={'home-text'} /> : <Nav/>}
      </div>
    </div>
  )
}

export default Page
