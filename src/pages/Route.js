import React from 'react'
import Page from '../template/page'
import Buttons from '../components/Buttons'
import RunButtons from '../components/RunButtons'

const Route = () => (
  <Page
    bgColour="carnation"
    title="Route"
    homeBlockColour="dirtYellow"
    pageBlockColour="tan"
  >
    <div class="grid grid-cols-2 gap-4">
      <div className="lg:-mt-155 md:mt-0 xxl:mt-0">
        <RunButtons buttonFontColour="tan" />
      </div>
      <div>[TBA]</div>
    </div>
  </Page>
)

export default Route
