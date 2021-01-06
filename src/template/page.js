import React from 'react'

const Page = ({ children, bgColour }) => {
  const pageVar = `w-screen h-screen bg-${bgColour}-500 p-8`
  return (
    <div className={pageVar}>
      <div className="rounded-lg border-2 border-white ">{children}</div>
    </div>
  )
}

export default Page
