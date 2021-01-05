import React from 'react'

const Page = ({ children, bgColour }) => {
  const pageVar = `w-screen h-screen bg-${bgColour}-500`
  return <div className={pageVar}>{children}</div>
}

export default Page
