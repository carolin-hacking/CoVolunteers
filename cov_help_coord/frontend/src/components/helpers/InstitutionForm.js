import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInstitutions, deleteInstitution, addInstitution } from '../../actions/institutions';

export class InstitutionForm extends Component {
    
    static propTypes = {
        deleteInstitution: PropTypes.func.isRequired,
        addInstitution: PropTypes.func.isRequired
    };  
    
    state = {
        companyname: '',
        ansprechpartner: '',
        zipcode: '',
        companytype: '',
        title: '',
        description: '',
    }
    

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { companyname, ansprechpartner, zipcode, companytype, title, description } = this.state;
        const institution = { companyname, ansprechpartner, zipcode, companytype, title, description };
        this.props.addInstitution(institution);
        console.log('submit');
    }

    render() {
        const {companyname, ansprechpartner, zipcode, companytype, title, description} = this.state;
        return (
            <div>
                <div className="card card-body mt-4 mb-4">
                    <h2>Aktuelles Gesuch</h2>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name der Einrichtung</label>
                        <input
                        className="form-control"
                        type="text"
                        name="companyname"
                        onChange={this.onChange}
                        value={companyname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name Ansprechpartner</label>
                        <input
                        className="form-control"
                        type="text"
                        name="ansprechpartner"
                        onChange={this.onChange}
                        value={ansprechpartner}
                        />
                    </div>
                    <div className="form-group">
                        <label>Art der Einrichtung</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Choose...</option>
                            <option value={companytype}>Krankenhaus/Niedergelassene ÄrtzInnen</option>
                            <option value={companytype}>Landwirt</option>
                            <option value={companytype}>Supermarkt</option>
                            <option value={companytype}>Pflegedienst</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Postleitzahl</label>
                        <input
                        className="form-control"
                        type="text"
                        name="zipcode"
                        onChange={this.onChange}
                        value={zipcode}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Titel Stellenbeschreibung</label>
                        <input
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stellenbeschreibung</label>
                        <textarea
                        className="form-control"
                        type="text"
                        name="description"
                        onChange={this.onChange}
                        value={description}
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

export default connect(null, { addInstitution, deleteInstitution })(InstitutionForm)
