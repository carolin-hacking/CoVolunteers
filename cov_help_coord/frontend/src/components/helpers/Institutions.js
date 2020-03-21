import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInstitutions, deleteInstitution, addHelperToInstitution } from '../../actions/institutions';
import Register from '../accounts/RegisterCompany'
import Popup from "reactjs-popup"
import Form from './Form'

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
        
        const registerForm = (
            <Register />
        )

        const signupForm = institutionID => {
            return <Form institutionID={institutionID}/>
        }

        return (
            <Fragment>
                <h2>Einrichtungen</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Einrichtung</th>
                            <th>Ansprechpartner</th>
                            <th>PLZ</th>
                            <th>Einrichtungsart</th>
                            <th>Sucht</th>
                            <th>Beschreibung</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.institutions.map(institution => (
                            <tr key={institution.id}>
                                <td>{institution.companyname}</td>
                                <td>{institution.ansprechpartner}</td>
                                <td>{institution.zipcode}</td> 
                                <td>{institution.companytype}</td>
                                <td>{institution.title}</td>
                                <td>{institution.description}</td>
                                <td>
                                    
                                    <Popup trigger={<button className="btn btn-success btn-sm"> Anmelden</button>} position="right center">
                                        {!this.props.isAuthenticated ? registerForm : signupForm(institution.id) }
                                        
                                    </Popup> 
                                </td>                           
                            </tr>
                        )) }
                    </tbody>
                </table>
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
