import React from 'react'
import Nav from '../components/Nav'

const Page = ({
  children,
  bgColour,
  home,
  title,
  homeBlockColour,
  pageBlockColour,
}) => {
  const pageVar = `w-screen h-screen bg-${bgColour}-500 p-8`

  const titleBlock = home
    ? `h-50vh w-2/4 bg-${homeBlockColour}-400 text-6xl z-10 absolute top-0 mt-30vh`
    : `h-20vh w-2/4 bg-${homeBlockColour}-500 text-6xl z-10 absolute top-0 mt-25vh`

  const pagesBlock = `h-70vh w-3/4 bg-${pageBlockColour}-500 z-0 ml-1/4 mt-1/50 mb-1/50`

  return (
    <div className={pageVar}>
      <div className="rounded-lg border-2 border-white">
        {home && (
          <div className="m-0 m-auto h-90vh w-1/2 bg-duskyBlue-500 z-0 flex flex-wrap content-center">
            <Nav homeText={'home-text'} />
          </div>
        )}
        <div className={titleBlock}>
          <p className="float-right mt-6vh p-4 text-white">{title}</p>
          <div className="mt-8vh ml-1/40 ">{!home && <Nav />}</div>
        </div>
        {!home && <div className={pagesBlock}>{children}</div>}
      </div>
    </div>
  )
}

export default Page
