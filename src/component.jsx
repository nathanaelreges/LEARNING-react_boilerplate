import React from 'react'
import PropTypes from 'prop-types'

class Component extends React.Component {
   render () {
      return <h1> Ola React Component {this.props.val} </h1>
   }
}


Component.propTypes = {
   val: PropTypes.string.isRequired
}
 

export default Component;
