import React, { useState } from 'react'
import Page from '../template/page'
import RunButtons from '../components/RunButtons'
import RunDetails from '../components/RunDetails'

const View = () => {
  const [state, setState] = useState({ data: '' })

  const changeState = () => {
    setState({ data: `button click change` })
  }
  return (
    <Page
      bgColour="yourPink"
      title="View Runs"
      homeBlockColour="mint"
      pageBlockColour="paleYellow"
    >
      <div class="grid grid-cols-2 gap-4">
        <div className="lg:-mt-155 md:mt-0 xxl:mt-0">
          <RunButtons date={true} buttonFontColour="mint" test={changeState} />
        </div>
        <div>
          <RunDetails data={state.data} />
        </div>
      </div>
    </Page>
  )
}

export default View
