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

    render() {
        return (
            <Fragment>
                <h2>institutions</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Zip Code</th>
                            <th>Mail Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.institutions.map(institution => (
                            <tr key={institution.id}>
                                <td>{institution.id}</td>
                                <td>{institution.name}</td>
                                <td>{institution.surname}</td> 
                                <td>{institution.zipcode}</td>
                                <td>{institution.email}</td>
                                <td><button onClick={this.props.deleteInstitution.bind(this, institution.id)} className="btn btn-danger btn-sm">Delete</button></td>
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
