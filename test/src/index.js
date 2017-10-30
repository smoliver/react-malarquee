import React from 'react'
import ReactDOM from 'react-dom'

import Marquee from 'react-marquee'

const TestMarquee = () => (
  <main>
    <h1>Test Marquee</h1>
    <div>
      <Marquee hoverToPause={true}>
        this is some text for testing asdlfjasdlf asdkfjaskfd jasdkfjk akdsjfk aajksdj fjdjs akjsjd fjsa fj kajsdkf jakjkjasdkf jaksdjfkjaksdjf 
      </Marquee>
    </div>
  </main>
)

ReactDOM.render(<TestMarquee/>, document.getElementById ('app-container'));
