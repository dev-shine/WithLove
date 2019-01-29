import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogIn from '../../screens/LogIn'

import { 
  logIn
} from '../../actions/authentication';


class LogInContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <LogIn {...this.props}/>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
       user: state.auth.user,
       apiLoading: state.auth.apiLoading,
       errors: state.auth.errors,
       isLoggedIn: state.auth.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logIn: user => {
          return dispatch(logIn(user));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInContainer);