import React from 'react'

const Buttons = ({ dateText, title, buttonFontColour }) => {
  const styles = `bg-white text-${buttonFontColour}-500 font-bold py-2 px-4 rounded-md mb-5vh items-center w-1/7`

  return (
    <button className={styles}>
      {title}

      {' | ' + dateText}
    </button>
  )
}

export default Buttons
