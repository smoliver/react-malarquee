# react-malarquee

## Overview

react-malarquee is a flexible `<Marquee>` tag replacement for React.  It uses state-based animation, rather than css-animation.

The Marquee has two parts: the container and the content.  The container an unmoving block, acting as a sort of billboard to define the space in which the animating content can move. 

## Props

* [children](#children)
* [hoverToPause](#hoverToPause)
* [fill](#fill)
* [rate](#rate)

### children<a name="children"></a>
*string* | *components*
Provide the content you would like to animate within the Marquee as children.  Marquee accepts any mix of html, strings, and components. Style content as inline, inline-block, etc. if you want it to remain on a single line. 

*Default value*: null

```
<Malarquee>This string will animate<\/Malarquee>
// or
<Malarquee children="So will this string" />
// or
<Malarquee><span>We Are </span><span>Inline, so we </span><span>don't stack</span><\/Malarquee>
``` 

### hoverToPause<a name="hoverToPause"></a>
*boolean*
If true, pauses the Marquee's animation when the container is hovered over
*Default value:* `false`

### fill<a name="fill"></a>
*boolean*
If true, repeats the marquee content such that the line is continuously filled.  Use padding or margins to create spaced between the coppies.
*Default value:* `true`

### Rate<a name="rate"></a>
*number*
The rate at which the content moves in pixels per second (px / sec)
*Default value:* `100`

