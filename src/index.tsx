import * as React from 'react'
import './styles.css'
import { SketchPicker, ColorResult, Color, HSLColor, RGBColor } from 'react-color'

interface GColorPickerProps {

}

interface GColorPickerStates {
  displayColorPicker: boolean
  color: RGBColor | Color
}

class GColorPicker extends React.PureComponent<GColorPickerProps, GColorPickerStates> {

  state = {
    displayColorPicker: false,
    color: {
      r: 241,
      g: 112,
      b: 19,
      a: 1,
    },
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color: ColorResult) => {
    this.setState({ color: color.rgb })
  };

  render () {

    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
      } as React.CSSProperties,
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      } as React.CSSProperties,
      popover: {
        position: 'absolute',
        zIndex: 2,
        top: 40
      } as React.CSSProperties,
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      } as React.CSSProperties,
    }

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? (
          <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.handleClose } />
            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
          </div>
        ) : null }

      </div>
    )
  }
}


export default GColorPicker
