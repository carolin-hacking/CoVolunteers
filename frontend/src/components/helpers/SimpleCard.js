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
import Form from './Form'

import { connect } from 'react-redux';
import { getInstitutions, deleteInstitution, addHelperToInstitution } from '../../actions/institutions';



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

class SimpleCard extends Component {

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
            <Typography variant="h4" className="text-primary">
              {institution.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="subtitle">
              {institution.companyname} ({institution.companytype}),{" "}
              {institution.zipcode}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6" align="center">
              Bezahlt
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="subtitle">
              {institution.description}
            </Typography>
          </CardContent>

          <Popup
            trigger={
              <div class="col text-center">
                <button
                className="btn mb-2  btn-sm btn-primary"
                justifyContent="center"
              >
                {" "}
                Anmelden
              </button>
              </div>
            }
            position="right center"
          >
            {!this.props.isAuthenticated
              ? registerForm
              : signupForm(institution.id)}
          </Popup>
        </Card>
    );
  }
}

const mapStateToProps = state => ({
  institutionID: state.institutions.institutionID,
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps)(SimpleCard)