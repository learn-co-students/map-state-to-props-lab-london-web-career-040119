import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // console.log(this.props.users)
    // let users = this.props.users.map(user => {
    //   <li key={user.username}>{user.username}</li> })
    return (
      <div>
      {this.props.userCount}
        <ul>
        {this.props.users.length > 0 &&
          this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
        }
        </ul>
        working
      </div>
    )
  }
}

//add mapStateToProps here
const mapStatetoProps = (state) => {
  return { 
    users: state.users, 
    userCount: state.users.length }
}

export default connect(mapStatetoProps)(Users)
