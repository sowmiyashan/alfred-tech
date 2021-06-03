import React, { Component } from 'react';
import Learn from './LearnComponent'
import Account from './AccountComponent'
import Coach from './CoachComponent'
import Header from './HeaderComponent'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Learn}/>
                        <Route exact path="/Account" component={Account}/>
                        <Route exact path="/Coach" component={Coach}/>
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

export default Main;