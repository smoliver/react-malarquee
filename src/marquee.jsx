import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const defaultProps = {
  hoverToPause: false,
  fill: true,
  rate: 100
}

const propTypes = {
  hoverToPause: PropTypes.bool,
  fill: PropTypes.bool,
  rate: PropTypes.number,
  children: PropTypes.node
}

const containerStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap'
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
    this.setupContentMeasuring = this.setupContentMeasuring.bind (this);
    this.measureContent = this.measureContent.bind (this);
    this.forceUpdate = this.forceUpdate.bind (this);
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    this.stopAnimation();
    window.removeEventListener ('resize', this.measurementCallback);
  }

  pauseOnEnter() {
    this.stopAnimation();
  }

  resumeOnLeave() {
    this.startAnimation()
  }

  animate(lastStamp, curStamp) {
    const timeDif = (curStamp - lastStamp) / 1000;
    let offset = this.state.offset - this.props.rate * timeDif;
    if (-offset >= this.contentWidth) {
      if (this.props.fill) offset = offset % this.contentWidth;
      else offset = this.containerWidth + (offset % this.contentWidth);
    }
    this.setState({
      offset: offset
    })

    // Make recursive call to animate to continue animation
    this.frameId = window.requestAnimationFrame (
      this.animate.bind (this, curStamp)
    );
  }

  startAnimation() {
    if (this.frameId) return
    this.frameId = window.requestAnimationFrame ((timeStamp) => {
      this.frameId = window.requestAnimationFrame (
        this.animate.bind (this, timeStamp)
      );
    });
  }

  stopAnimation() {
    window.cancelAnimationFrame(this.frameId);
    this.frameId = null;
  }

  setupContentMeasuring(container) {
    if (container === null) return;

    this.measureContent(container);
    this.measurementCallback = this.measureContent.bind(this, container);
    window.addEventListener('resize', this.measurementCallback);
  }

  measureContent(container) {
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
        'display': 'inline-block',
        'transform': `translateX(${offset}px)`,
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

  componentDidUpdate(prevProps, prevState) {
    this.measurementCallback()
  }

  render() {
    const {
      hoverToPause,
      fill,
      rate,
      className = '',
      style = {},
      ...props
    } = this.props;

    const handleMouseEnter = hoverToPause ? this.pauseOnEnter : null;
    const handleMouseLeave = hoverToPause ? this.resumeOnLeave.bind (this) : null;

    return (
      <div
        className={`${className}`}
        style={{...containerStyle, ...style}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={this.setupContentMeasuring}
        {...props}
      >
        {this.content(this.state)}
      </div>
    )
  }
}

Marquee.defaultProps = defaultProps;


export default Marquee
