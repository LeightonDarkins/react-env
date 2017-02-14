import React from 'react'
import styles from './Button.css'

class Button extends React.Component {
  render() {
    return (
      <button className={ styles.default }>
        { this.props.text }
      </button>
    )
  }
}

export default Button
