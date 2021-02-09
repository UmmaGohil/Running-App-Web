import React from 'react'
import Page from '../template/page'
import Buttons from '../components/Buttons'
import RunDetails from '../components/RunDetails'

const View = () => (
  <Page
    bgColour="yourPink"
    title="View Runs"
    homeBlockColour="mint"
    pageBlockColour="paleYellow"
  >
    <div class="grid grid-cols-2 gap-4">
      <div className="lg:-mt-155 md:mt-0 xxl:mt-0">
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
        <Buttons date={true} buttonFontColour="mint" />
        <br /> <br />
      </div>
      <div>
        <RunDetails />
      </div>
    </div>
  </Page>
)

export default View
