import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { droptabs } from '../shared/dispData'



class Header extends Component {

    render() {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Content className="row">
                    <div className="col-8 ">
                        Notifications
                    </div>
                    <div className="col-4">
                        <a href="/" className="lnk">SEE ALL</a>
                    </div>
                </Popover.Content>
                <div class="dropdown-divider"></div>
                <Popover.Content className="row">
                    <div className="col-2">
                        <span className="fa fa-first-order fa-3x"></span>
                    </div>
                    <div className="col-10">
                        You lost your wager. Better luck next time!
                    </div>
                </Popover.Content>
                <div class="dropdown-divider"></div>
                <Popover.Content>
                    <NavLink to="/Account"><a  href="/Account" className="w3-text-black">Account</a></NavLink>
                </Popover.Content>
                {
                    droptabs.map((dt) =>{
                        return(
                            <>
                                <div class="dropdown-divider"></div>
                                <Popover.Content>
                                    <a className="lnk" href={"/"+dt.tab}>{dt.tab}</a>
                                </Popover.Content>
                            </>
                        );
                    })
                }
            </Popover>
          );

        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <Navbar expand="md">
                            <div className="container">
                                <Nav navbar >
                                    <NavItem className="link">
                                        <NavLink className="nav-link" to="/learn">
                                            <span className="fa fa-graduation-cap fa-lg"></span> LEARN
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="link">
                                        <NavLink className="nav-link " to="/stories">
                                            <span className="fa fa-leanpub fa-lg"></span> STORIES
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="link">
                                        <NavLink className="nav-link " to="/shop">
                                            <span className="fa fa-building fa-lg"></span> SHOP
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="link">
                                        <NavLink className="nav-link " to="/more">
                                            <span className="fa fa-ellipsis-h fa-lg"></span> MORE
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                    <NavItem className="l-icons">
                                        <NavLink className="nav-link " to="/learn">
                                            <span className="fa fa-gift fa-lg"></span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="l-icons">
                                        <NavLink className="nav-link " to="/learn">
                                            <span className="fa fa-trophy fa-lg"></span> 0
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="l-icons">
                                        <NavLink className="nav-link " to="/learn">
                                            <span className="fa fa-fire fa-lg"></span> 0
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="l-icons">
                                        <NavLink className="nav-link " to="/learn">
                                            <span className="fa fa-first-order fa-lg"></span> 10
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="l-icons ">
                                        <button type="button" className="btn">
                                            <OverlayTrigger trigger="click" data-trigger="focus" placement="bottom" overlay={popover}>
                                                <a><span className="fa fa-header fa-lg"></span></a>
                                            </OverlayTrigger>
                                        </button>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Navbar>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Header;