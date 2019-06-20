import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>Total users: {this.props.users.length}</p>
        <ul>
          {
            this.props.users.map(user => <li>{user.username}</li>)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(Users)
