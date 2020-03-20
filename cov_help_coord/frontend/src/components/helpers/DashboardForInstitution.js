import React, { Fragment } from 'react'
import Helpers from './Helpers'
import { FormInstitution } from './FormInstitution'

export default function DashboardForInstitution() {
    return (
        <Fragment>
            <FormInstitution />
            <Helpers />
        </Fragment>
    )
}
