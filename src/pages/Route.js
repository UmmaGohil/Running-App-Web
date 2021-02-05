import React from 'react'
import Page from '../template/page'
import Buttons from '../components/Buttons'

const Route = () => (
  <Page
    bgColour="carnation"
    title="Route"
    homeBlockColour="dirtYellow"
    pageBlockColour="tan"
  >
    <div class="grid grid-cols-2 gap-4">
      <div>
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
        <Buttons buttonFontColour="tan" />
        <br />
        <br />
      </div>
      <div>[TBA]</div>
    </div>
  </Page>
)

export default Route
