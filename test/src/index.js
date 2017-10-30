import React from 'react'
import ReactDOM from 'react-dom'

import Marquee from 'react-marquee'

const TestMarquee = () => (
  <main>
    <h1>Test Marquee</h1>
    <div>
      <Marquee text="this is some text for testing"/>
    </div>
  </main>
)

ReactDOM.render(<TestMarquee/>, document.getElementById ('app-container'));
