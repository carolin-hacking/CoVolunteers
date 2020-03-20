import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInstitutions, deleteInstitution } from '../../actions/institutions';

export class Institutions extends Component {
    static propTypes = {
        institutions: PropTypes.array.isRequired,
        getInstitutions: PropTypes.func.isRequired,
        deleteInstitution: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getInstitutions();
    }
//{ companyname, ansprechpartner, zipcode, companytype, title, description 
    render() {
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
                                <td><button className="btn btn-success btn-sm">Anmelden</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    institutions: state.institutions.institutions
});

export default connect(mapStateToProps, { getInstitutions, deleteInstitution })(Institutions);
