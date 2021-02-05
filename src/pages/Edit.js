import React from 'react'
import Page from '../template/page'
import Buttons from '../components/Buttons'
import Form from '../components/Form'

const Edit = () => (
  <Page
    bgColour="bilobaFlower"
    title="Edit"
    homeBlockColour="mint"
    pageBlockColour="paleYellow"
  >
    Edit
    <Buttons date={true} buttonFontColour="mint" />
    <Form
      placeholderColour="paleYellow"
      buttonTextColour="paleYellow"
      pointerColour="paleYellow"
    />
  </Page>
)

export default Edit
