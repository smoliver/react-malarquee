import React from 'react'
import ReactDOM from 'react-dom'

import Marquee from 'marquee'

const TestMarquee = () => (
  <main>
    <h1>Test Marquee</h1>
    <div>
      <Marquee hoverToPause fill>
        <span 
          style={{padding: '10px', background: 'blue'}}
        > this is some text </span>
      </Marquee>
      <Marquee hoverToPause>
        <span style={{padding: '10px'}}> this is some text </span>
      </Marquee>
      <Marquee hoverToPause>
        this is some text
      </Marquee>
    </div>
  </main>
)

ReactDOM.render(<TestMarquee/>, document.getElementById ('app-container'));
