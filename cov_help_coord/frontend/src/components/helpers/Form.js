import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addHelper, updateHelper } from '../../actions/helpers'
import { getInstitutions, deleteInstitution, addInstitution, addHelperToInstitution } from '../../actions/institutions';


export class Form extends Component {
    state = {
        name: '',
        phonenumber: '',
        zipcode: ''
    }

    static propTypes = {
        updateHelper: PropTypes.func.isRequired,
        addInstitution: PropTypes.func.isRequired,
        institutionID: PropTypes.number.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, phonenumber, zipcode } = this.state;
        const helper = { name, phonenumber, zipcode };
        this.props.updateHelper(helper); 
        //this.props.addHelperToInstitution(this.props.institutionID, helper.email)
        /*this.setState({
            name: '',
            surname: '',
            email: '',
            zipcode: ''
        });*/
        console.log('submit');
    }

    render() {
        const {name, phonenumber, zipcode} = this.state;
        console.log(this.props.institutionID)       
        return (
            
            <div>
                <div className="card card-body mt-4 mb-4">
                    <h2>Deine Informationen</h2>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Zip Code</label>
                        <input
                            className="form-control"
                            type="text"
                            name="zipcode"
                            onChange={this.onChange}
                            value={zipcode}
                        />
                    </div>
                    <div className="form-group">
                        <label>Handynummer</label>
                        <input
                            className="form-control"
                            type="text"
                            name="phonenumber"
                            onChange={this.onChange}
                            value={phonenumber}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(null, { addHelper, addInstitution, addHelperToInstitution, updateHelper })(Form)
