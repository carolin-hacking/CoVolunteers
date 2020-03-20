import React, { Component, Fragment } from 'react'
import Helpers from './Helpers'
import FormInstitution from './FormInstitution'
import { connect } from 'react-redux';


export class DahsboardForHelpers extends Component {
    render() {
        return (
        <Fragment>
            <FormInstitution />
            <Helpers />
        </Fragment>
    )
}
}

export default connect()(DahsboardForHelpers)