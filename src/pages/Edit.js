import React from 'react'
import Page from '../template/page'
import Buttons from '../components/Buttons'

const Edit = () => (
  <Page
    bgColour="bilobaFlower"
    title="Edit"
    homeBlockColour="mint"
    pageBlockColour="paleYellow"
  >
    Edit
    <Buttons date={true} buttonFontColour="mint" />
  </Page>
)

export default Edit
