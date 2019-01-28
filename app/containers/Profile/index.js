import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../screens/Profile'

// import { 
 
//  } from '../../actions/homepage';


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
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);