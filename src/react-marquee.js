import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const defaultProps = {
  hoverToPause: false,
  loop: true,
  leading: 0,
  trailing: 0
}

class Marquee extends React.Component { 
  constructor () {
    super ();
    
    this.state = {
      offset: 0,
      coppies: 0
    }

    this.containerWidth = 0;
    this.contentWidth = 0;

    this.pauseOnEnter = this.pauseOnEnter.bind (this);
    this.resumeOnLeave = this.resumeOnLeave.bind (this);
    this.animate = this.animate.bind (this);
    this.startAnimation = this.startAnimation.bind (this);
    this.stopAnimation = this.stopAnimation.bind (this);
    this.measureText = this.measureText.bind (this);
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  pauseOnEnter() {
    this.stopAnimation();
  }

  resumeOnLeave() {
    this.startAnimation()
  }

  animate() {
    let offset = this.state.offset - 1
    if (Math.abs(offset) > this.contentWidth) {
      offset = this.containerWidth
    }
    this.setState({
      offset: offset
    })

    // Make recursive call to animate to continue animation
    this.frameId = window.requestAnimationFrame (this.animate);
  }

  startAnimation() {
    if (this.frameId) return
    this.frameId = window.requestAnimationFrame (this.animate);
  }

  stopAnimation() {
    window.cancelAnimationFrame(this.frameId);
    this.frameId = null;
  }

  measureText(container) {
    if (!container) return

    console.log ('measureText');
    
    let content = container.firstChild

    const containerWidth = container.offsetWidth;
    const contentWidth = content.offsetWidth;


    if (this.containerWidth != containerWidth || this.contentWidth != contentWidth) {
      this.containerWidth = containerWidth;
      this.contentWidth = contentWidth;
    }
  }

  render() {
    const { hoverToPause } = this.props;
    const { offset } = this.state;
    
    const style = {
      'position': 'relative',
      'left': offset,
      'whiteSpace': 'nowrap'
    };

    const handleMouseEnter = hoverToPause ? this.pauseOnEnter : null;
    const handleMouseLeave = hoverToPause ? this.resumeOnLeave.bind (this) : null;

    return (
      <div 
        className={`${this.props.className}`} 
        style={{overflow: 'hidden'}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={this.measureText}
      >
        <span style={style}>{this.props.children}</span>
      </div>
    )
  }
}

Marquee.defaultProps = defaultProps;

export default Marquee
