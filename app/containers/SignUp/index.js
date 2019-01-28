import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUp from '../../screens/SignUp'

// import { 
 
//  } from '../../actions/homepage';


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
       
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);