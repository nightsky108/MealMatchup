import React, { Component } from 'react';

class PersonalAccount extends Component {

    render() {

        return (
            <div className="scs-0">
                <div className="scs-0-content scs-1-content">
                    <h5>Personal Details</h5>

                    {!this.props.isEditingPmem ? 
                        
                        <div>
                           
                            <div className="amd-row">
                                <div className="amd-details amd-details-1">
                                    <div className="amd-details-child">
                                        <h6>{this.props.account.name}</h6>
                                        <h6>{this.props.account.position}</h6>
                                        <h6>{this.props.account.email}</h6>
                                        <h6>{this.props.account.phone}</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="amd-edit amd-edit-1">
                                <button type="button" className="form-button confirm-button" onClick={this.props.handleEditPmem}>Edit</button>
                            </div>

                        </div>

                        :

                        <form onSubmit={this.handleSubmit.bind(this)}>
                            
                            <div className="editing-box">
                                <div className="editing-child-1">
                                    <label className="label-component details">Name</label><br /><br />
                                    <label className="label-component details">Title/Position</label><br /><br />
                                    <label className="label-component details">Email</label><br /><br />
                                    <label className="label-component details">Phone Number</label><br /><br />
                                </div>
                                
                                <div className="editing-child-2 amd-editing-2">
                                    <input name="name" type="text" className="form-input" defaultValue={this.props.account.name} /><br /><br />
                                    <input name="position" type="text" className="form-input" defaultValue={this.props.account.position} /><br /><br />
                                    <input name="email" type="text" className="form-input" defaultValue={this.props.account.email} /><br /><br />
                                    <input name="phone" type="tel" className="form-input" defaultValue={this.props.account.phone} /><br /><br />
                                </div> 
                            </div>

                            <div className="amd-edit amd-edit-1">
                                <button type="submit" className="form-button confirm-button" onSubmit={this.handleSubmit.bind(this)}>Save</button>
                            </div>
                        </form>

                    }

                </div>
            </div>
        );

    }

    handleSubmit(e) {
        e.preventDefault();
        let acc = {
            name: e.target.name.value,
            position: e.target.position.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        };
        this.props.handlePmemSave(acc);   
    }

}

export default PersonalAccount;