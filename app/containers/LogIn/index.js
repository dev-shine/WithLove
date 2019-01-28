import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogIn from '../../screens/LogIn'

// import { 
 
//  } from '../../actions/homepage';


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
       
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInContainer);