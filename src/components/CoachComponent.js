import React, { Component } from 'react';
import Profile from './ProfileComponent'
import Footer from './FooterComponent'
import { goals } from '../shared/dispData'

class Coach extends Component {
    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-8">
                        <div className="row w3-padding-large">
                            <div className="col-9">
                                <h3>Daily Goal Settings</h3>
                            </div>
                            <div className="col-2">
                                <button type="button" class="btn btn-secondary btn-lg">Save changes</button>
                            </div>
                        </div>
                        <div className="row w3-padding-large">
                            <div className="col-12">
                                <h6 className="w3-text-grey">Coach Here! Selecting a daily goal will help you stay motivated while learing a language. 
                                    You can change you goal any time.
                                </h6>
                            </div>
                        </div>
                        <div className="row w3-padding-24">
                            <div className="col-5">
                               <img src="./bird.svg" width="250px" height="300px"/>
                            </div>
                            <div className="col-7">
                                <div id="goals">
                                    {
                                        goals.map((g)=>{
                                            return(
                                                <>
                                                <button type="button" className="btn btn-normal">
                                                    <div  className="row w3-padding" key={g.id}>
                                                        <div className="col-7">
                                                            <h6 className="weight">{g.title}</h6>
                                                        </div>
                                                        <div className="col-5">
                                                            <p>{g.goal} XP per Day</p>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-divider"></div>
                                                </button>
                                                    
                                                    
                                                 </>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w3-padding-32"></div>
                        <Footer/>
                    </div>
                    <div className="col-4">
                        <Profile/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Coach;