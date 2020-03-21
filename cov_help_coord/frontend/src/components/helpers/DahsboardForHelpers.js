import React, { Component, Fragment } from 'react'
import Form from './Form'
import Institutions from './Institutions'
import { connect } from 'react-redux';


export class DahsboardForHelpers extends Component {
    render() {
        return (
        <Fragment>
            <Institutions />
        </Fragment>
        )
    }
}

export default connect()(DahsboardForHelpers)
