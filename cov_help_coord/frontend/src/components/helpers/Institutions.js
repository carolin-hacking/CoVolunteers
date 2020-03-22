import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInstitutions, deleteInstitution, addHelperToInstitution } from '../../actions/institutions';
import Register from '../accounts/RegisterCompany'
import Popup from "reactjs-popup"
import Form from './Form'
import Grid from './Grid'
import Typography from '@material-ui/core/Typography';

export class Institutions extends Component {
    static propTypes = {
        institutions: PropTypes.array.isRequired,
        getInstitutions: PropTypes.func.isRequired,
        deleteInstitution: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getInstitutions();
    }

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
   render() {

        return (
            <Fragment>
                <Typography variant="h4"> 27 Möglichkeiten zu helfen in Deiner Nähe</Typography>
                <Grid institutions={this.props.institutions}/>    
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    institutions: state.institutions.institutions,
    institutionID: state.institutions.institutionID,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getInstitutions, deleteInstitution, addHelperToInstitution })(Institutions);
