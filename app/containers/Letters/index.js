import React, { Component } from 'react'
import { connect } from 'react-redux'
import Letters from '../../screens/Letters'

// import { 
 
//  } from '../../actions/homepage';


class LettersContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <Letters {...this.props}/>
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
)(LettersContainer);