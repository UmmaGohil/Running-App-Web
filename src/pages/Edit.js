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
      </div>
      <div>
        <Form
          placeholderColour="paleYellow"
          buttonTextColour="paleYellow"
          pointerColour="paleYellow"
        />
      </div>
    </div>
  </Page>
)

export default Edit
