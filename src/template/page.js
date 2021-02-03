import React from 'react'
import Nav from '../components/Nav'

const Page = ({ children, bgColour, home, title, homeBlockColour }) => {

  const pageVar = `w-screen h-screen bg-${bgColour}-500 p-8`

  const titleBlock = home ? `h-50vh w-2/4 bg-${homeBlockColour}-500 text-6xl z-10 absolute top-0 mt-30vh`  : `h-20vh w-2/4 bg-${homeBlockColour}-500 text-6xl z-10 absolute top-0 mt-25vh`
  return (
    <div className={pageVar}>
      <div className="rounded-lg border-2 border-white">
        {home && <div className="m-0 m-auto h-90vh w-1/2 bg-green-500 z-0 flex flex-wrap content-center"> 
          <Nav homeText={'home-text'} /> 
        </div>}
        <div className={titleBlock}>{title}{!home && <Nav />}</div>
        
        {!home && <div className="h-50vh w-3/4 bg-green-500 z-0 ml-1/4 mt-1/10 mb-1/10"> 
          this is not home 
        </div>}
        {children}
      </div>
    </div>
  )
}

export default Page
