import React, { Component } from 'react';
import { NavLink } from 'reactstrap'
import { Tabs } from '../shared/dispData'


class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div className="row w3-padding-large">
                    <div className="col-2">
                        <div id="dp"><i class="fa fa-header fa-lg" aria-hidden="true"></i></div>
                    </div>
                    <div className="col-8">
                        <h4>HerculusMunda</h4>
                        <a href="/" className="weight">VIEW YOUR PROFILE</a>
                    </div>
                </div>

                {
                    Tabs.map((tab)=>{
                        return(
                            <div className="row w3-padding-large" key={tab.id}>
                                <div className="col-12">
                                    <NavLink className="nav-link" to={"/"+tab.title}>
                                        <span className="weight">{tab.title}</span>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Profile;