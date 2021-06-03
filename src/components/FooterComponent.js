import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink} from 'reactstrap'
import { ftabs } from '../shared/dispData'



class Footer extends Component {
    render() {
        return (
            <div className="row footer w3-padding-16">
                <Navbar expand="md">
                    <Nav navbar>
                        {
                            ftabs.map((tab)=>{
                                return(
                                    <NavItem key={tab.id} className="ftab">
                                        <NavLink className="nav-link" to={"/"+tab.tab}>
                                           {tab.tab}
                                        </NavLink>
                                    </NavItem>
                                );
                            })
                        }
                        {/* <NavItem>
                            <NavLink className="nav-link" to="/learn">
                                <span className="fa fa-graduation-cap fa-lg"></span> LEARN
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link " to="/learn">
                                <span className="fa fa-leanpub fa-lg"></span> STORIES
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link " to="/learn">
                                <span className="fa fa-building fa-lg"></span> SHOP
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link " to="/learn">
                                <span className="fa fa-ellipsis-h fa-lg"></span> MORE
                            </NavLink>
                        </NavItem> */}
                    </Nav>     
                </Navbar>
                
            </div>
        );
    }
}

export default Footer;