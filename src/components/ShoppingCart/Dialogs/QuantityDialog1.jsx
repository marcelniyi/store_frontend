import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import DialogComponent from "../../HelperComponents/DialogComponent/DialogComponent";
import RenderField from "../../HelperComponents/RenderField/RenderField";
import { patchQuantity, getStock } from "../../../actions/stockActions";

class QuantityDialog1 extends Component {

    state = {
    };

    
    submitForm = (data) => {
        const { patchQuantity, toggler, product_id, sign,reset, activePage,doRequest } = this.props;
        let obj = {...data};
        if(sign === '-'){
            obj.quantity = `-${data.quantity}`;
        }
        
        patchQuantity(product_id, obj).then(res => {
            if(res.payload && res.payload.status && res.payload.status === 200) {
                reset('QuantityDialog1');
                toggler();
                doRequest( {selected: activePage});
            }
 
        });
    };


    render(){
        const {
            toggler,
            state,
            product_name,
            product_quantity,
            handleSubmit,
            sign,
            fail_err,
            startValue,
            reset,

        } = this.props;
       
        return (

            <DialogComponent
                open={state}
                onClose={() => {toggler(); reset('QuantityDialog1')}}
            >
                <div className="quantity_dialog">
                    <div className="title">
                        <span>Confirm Quantity to delete </span>
                    </div>
                    <div className="descriptions">
                    </div>
                    <form onSubmit={handleSubmit(this.submitForm)}>
                        <div className="block_field">
                            <span>Quantity</span>
                            <span className='back_error'>{fail_err && fail_err.quantity}</span>
                            {sign === '-' ?
                                <Field
                                    id='idx'
                                    name='quantity'
                                    type="number"
                                    max={product_quantity}
                                    component={RenderField}
                                    placeholder="Type here..."
                                    value={startValue}
                                /> :
                                <Field
                                    id='idx'
                                    name='quantity'
                                    type="number"
                                    component={RenderField}
                                    placeholder="Type here..."
                                    value={startValue}
                                />
                            }
                        </div>
                        <div className="btn_wrapper">
                            <button className="cancel_btn" onClick={(e) => {e.preventDefault(); toggler(); reset('QuantityDialog1')}}>Cancel</button>
                            <button className="blue_btn">{sign === '-' ? 'Delete' : 'add'}</button>
                        </div>
                    </form>
                </div>
            </DialogComponent>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.quantity) {
        errors.quantity = 'This field is required'
    }else if(values.quantity && /-/.test(values.quantity)){
        errors.quantity = 'Ensure this value is greater than or equal to 0'
        
    }
    
    return errors
};

QuantityDialog1 = reduxForm({
    form: 'QuantityDialog1',
    validate
    
})(QuantityDialog1);
function mapStateToProps(state) {
    return{
        fail_err: state.stock.error,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        patchQuantity,
        getStock
    }, dispatch);
    
}
export default connect(mapStateToProps, mapDispatchToProps)(QuantityDialog1);
