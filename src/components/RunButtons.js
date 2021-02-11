import React from 'react'
import Button from './Buttons'
import Data from '../data/data.json'
//TO DO: Add the data file here and map over the data and use the prop to send down the date and title?

const RunButtons = ({ buttonFontColour, date, test }) => {
  return (
    <>
      {Data.runs.map((a) => (
        <Button
          date={true}
          buttonFontColour={buttonFontColour}
          title={a.name}
          dateText={date ? ' | ' + a.date : ' '}
          test={test}
        />
      ))}
    </>
  )
}
export default RunButtons
