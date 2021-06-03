import React, { Component } from 'react';
import Profile from './ProfileComponent'
import { textField, toggleField } from '../shared/dispData'

class Account extends Component {
    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-8">
                        <div className="row w3-padding-large">
                            <div className="col-9">
                                <h3>Account Settings</h3>
                            </div>
                            <div className="col-2">
                                <button type="button" className="btn btn-secondary btn-lg">Save changes</button>
                            </div>
                        </div>
                        <div className="w3-padding-24"></div>
                        {
                            textField.map((tab) =>{
                                return(
                                    <div className="row w3-padding-16 form-group" key={tab.id}>
                                        <div className="col-3">
                                            <p className="weight">{tab.field}</p>
                                        </div>
                                        <div className="col-8">
                                            <input type="text" defaultValue={(tab.id ===1) ? "HerculusMunda" : "hercu03@gmail.com"} className="form-control" id="usr" name="username"/>
                                            {(tab.id === 2 ? <div className="invalid-feedback">Email not verified <a className="w3-text-red" href="/Account">Verify Now</a></div> : <></>)}
                                        </div>
                                    </div>
                                );
                            })
                        }
                        {
                            toggleField.map((tab) =>{
                                return(
                                    <div className="row w3-padding-16 form-group" key={tab.id} >
                                    <div className="col-3">
                                        <p className="weight">{tab.field}</p>
                                    </div>
                                    <div className="col-8">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" checked="true" id={tab.field}/>
                                        <label className="custom-control-label" for={tab.field}></label>
                                    </div>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>
                    <div className="col-4">
                        <Profile/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Account;