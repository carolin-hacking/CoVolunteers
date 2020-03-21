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

    isNotDummyHelper(helper) {
        return helper.id !== 1
    }

    render() {
        return (
            <Fragment>
                <h2>Helpers</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Zip Code</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.helpers.filter(this.isNotDummyHelper).map(helper => (
                            <tr key={helper.id}>
                                <td>{helper.name}</td>
                                <td>{helper.zipcode}</td>
                                <td>{helper.email}</td>
                                <td>{helper.phonenumber}</td>                                 
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
