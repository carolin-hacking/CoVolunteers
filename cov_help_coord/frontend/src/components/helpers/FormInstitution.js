import { addInstitution } from '../../actions/institutions';
import React, { Component } from 'react';
import Select from 'react-select'


import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class FormInstitution extends Component {
        
    
    static propTypes = {
        addInstitution: PropTypes.func.isRequired,
        }; 
    
    state = {
        companyname: '',
        ansprechpartner: '',
        zipcode: '',
        companytype: '',
        title: '',
        description: '',
        showcompany: ''
    }
    

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handleChange = (selectedOption) => {
        this.setState({ companytype: selectedOption.value, showcompany: selectedOption.label });
        console.log(`Option selected:`, selectedOption);
      }

    onSubmit = e => {
        e.preventDefault();
        const { companyname, ansprechpartner, zipcode, companytype, title, description } = this.state;
        const helpers = [1]
        const institution = { companyname, ansprechpartner, zipcode, companytype, title, description, helpers };
        console.log(institution)
        this.props.addInstitution(institution);
        console.log('submit');
    }

    render() {
        const {companyname, ansprechpartner, zipcode, companytype, title, description, showcompany} = this.state;
        const options = [
            {value: 'HOS', label: 'Krankenhaus/Niedergelassene ÄrtzInnen'},
            {value: 'FAR', label: 'Landwirt'},
            {value: 'SUP', label: 'Supermarkt'},
            {value: 'CAR', label: 'Pflegedienst'}
        ]
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
                        <Select 
                        name="companytype"
                        value={this.state.showcompany}
                        options={options}                        
                        onChange={this.handleChange}
                        />
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


const mapStateToProps = state => ({
    institutions: state.institutions.institutions
});

export default connect(mapStateToProps, { addInstitution})(FormInstitution)
