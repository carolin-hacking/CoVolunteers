import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHelpers, deleteHelper } from '../../actions/helpers';

export class Helpers extends Component {
    static propTypes = {
        helpers: PropTypes.array.isRequired,
        getHelpers: PropTypes.func.isRequired,
        deleteHelper: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHelpers();
    }

    render() {
        return (
            <Fragment>
                <h2>Helpers</h2>
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
                        { this.props.helpers.map(helper => (
                            <tr key={helper.id}>
                                <td>{helper.id}</td>
                                <td>{helper.name}</td>
                                <td>{helper.surname}</td> 
                                <td>{helper.zipcode}</td>
                                <td>{helper.email}</td>
                                <td><button onClick={this.props.deleteHelper.bind(this, helper.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    helpers: state.helpers.helpers
});

export default connect(mapStateToProps, { getHelpers, deleteHelper })(Helpers);
