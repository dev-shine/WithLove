import React, { Component } from 'react'
import { connect } from 'react-redux'
import Explore from '../../screens/Explore'

// import { 
 
//  } from '../../actions/homepage';


class ExploreContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <Explore {...this.props}/>
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
)(ExploreContainer);