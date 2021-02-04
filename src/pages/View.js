import React from 'react'
import Page from '../template/page'
import Buttons from '../components/Buttons'

const View = () => (
  <Page
    bgColour="yourPink"
    title="View"
    homeBlockColour="mint"
    pageBlockColour="paleYellow"
  >
    View
    <Buttons date={true} buttonFontColour="mint" />
  </Page>
)

export default View
