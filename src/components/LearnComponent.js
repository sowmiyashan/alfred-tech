import React, { Component } from 'react';

class Learn extends Component {
    render() {
        return (
            <div  id="learnPage">
                <div className="container">
                    <div id="basics" >
                        <h5 className="w3-padding-16">Choose your path!</h5>
                        <p className="w3-text-grey">Beginners start at Basics.I</p>
                        <p className="w3-text-grey">Advanced learners take a short test.</p>
                        <div className="w3-padding-48 row">
                            <span>
                                <button type="button" className="btn btn-primary"><i className="fa fa-futbol-o fa-3x" aria-hidden="true"></i></button>
                                <p >Basics 1</p>
                            </span>
                            <span className="or"> OR </span>
                            <span>
                                <button type="button" className="btn btn-success"><i className="fa fa-building-o fa-3x" aria-hidden="true"></i></button>
                                <p >Placement test</p>
                            </span>
                        </div>
                    </div>
                    <div id="levels">
                        <div className="w3-padding-16 row">
                            <div className="col-6 d-flex justify-content-center">
                                <div className="border"></div>
                                <button type="button" className="lvl"><i className="fa fa-futbol-o fa-3x" aria-hidden="true"></i></button>
                                <span className="name">Basics 2</span>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <div className="border"></div>
                                <button type="button" className="lvl"><i className="fa fa-comments fa-3x" aria-hidden="true"></i></button>
                                <p className="name">Phrases</p>
                            </div>
                        </div>
                        <div className="w3-padding row lvl2">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="border"></div>
                                <button type="button" className="lvl"><i className="fa fa-address-book-o fa-3x" aria-hidden="true"></i></button>
                                <p className="name">Phrases 2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Learn;