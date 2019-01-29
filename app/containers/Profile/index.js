import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../screens/Profile'

import { 
  logOut,
} from '../../actions/authentication';


class ProfileContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <Profile {...this.props}/>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
       
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logOut: () => {
          dispatch(logOut())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);