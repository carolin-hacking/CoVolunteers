import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popup from "reactjs-popup"
import Register from '../accounts/RegisterCompany'
import PropTypes from 'prop-types';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class SimpleCard extends Component {

  static propTypes = {
    institutions: PropTypes.array.isRequired,
    };

  state = {
    institutionID: null,
    helper: {},
    isAuthenticated: PropTypes.bool
  }

  setid(id) {
    console.log(id)
    this.setState({institutionID: id})
    console.log(this.state.institutionID)
  }  

  render () {
 
    const registerForm = (
      <Register />
    )

    const signupForm = institutionID => {
        return <Form institutionID={institutionID}/>
    }

    const institution = this.props.institution
    console.log(this.props.institution)
    return (
      <Card>
        <CardContent>
        <Typography variant="h5">
        {institution.companyname}        
        </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">
        {institution.companyname}
        </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">
        {institution.ansprechpartner}
        </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">
        {institution.zipcode} 
        </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">
        {institution.companytype}
        </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">
        {institution.title}
        </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">
        {institution.description}
        </Typography>
        </CardContent>
        <Popup trigger={<button className="btn btn-success btn-sm"> Anmelden</button>} position="right center">
          {!this.props.isAuthenticated ? registerForm : signupForm(institution.id) }
        </Popup> 
      </Card>
    );
  }
}