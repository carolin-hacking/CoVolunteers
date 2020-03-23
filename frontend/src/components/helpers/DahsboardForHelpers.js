import React, { Component, Fragment } from 'react'
import Institutions from './Institutions'
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import Select from 'react-select';


var sectionStyle = {
    backgroundImage: "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };


export class DahsboardForHelpers extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <Fragment>
                <div className='row ml-2'>
                    <div>
                        <Typography variant="h5" className="mt-4 text-secondary">Postleitzahl</Typography>
                        <input className="mt-2 form-control" />
                    </div>
                    <div className="ml-5 ">
                        <Typography variant="h5" className="mt-4 text-secondary">Art der Einrichtung</Typography>
                        <Select className="mt-2"
                            name="companytype"
                            />
                    </div>
                    <div className="ml-5 ">
                        <Typography variant="h5" className="mt-4 text-secondary">Vorerfahrung</Typography>
                        <Select className="mt-2"
                            name="companytype"
                            />
                    </div>
                </div>
                <Institutions />
                </Fragment>    
                </div>    
        )
    }
}

export default connect()(DahsboardForHelpers)