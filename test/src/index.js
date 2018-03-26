import React from 'react'
import ReactDOM from 'react-dom'

import Marquee from 'src/marquee'

class TestMarquee extends React.Component {
  constructor() {
    super()

    this.state = {
      testStateContent: 'This is some Test content'
    }
  }

  updateContent() {
    this.setState({
      testStateContent: `${this.state.testStateContent} with a little extra`
    })
  }

  render() {
    const { testStateContent } = this.state

    return (
      <main>
        <h1>Test Marquee</h1>
        <div>
          <Marquee
            hoverToPause
            fill
            rate={1000}
            className={'name'}
            style={{ background: 'green' }}
          >
            <span style={{ padding: '10px', background: 'blue' }}>
              {' '}
              this is some text{' '}
            </span>
          </Marquee>
          <Marquee hoverToPause>
            <span style={{ padding: '10px' }}> this is some text </span>
          </Marquee>
          <Marquee hoverToPause>this is some text</Marquee>
          <Marquee hoverToPause>{testStateContent}</Marquee>
          <button onClick={this.updateContent.bind(this)}>Add content</button>
        </div>
      </main>
    )
  }
}

ReactDOM.render(<TestMarquee />, document.getElementById('app-container'))
