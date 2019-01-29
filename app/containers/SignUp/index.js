import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUp from '../../screens/SignUp'

import { 
  signUp,
} from '../../actions/authentication';


class SignUpContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <SignUp {...this.props}/>
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
      signUp: user => {
        dispatch(signUp(user))
      }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);