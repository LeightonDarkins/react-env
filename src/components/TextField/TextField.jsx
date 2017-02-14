import React from 'react'
import styles from './TextField.css'

class Button extends React.Component {
  render() {
    return (
      <input className={ styles.default } type='text' placeholder={ this.props.placeholder }></input>
    )
  }
}

export default Button
