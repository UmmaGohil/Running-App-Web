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
    ? `xl:h-70vh h-60vh w-2/4 bg-${homeBlockColour}-400 xl:text-6xl text-5xl text-white z-10 absolute top-0 xl:mt-15vh mt-20vh`
    : `h-15vh w-2/4 bg-${homeBlockColour}-500 text-6xl z-10 absolute top-0 xl:mt-19vh lg:mt-15vh`

  const pagesBlock = `h-70vh w-3/4 bg-${pageBlockColour}-500 z-10 ml-1/4 mt-1/50 mb-1/50 pt-60 px-12`

  return (
    <div className={pageVar}>
      <div className="rounded-lg border-2 border-white">
        {home && (
          <div className="m-0 m-auto h-90vh w-1/2 bg-duskyBlue-500 z-0 text-white text-6xl text-center content-center">
            Plan a Run
          </div>
        )}
        <div className={titleBlock}>
          {home && <Nav homeText={'home-text'} />}
          <p className="float-right mt-2vh p-4 pr-15 text-white">{title}</p>
          <div className="mt-4vh ml-20vw mr-60vw xxl:ml-40vh xl:ml-27vh lg:ml-20vh">
            {!home && <Nav />}
          </div>
        </div>
        {!home && <div className={pagesBlock}>{children}</div>}
      </div>
    </div>
  )
}

export default Page
