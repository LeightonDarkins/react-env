import React from 'react'
import styles from './CancelButton.css'

class CancelButton extends React.Component {
  render() {
    return (
      <button className={ styles.default }>
        Cancel
      </button>
    )
  }
}

export default CancelButton
