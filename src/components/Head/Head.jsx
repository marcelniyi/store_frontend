import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import logout from '../../assets/image/logout.svg';
import './Head.scss';
import { Dropdown } from 'react-bootstrap';
import on from '../../assets/image/profile_pic.jpg';


class Head extends Component {

    handleOut = () => {
        const { history } = this.props;
        localStorage.clear();
        history.push('/auth/sign-in');
    };

    render(){
        const name = localStorage.username;
        const email = localStorage.email;
        console.log(localStorage);
        return (
            <header className="header_wrapper">
                <div>
                    
                    <div className="email">{email}</div>
                </div>
                {/* <button className="logout" onClick={this.handleOut}>
                    <img src={logout} alt="logout"/>
                </button> */}
                <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Header>
                        <img src={on} style={{width: '200px', height: '200px'}} /><br />
                        <span style={{ marginLeft: '40%', fontWeight: 'bold' }}>{localStorage.username} </span>
                    </Dropdown.Header>
                    
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accounts</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Stock managment settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Activity Log</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.handleOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return{

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);