import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import EditDialog from "./Dialogs/EditDialog";
import AddingDialog from "./Dialogs/AddingDialog";
import DeleteDialog from "./Dialogs/DeleteDialog";
import { Container, Row, Col } from 'react-bootstrap';
import { getUsersList, resetErrorUsers } from "../../actions/UserActions";

import './StockSettings.scss';


class UserManagement extends Component {
    state = {

    };

    componentDidMount() {
        this.doRequest();
    }

    doRequest = () => {

    };


    render() {
        const { openDeleteDialog, openEditDialog, openAddDialog, loading, userData } = this.state;
        const { users_list } = this.props;
        if (loading) return null;
        return (
            <div className="user_management_page content_block">
                <div className="title_page">Stock Settings</div>
                <div className="content_page">

                    <Row>
                        <Col md="4" className="inputField">
                        <span>sufficient stock greater than 5</span>
                        </Col>
                        <Col md="8">
                            <div class="stepper-input">
                                <button class="btn btn-left addButton">-</button>
                                <input type="text" placeholder="" value="6" class="input-box" />
                                <button class="btn btn-right addButton">+</button>
                            </div>
                        </Col>
                        <Col md="4">
                        <span>Low stock is less than or equal 5</span>
                        </Col>
                        <Col md="8">
                            <div class="stepper-input">
                             
                                <button class="btn btn-left addButton">-</button>
                                <input type="text" placeholder="" value="30" class="input-box" />
                                <button class="btn btn-right addButton">+</button>
                            </div>
                        </Col>
                        <br />
                        <Col md="4">
                        <span>Out of stock is Less than 1</span>
                        </Col>
                        <Col md="8">
                            <div class="stepper-input">
                                <button class="btn btn-left addButton">-</button>
                                <input type="text" placeholder="" value="30" class="input-box" />
                                <button class="btn btn-right addButton">+</button>
                            </div>
                        </Col>
                    </Row>

                    <button className="blue_btn">Save</button>

                    
                </div>

            </div>
        );
    }
}

UserManagement = reduxForm({
    form: 'UserManagement',

})(UserManagement);

function mapStateToProps(state) {
    return {
        users_list: state.users.users_list,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
