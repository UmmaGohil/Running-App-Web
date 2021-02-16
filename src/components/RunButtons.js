import React from 'react'
import Button from './Buttons'
import useData from '../data/useData'

const RunButtons = ({ buttonFontColour, date, test }) => {
  const { status, data, error } = useData()
  return (
    <>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        data?.runs.map((a) => (
          <Button
            date={true}
            buttonFontColour={buttonFontColour}
            title={a.name}
            dateText={date ? ' | ' + a.date : ' '}
            test={test}
          />
        ))
      )}
    </>
  )
}
export default RunButtons
