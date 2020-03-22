import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './SimpleCard'


export default class CenteredGrid extends Component {
  
  render() {
    const institutions = this.props.institutions
    return (
        <div>
        <Grid container spacing={3}>

        {institutions.map(institution => (
            <Grid item xs={4} key={institution.id}>
                <SimpleCard institution={institution} />
            </Grid>))
                }
        </Grid>
        </div>
  );
}
}
