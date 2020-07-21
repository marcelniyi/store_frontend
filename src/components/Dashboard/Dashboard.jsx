import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
    getClinicLog,
    getClinicDashBoard
} from "../../actions/dashboardActions";
import arrow_forward from '../../assets/image/arrow_forward copy.svg';
import './Dashboard.scss';
import { Card, CardDeck } from 'react-bootstrap';
import { DonutChart } from '@opd/g2plot-react';
import { LineChart } from '@opd/g2plot-react'
import { Container, Grid } from '@material-ui/core';

import Lowstock from '../../assets/image/low.png';
import Outstock from '../../assets/image/out.png';
import Suficient from '../../assets/image/suficient.png';
//https://codesandbox.io/s/g2plot-react-example-xx3gp?fontsize=14&hidenavigation=1&theme=dark&file=/src/ring.tsx
import { getActivity } from "../../actions/activityActions";
import SelectComponent from '../HelperComponents/SelectComponent/SelectComponent';
import Pagination from '../HelperComponents/Pagination/Pagination';
import FormControl from '@material-ui/core/FormControl'
import CanvasJSReact from '../../assets/canvas/canvasjs.react';
import { bindActionCreators } from 'redux';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const data = [
    {
        type: "Cost of sales",
        value: 27
    },
    {
        type: "Clearing",
        value: 25
    },
    {
        type: "PAY AS YOU EARN",
        value: 18
    },
    {
        type: "Everything else",
        value: 15
    }
];

const config = {
    forceFit: true,
    color: ['#0B5345', '#1ABC9C', '#76D7C4', '#A3E4D7'],
    statistic: {
        visible: false
    },


    description: {
        visible: true,
        text: "This Month"
    },

    padding: "10%",
    data,
    legend: {
        visible: true,
        position: 'bottom-center',
    },
    angleField: "value",
    colorField: "type"
};
class Dashboard extends Component {
    state = {
        activePage: 1,
        loading: true,
        activity:
        {
            label:
                <div className="status" >
                </div>
            , value: "supply_requests"
        },
    };
    //Stock Status
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }

    //Stock Per Month

    componentDidMount() {
        this.doRequest();
        const { getClinicLog, getClinicDashBoard } = this.props;
        getClinicLog().then(res => {
            if (res.payload && res.payload.status && res.payload.status === 200) {
                getClinicDashBoard().then(res => {
                    if (res.payload && res.payload.status && res.payload.status === 200) {
                        this.setState({ loading: false });
                    }
                })
            }
        })

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

    changePage = (page) => {
        this.setState({ activePage: page.selected + 1 });
        this.doRequest(page.selected + 1);
    };

    handleChange = name => event => {
        // const status = { status: event.value }
        this.setState({ [name]: event });
        this.timer = this.timeout = setTimeout(() => {
            this.doRequest();
        }, 0);
    };
    render() {
        // styles
        const titles={ 
            fontSize: '20px', 
            fontFamily: 'serif',
            textDecoration: 'underline' 
        }
        const containerTop={
            marginTop: '20px'
        }
        const iconStock={ 
            width: '50', height: '50px', marginTop: '5px' 
        }
        const iconText={
             marginLeft: '95px',
             marginTop: '-15px' 
        }
        const totalPro={
            fontSize: '20px',
            color: 'black'
        }
        const headline={
            textAlign: "right", 
            alignItems: "center",
            fontWeight: 'bold',
            fontSize: '18px',
            width: '100%',
            marginLeft: '15px',
          }

        const cardStyle ={
             margin: '2px',
             height: '500px'
         }
          
        




        const { clinicDashBoard, clinicLog } = this.props;
        const { loading } = this.state;
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Stock Status",
                verticalAlign: "top",
                horizontalAlign: "left",
                fontSize: "20",
                fontFamily: "Timesnewromans",
                fontColor: "black"
            },

            axisY: {
                gridThickness: 0,
                tickLength: 0,
                lineThickness: 0,
                margin: 0,
                valueFormatString: " ",
                stripLines: [
                    {
                        value: 0,
                        showOnTop: false,
                        color: "white",
                        tickLength: 0
                    }
                ]
            },
            axisX: {
                title: "",
                tickLength: 0,
                margin: 0,
                lineThickness: 0,
                valueFormatString: " "
            },
            toolTip: {
                shared: true,
                reversed: true,
                horizontalAlign: "right",
            },
            legend: {
                horizontalAlign: "right", // "center" , "right"
                verticalAlign: "center",  // "top" , "bottom"
                fontSize: 15,
                itemWidth: 1000,
                markerMargin: 20,
                maxHeight: 100
            },
            data: [
                {
                    type: "stackedColumn",
                    legendText: "Sufficient Stock",
                    showInLegend: true,
                    yValueFormatString: "",
                    dataPoints: [
                        { color: "green", y: 14 },

                    ]
                },
                {
                    type: "stackedColumn",
                    legendText: "Low Stock",
                    showInLegend: true,
                    yValueFormatString: "",
                    dataPoints: [
                        { color: "orange", y: 13 },
                    ]
                },
                {
                    type: "stackedColumn",
                    legendText: "Out of Stock",
                    legendColor: "red",
                    showInLegend: true,
                    yValueFormatString: "",
                    dataPoints: [
                        { color: "red", y: 14 },

                    ]
                }]
        };
        const optionsPerMonth = {
            animationEnabled: true,
            //exportEnabled: true,

            // title: {
            //     text: "Stock Per Month",
            //     verticalAlign: "top",
            //     horizontalAlign: "left",
            //     fontSize: "20",
            //     fontFamily: "Timesnewromans",
            //     fontColor: "black"
            // },
            axisY: {
                includeZero: false,
                lineThickness: 0,

            },
            axisX: {
                title: "Month",
                valueFormatString: "MMM",
            },
            data: [{
                type: "line",
                dataPoints: [
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 1 },
                    { x: new Date(2020, 3), y: 50 },
                    { x: new Date(2020, 4), y: 62 },

                ]
            }]
        };
        //recomendations
        const optionsRecomendedStock = {
            animationEnabled: true,

            title: {
                text: "Recommendations",
                verticalAlign: "top",
                horizontalAlign: "left",
                fontSize: "20",
                fontFamily: "Timesnewromans",
                fontColor: "black"
            },
            axisX: {
                lineThickness: 0,
                reversed: true,
            },
            axisY: {
                gridThickness: 0,
                tickLength: 0,
                lineThickness: 0,
                margin: -5,
                valueFormatString: " ",
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: [
                    { y: 100, label: "Current Stock" },
                    { y: 500, label: "Recommenced Stock" },
                ]
            }]
        };
        const { activePage, activities_list, activity } = this.state;
        const { activityLog } = this.props;
        if (loading) return null;
        return (
            <div className="dashboard_page content_block">
                <div className="title_page">Dashboard</div>
                <FormControl className="select_wrapper" style={{display:"none"}}>
                    <SelectComponent
                        value={activity}
                        options={activities_list}
                        // loading={!isArray(projects_list)}
                        change={this.handleChange('activity')}
                        isClearable="false"
                        isSearchable={false}
                    />
                </FormControl>
                {/*<div className="info_block">
                    <div>
                        <p className="descriptions">total amount</p>
                        <span><span className={'small_price'}>RWF</span>{clinicDashBoard.total_amount}</span>

                    </div>
                    <div className="center_block">
                        <Link to={{pathname:"/main/stock-management", state:{tab: 0}}}  className="green_text">
                            products in stock
                            <img className="arrow" src={arrow_forward} alt="arrow_forward"/>
                        </Link>
                        <div className="info">
                            <span>{clinicDashBoard.in_stock}</span>
                        </div>
                    </div>
                    <div>
                        <Link to={{pathname:"/main/stock-management", state:{tab: 1}}} className="red_text">
                            products out of stock
                            <img className="arrow" src={arrow_forward} alt="arrow_forward"/>
                        </Link>
                        <div className="info">
                            <span>{clinicDashBoard.out_stock}</span>
                        </div>
                    </div>
        </div>*/}
                <section>

                <CardDeck className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <Card className="shadow p-3 mb-5 bg-white rounded" style={cardStyle}>
                            <Card.Text>
                                <Container maxWidth="sm" style={containerTop}>
                                    <div className="panel_dashboard d-flex justify-content-between">
                                        <span className="d-flex flex-row titles" style={titles}>Stock Status</span>
                                    </div>


                                    <div style={{ marginTop: '40px' }}>
                                        <div style={{ backgroundColor: '#f4f4f8' }}>
                                            <img src={Suficient} alt='out stock' style={iconStock} />
                                            <span style={{ color: '#00c900', marginLeft: '60px' }}><b style={totalPro}>150</b><p style={iconText}><b>Sufficient</b></p></span>
                                        </div>
                                        <br />
                                        <div style={{ backgroundColor: '#f4f4f8' }}>
                                            <img src={Lowstock} alt='out stock' style={iconStock} />
                                            <span style={{ marginLeft: '60px', color: 'orange' }}> <b style={totalPro}>150</b> <p style={iconText}><b>Low stock</b></p></span>
                                        </div>
                                        <br />
                                        <div style={{ backgroundColor: '#f4f4f8' }}>
                                            <img src={Outstock} alt='out stock' style={iconStock} />
                                            <span style={{ marginLeft: '60px', color: 'red' }}><b style={totalPro}>150</b><p style={iconText}><b>Out stock</b></p></span>
                                        </div>
                                    </div>

                                </Container>

                            </Card.Text>
                        </Card >
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                            <Card className="shadow p-3 mb-5 bg-white rounded" style={cardStyle}>

                                    <Container style={containerTop}>
                                        <div className="panel_dashboard d-flex justify-content-between">
                                            <span className="d-flex flex-row" style={titles}>Stock Per Month</span>
                                        </div>
                                        <div>
                                            <CanvasJSChart options={optionsPerMonth}
                                            /* onRef={ref => this.chart = ref} */
                                            />
                                        </div>
                                    </Container>
                                
                            </Card>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <Card className="shadow p-3 mb-5 bg-white rounded" style={cardStyle}>
                                <Card.Text>
                                    <Container style={containerTop}>
                                        <div className="" >
                                            <div className="panel_dashboard d-flex justify-content-between">
                                                <span className="d-flex flex-row" style={titles}>Activity Log</span>
                                               

                                            </div>
                                            <br></br>
                                            <div className="dashboard_info_wrapper" >
                                                <div className="" >
                                                    
                                                    <div className="dashboard_info_wrapper" >
                                                        {clinicLog.length > 0 ?
                                                            clinicLog.map(el => (
                                                                <div key={el.id}>
                                                                    <span>{moment(el.date).format('DD/MM/YYYY HH:mm')}</span>
                                                                    {/*<p><span className="name_user">Ivan Simpson</span> added <span className="count_prod">10</span> items of <span className="name_prod">Product1</span></p>*/}
                                                                    <div dangerouslySetInnerHTML={{ __html: el.text }} />
                                                                    <hr></hr>
                                                                </div>
                                                            ))
                                                            :
                                                            <h3>The list is empty.</h3>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>

                                </Card.Text>
                            </Card>
                        </div>
                    
                        
                        <div className="col-xl-4 col-md-6 col-sm-12" >
                            <Card className="shadow p-3 mb-5 bg-white rounded" style={cardStyle}>
                                <Container style={containerTop}>
                                    <div className="panel_dashboard d-flex justify-content-between">
                                        <span className="d-flex flex-row" style={titles}>Most consumed products</span>

                                    </div>
                                    <Card.Text>

                                        <DonutChart {...config} />

                                    </Card.Text>
                                </Container>
                            </Card>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <Card className="shadow p-3 mb-5 bg-white rounded" style={cardStyle}>

                                <Card.Text>
                                    <Container style={containerTop}>
                                        <div className="panel_dashboard d-flex justify-content-between">
                                            <span className="d-flex flex-row" style={titles}>Recommandations</span>
                                        </div>
                                        <div style={{ marginTop: '120px' }}>
                                            <span style={headline}>Current stock </span>
                                            <div className="" style={{ width: '90%', height: '30px', backgroundColor: '#00c900' }}>
                                            </div>

                                            <br />
                                            <br />
                                            
                                            <div >
                                                

                                                <span style={headline}>Recommended stock </span>
                                                <div className="" style={{ width: '90%', height: '30px', backgroundColor: '#00a6b5' }}>
                                                </div>
                                            </div>

                                        </div>
                                    </Container>

                                </Card.Text>

                            </Card >
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12" >
                            <Card className="shadow p-3 mb-5 bg-white rounded" style={cardStyle}>
                                <Card.Text>
                                    <Container style={containerTop}>
                                        <div>
                                            <div className="panel_dashboard d-flex justify-content-between">
                                                <span className="d-flex flex-row" style={titles}>Proformas</span>
                                                <Link to="/main/activity" className="d-flex flex-row-reverse">view all</Link>
                                            </div>
                                            <div className="dashboard_info_wrapper"  >
                                                <div className="activity_info_wrapper" style={{ overflow: "auto", height: 350 }}>
                                                    {activityLog.results && activityLog.results.length > 0 ?
                                                        activityLog.results.map(el => (
                                                            <div key={el.id}>
                                                                <div>
                                                                    <span>{moment(el.date).format('DD/MM/YYYY HH:mm')}</span>
                                                                    {/*<p><span className="name_user">Ivan Simpson</span> added <span className="count_prod">10</span> items of <span className="name_prod">Product1</span></p>*/}
                                                                    <div dangerouslySetInnerHTML={{ __html: el.text }} />
                                                                </div>

                                                            </div>
                                                        ))
                                                        :
                                                        <h3>The list is empty.</h3>
                                                    }

                                                </div>
                                                {activityLog.count > 10 &&
                                                    <div className="pagination_info_wrapper">
                                                        <div className="pagination_block">

                                                            <Pagination
                                                                current={activePage}
                                                                pageCount={activityLog.total_pages}
                                                                onChange={this.changePage}
                                                            />

                                                        </div>
                                                        <div className="info">Displaying page {activePage} of {activityLog.total_pages}, items {activePage * 10 - 9} to {activePage * 10 > activityLog.count ? activityLog.count : activePage * 10} of {activityLog.count}</div>
                                                    </div>
                                                }
                                                
                                            </div>


                                        </div>
                                    </Container>

                                </Card.Text>
                            </Card>
                        </div>
                        
                    </CardDeck>
                </section>
               

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
                    clinicLog: state.dashboard.clinicLog,
        clinicDashBoard: state.dashboard.clinicDashBoard,
        activityLog: state.activity.activityLog
    }
};



function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getActivity,
        getClinicLog,
        getClinicDashBoard
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
