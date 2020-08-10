import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import Pagination from '../HelperComponents/Pagination/Pagination';
import { getActivity } from "../../actions/activityActions";
import { getStock } from "../../actions/stockActions";
import './Activity.scss';
import { Table } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";

import imageData from '../../assets/image/logo.png';
import {data_image} from "./imagedata";

import jsPDF from 'jspdf';
import 'jspdf-autotable';


class Activity extends Component {

    state = {
        model: false,
        activePage: 1,
        loading: true,
        tab: '1',
        activity:
        {
            label:
                <div>

                </div>
            , value: "supply_requests"
        }
    };

    componentDidMount() {
        this.doRequest();
        this.doStock();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    };

    doRequest = (page = 1) => {
        const { getActivity } = this.props;
        const { activity } = this.state;
        getActivity(activity.value, page).then(res => {
            if (res.payload && res.payload.status && res.payload.status === 200) {
                this.setState({ loading: false });
            }
        })
    };

    changeTab = (tab) => {
        this.setState({
            tab: tab
        })
    }

    doStock = (page = 1) => {
        const { getStock } = this.props;
        const { stock, switcherState } = this.state;
        getStock(stock, page !== undefined ? page.selected + 1 : false, switcherState).then(res => {
            if (res.payload && res.payload.status && res.payload.status === 200) {
                if (page !== undefined) {
                    this.setState({
                        loading: false,
                        activePage: page.selected,
                        totalPages: res.payload.data.total_pages,
                        totalItems: res.payload.data.count
                    })
                } else {
                    this.setState({
                        loading: false,
                        totalPages: res.payload.data.total_pages,
                        totalItems: res.payload.data.count,
                        activePage: (page ? page : 0),
                    })
                }
            }
        })
    };
    changePage = (page) => {
        this.setState({ activePage: page.selected + 1 });
        this.doRequest(page.selected + 1);
        this.doStock(page.selected + 1);
    };

    handleChange = name => event => {
        // const status = { status: event.value }
        this.setState({ [name]: event });
        this.timer = this.timeout = setTimeout(() => {
            this.doRequest();
            this.doStock();
        }, 0);
    };

    showModal = (e) => {
        this.setState({ model: true });
    };
    hideModal = (e) => {
        this.setState({ model: false });
    };

    generatePDF = (Date, Product, Quanity, Price, customer) => {
        var doc = new jsPDF('p', 'pt');
        let imageData = data_image;
        doc.addImage(imageData, 'PNG', 30, 40, 250, 75)

        doc.setFont('times')
        doc.setFontType('italic')
        doc.setFontSize(10)
        doc.text(290, 50, 'Address: K&M Building 1st Floor Opposite Sonatube kicukiro kigali')
        doc.text(290, 65, 'Email: alex@viebeg.com / tobias@viebeg.com')
        doc.text(290, 80, 'Website: www.viebeg.com')
        doc.text(290, 95, 'Office line: +250782205366 Tel: +250787104894')

        doc.autoTable({
            theme: "grid",
            margin: { top: 150 },
            styles: { lineColor: 'black', lineWidth: 1, },
            body: [
                [{ content: 'PROFORMA INVOICE', colSpan: 4, styles: { halign: 'center', fontSize: 12, font: 'times', fontStyle: 'bold' } }],
                [{ content: 'Client Name: Legacy Clinic\r\nPI#: PI01\r\nDate: 13/07/2020\r\nSales Rep: Cecile', colSpan: 4, styles: { font: 'italic', fontSize: 10, fontStyle: 'bold' } }],
                ['ITEM DESCRIPTION', 'QTY', 'UNIT PRICE', 'TOTAL'],
                ['Niti wire upper 016 * 022', '10', '6000', '60000'],
                ['Niti wire upper 016 * 022', '10', '6000', '60000'],
                ['Niti wire upper 016 * 022', '10', '6000', '60000'],
                ['Niti wire upper 016 * 022', '10', '6000', '60000'],
                ['Niti wire upper 016 * 022', '10', '6000', '60000'],
                [{ content: '', colSpan: 2, styles: { halign: 'center' } }, 'Total', '1,809,000'],
                [{ content: 'VAT EXEMPTED\r\nTIN: 107902413\r\Account Number: 21102347510015100000 / GT Bank, Main Branch \r\n Delivery: Immediately', colSpan: 4, styles: { font: 'italic', fontSize: 10, fontStyle: 'bold' } }],


            ],
        })

        doc.save(customer + '_profomer.pdf')
    }
    render() {

        const { activePage, activities_list, activity, loading, tab } = this.state;
        const { activityLog } = this.props;

        if (loading) return null;
        return (

            <div className="activity_page content_block">

                <div className="title_page">Profomas invoice</div>
                <div className="activity_block">

                <div className="tab_block">
                    <button
                            className={tab === "1" ? "active" : ""}
                            onClick={() => this.changeTab("1")}
                        >
                            Proformas
                        </button>

                        <button
                            className={tab === "2" ? "active" : ""}
                            onClick={() => this.changeTab("2")}
                        >
                            Purchase Orders
                        </button>

                        <button
                            className={tab === "3" ? "active" : ""}
                            onClick={() => this.changeTab("3")}
                        >
                            Delivery Notes
                        </button>

                        <button
                            className={tab === "4" ? "active" : ""}
                            onClick={() => this.changeTab("4")}
                        >
                            Invoices
                        </button>
                        <button
                            className={tab === "5" ? "active" : ""}
                            onClick={() => this.changeTab("5")}
                        >
                            Receipts
                        </button>
                    </div>


                   {tab === "1" &&  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>DATE</th>
                                <th>REQUEST</th>
                                <th>EXPECTED DELIVERY</th>
                                <th>PDF</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {activityLog.results && activityLog.results.length > 0 ?
                                activityLog.results.map((el, index) => (
                                    <tr
                                    >
                                        <td key={index}>{index}</td>
                                        <td key={index}>{moment(el.date_created).format('DD/MM/YYYY')}</td>
                                        <td><button onClick={() => { this.showModal(el.date_created, el.product_name, el.quantity, el.price, el.customer_name) }} type="primary">{el.customer_name} requests</button></td>
                                        <td>18-03-2020</td>
                                        <td>

                                            <div>
                                                <button onClick={() => { this.generatePDF('download') }} type="primary">Download PDF</button>
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                <button type="primary">Send Email</button>
                                            </div>
                                        </td>

                                        <td>
                                            <button className="btn btn-success btn-sm" onClick={() => { alert("We goin to approve") }}>Approve</button>
                                        </td>
                                    </ tr >
                                ))
                                :
                                <h3>The list is empty.</h3>
                            }


                        </tbody>
                    </Table>
                    }
                   { tab === "1" && activityLog.count > 10 &&
                        <div className="pagination_info_wrapper">
                            <div className="pagination_block">

                                <Pagination
                                    current={activePage}
                                    pageCount={activityLog.total_pages}
                                    onChange={this.changePage}
                                />

                            </div>
                            <div className="info">Displaying page {activePage} of {activityLog.total_pages},
                            items {activePage * 10 - 9} to {activePage * 10 > activityLog.count ? activityLog.count : activePage * 10} of {activityLog.count}</div>
                        </div>
                    }




{tab === "2" &&  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>DATE</th>
                                <th>PURCHASE ORDERS</th>
                                <th>EXPECTED DELIVERY</th>
                                <th>PDF</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {activityLog.results && activityLog.results.length > 0 ?
                                activityLog.results.map((el, index) => (
                                    <tr>
                                        <td>{index}</td>
                                        <td key={index}>{moment(el.date_created).format('DD/MM/YYYY')}</td>
                                        <td><button onClick={() => { this.showModal(el.date_created, el.product_name, el.quantity, el.price, el.customer_name) }} type="primary">{el.customer_name} requests</button></td>
                                        <td>18-03-2020</td>
                                        <td>

                                            <div>
                                                <button onClick={() => { this.generatePDF('download') }} type="primary">Download PDF</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button type="primary">Send Email</button>
                                            </div>
                                        </td>

                                        <td>
                                            <button className="btn btn-warning btn-sm">Submited</button>
                                        </td>
                                    </ tr >
                                ))
                                :
                                <h3>The list is empty.</h3>
                            }


                        </tbody>
                    </Table>
                    }
                   { tab === "2" && activityLog.count > 10 &&
                        <div className="pagination_info_wrapper">
                            <div className="pagination_block">

                                <Pagination
                                    current={activePage}
                                    pageCount={activityLog.total_pages}
                                    onChange={this.changePage}
                                />

                            </div>
                            <div className="info">Displaying page {activePage} of {activityLog.total_pages},
                            items {activePage * 10 - 9} to {activePage * 10 > activityLog.count ? activityLog.count : activePage * 10} of {activityLog.count}</div>
                        </div>
                    }





                    {tab === "3" &&  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>DELIVERY NOTES</th>
                                <th>PDF</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {activityLog.results && activityLog.results.length > 0 ?
                                activityLog.results.map((el, index) => (
                                    <tr
                                    >
                                        {console.log(activityLog)}
                                        <td key={index}>{moment(el.date_created).format('DD/MM/YYYY')}</td>
                                        <td><button onClick={() => { this.showModal(el.date_created, el.product_name, el.quantity, el.price, el.customer_name) }} type="primary">{el.customer_name} requests</button></td>

                                        <td>

                                            <div>
                                                <button onClick={() => { this.generatePDF('download') }} type="primary">Download PDF</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button type="primary">Send Email</button>
                                            </div>
                                        </td>

                                        <td>
                                            <button className="btn btn-success btn-sm" onClick={() => { alert("We goin to approve") }}>Approve</button>
                                        </td>
                                    </ tr >
                                ))
                                :
                                <h3>The list is empty.</h3>
                            }


                        </tbody>
                    </Table>
                    }
                   { tab === "3" && activityLog.count > 10 &&
                        <div className="pagination_info_wrapper">
                            <div className="pagination_block">

                                <Pagination
                                    current={activePage}
                                    pageCount={activityLog.total_pages}
                                    onChange={this.changePage}
                                />

                            </div>
                            <div className="info">Displaying page {activePage} of {activityLog.total_pages},
                            items {activePage * 10 - 9} to {activePage * 10 > activityLog.count ? activityLog.count : activePage * 10} of {activityLog.count}</div>
                        </div>
                    }





{tab === "4" &&  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>INVOICES</th>
                                <th>PDF</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {activityLog.results && activityLog.results.length > 0 ?
                                activityLog.results.map((el, index) => (
                                    <tr
                                    >
                                        {console.log(activityLog)}
                                        <td key={index}>{moment(el.date_created).format('DD/MM/YYYY')}</td>
                                        <td><button onClick={() => { this.showModal(el.date_created, el.product_name, el.quantity, el.price, el.customer_name) }} type="primary">{el.customer_name} requests</button></td>

                                        <td>

                                            <div>
                                                <button onClick={() => { this.generatePDF('download') }} type="primary">Download PDF</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button type="primary">Send Email</button>
                                            </div>
                                        </td>

                                        <td>
                                            <button className="btn btn-success btn-sm" onClick={() => { alert("We goin to approve") }}>Approve</button>
                                        </td>
                                    </ tr >
                                ))
                                :
                                <h3>The list is empty.</h3>
                            }


                        </tbody>
                    </Table>
                    }
                   { tab === "4" && activityLog.count > 10 &&
                        <div className="pagination_info_wrapper">
                            <div className="pagination_block">

                                <Pagination
                                    current={activePage}
                                    pageCount={activityLog.total_pages}
                                    onChange={this.changePage}
                                />

                            </div>
                            <div className="info">Displaying page {activePage} of {activityLog.total_pages},
                            items {activePage * 10 - 9} to {activePage * 10 > activityLog.count ? activityLog.count : activePage * 10} of {activityLog.count}</div>
                        </div>
                    }





{tab === "5" &&  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>RECIPTS</th>
                                <th>PDF</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {activityLog.results && activityLog.results.length > 0 ?
                                activityLog.results.map((el, index) => (
                                    <tr
                                    >
                                        {console.log(activityLog)}
                                        <td key={index}>{moment(el.date_created).format('DD/MM/YYYY')}</td>
                                        <td><button onClick={() => { this.showModal(el.date_created, el.product_name, el.quantity, el.price, el.customer_name) }} type="primary">{el.customer_name} requests</button></td>

                                        <td>

                                            <div>
                                                <button onClick={() => { this.generatePDF('download') }} type="primary">Download PDF</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button type="primary">Send Email</button>
                                            </div>
                                        </td>

                                        <td>
                                            <button className="btn btn-warning btn-sm">Payment due</button>
                                        </td>
                                    </ tr >
                                ))
                                :
                                <h3>The list is empty.</h3>
                            }


                        </tbody>
                    </Table>
                    }
                   { tab === "5" && activityLog.count > 10 &&
                        <div className="pagination_info_wrapper">
                            <div className="pagination_block">

                                <Pagination
                                    current={activePage}
                                    pageCount={activityLog.total_pages}
                                    onChange={this.changePage}
                                />

                            </div>
                            <div className="info">Displaying page {activePage} of {activityLog.total_pages},
                            items {activePage * 10 - 9} to {activePage * 10 > activityLog.count ? activityLog.count : activePage * 10} of {activityLog.count}</div>
                        </div>
                    }


                </div>


                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.model}>
                        <Modal.Header>
                        <button type="button" className="close" onClick={this.hideModal} data-dismiss="modal">&times;</button>
                    </Modal.Header>
                    <ModalBody className="modelBody">
                        <table style={{ marginBottom: '25px' }}>
                            <tr>
                                <td><img src={imageData} /> </td>
                                 <td>
                                    Address: K&M Building 1st Floor Opposite Sonatube kicukiro kigali <br />
                                    Email: alex@viebeg.com / tobias@viebeg.com <br />
                                    Website: www.viebeg.com <br />
                                    Office line: +250782205366 Tel: +250787104894 <br />
                                </td>
                            </tr>

                        </table>
                        <table className="table table-bordered">
                            <tr><td colspan='4' id="proformaTitle">PROFORMA INVOICE</td></tr>
                            <tr><td colspan='4' id="clientDesc">Client Name: Legacy Clinic<br />
                                                PI#: PI01<br />
                                                Date: 13/07/2020<br />
                                                Sales Rep: Cecile<br />
                            </td></tr>

                            <tr><td>ITEM DESCRIPTION</td><td>QTY</td><td>UNITY PRICE</td><td>TOTAL</td></tr>
                            <tr><td>Niti wire upper 016 * 022<br /><span><b>EXPECTED DELIVERY</b>:18-03-2020</span></td><td>10</td><td>60000</td><td>60000</td></tr>
                            <tr><td>Niti wire upper 016 * 022<br /><span><b>EXPECTED DELIVERY</b>:18-03-2020</span></td><td>10</td><td>60000</td><td>60000</td></tr>
                            <tr><td>Niti wire upper 016 * 022<br /><span><b>EXPECTED DELIVERY</b>:18-03-2020</span></td><td>10</td><td>60000</td><td>60000</td></tr>
                            <tr><td>Niti wire upper 016 * 022<br /><span><b>EXPECTED DELIVERY</b>:18-03-2020</span></td><td>10</td><td>60000</td><td>60000</td></tr>
                            <tr><td colspan='2'></td> <td>TOTAL</td><td>12000000</td> </tr>
                            <tr><td colspan='4' id="clientDesc">
                            VAT EXEMPTED<br />TIN: 107902413<br />Account Number: 21102347510015100000 / GT Bank, Main Branch <br /> Delivery: Immediately
                            </td></tr>
                        </table>
                    </ModalBody>
                    <Modal.Footer>
                    <button onClick={this.hideModal}>Close</button>
                    </Modal.Footer>
                </Modal>



            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activityLog: state.activity.activityLog,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getActivity,
        getStock
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
