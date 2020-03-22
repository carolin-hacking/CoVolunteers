import React, { Component, Fragment } from 'react'
import Form from './Form'
import Institutions from './Institutions'
import { connect } from 'react-redux';
import { CardMedia } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';



var sectionStyle = {
    backgroundImage: "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };


export class DahsboardForHelpers extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <Fragment>
                    <Institutions />
                </Fragment>    
                </div>    
        )
    }
}

export default connect()(DahsboardForHelpers)
2