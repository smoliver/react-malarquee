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
  constructor (props) {
    super (props);
    
    this.state = {
      offset: 0,
      coppies: props.fill ? 2 : 1
    }

    this.containerWidth = 0;
    this.contentWidth = 0;

    this.pauseOnEnter = this.pauseOnEnter.bind (this);
    this.resumeOnLeave = this.resumeOnLeave.bind (this);
    this.animate = this.animate.bind (this);
    this.startAnimation = this.startAnimation.bind (this);
    this.stopAnimation = this.stopAnimation.bind (this);
    this.measureContent = this.measureContent.bind (this);
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
    if (-offset >= this.contentWidth) {
      if (this.props.fill) offset = 0;
      else offset = this.containerWidth;
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

  measureContent(container) {
    if (!container) return

    console.log ('measureText');
    
    let content = container.firstChild

    const containerWidth = container.offsetWidth;
    const contentWidth = content.offsetWidth;

    if (this.containerWidth != containerWidth || this.contentWidth != contentWidth) {
      this.containerWidth = containerWidth;
      this.contentWidth = contentWidth;

      if (this.props.fill) {
        const coppies = Math.ceil (containerWidth / contentWidth) + 1;

        if (coppies === this.state.coppies) return;
        
        this.setState ({
          coppies: coppies
        })
      }
    }
  }

  content({offset, coppies}) {
    let contentCoppies = []
    for (let i = 0; i < coppies; ++i) {
      const style = {
        'position': 'relative',
        'left': offset,
        'whiteSpace': 'nowrap'
      };
      contentCoppies.push (
        <span 
          style={style}
          key={i}
        >
          {this.props.children}
        </span>
      )
    }
    return contentCoppies;
  }

  render() {
    const { hoverToPause } = this.props;
    
    console.log ("RENDER", this.state.coppies);

    const handleMouseEnter = hoverToPause ? this.pauseOnEnter : null;
    const handleMouseLeave = hoverToPause ? this.resumeOnLeave.bind (this) : null;

    return (
      <div 
        className={`${this.props.className}`} 
        style={{overflow: 'hidden'}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={this.measureContent}
      >
        {this.content(this.state)}
      </div>
    )
  }
}

Marquee.defaultProps = defaultProps;

export default Marquee
