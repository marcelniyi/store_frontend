import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Pagination from '../HelperComponents/Pagination/Pagination';
import ok from '../../assets/image/ok.svg';
import no from '../../assets/image/no.svg';
import minus from '../../assets/image/minus.svg';
import plus from '../../assets/image/plus.svg';
import roll_down from '../../assets/image/roll_down.svg';
import sort_up from '../../assets/image/sort_up.svg';
import sort_down from '../../assets/image/sort_down.svg';
import './StockManagement.scss';
import QuantityDialog from './Dialogs/QuantityDialog';
import RequestDialog from './Dialogs/RequestDialog';
import { getStock, searchStock, getSearchList } from '../../actions/stockActions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { OverlayTrigger, Tooltip, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class StockManagement extends Component {
    state = {
        loading: true,

        lowStock: 5,
        inStock: 6,
        outStock: 1,
        plusButton: '',
        minusButton: '',

        tab: "0",
        stock: 'in',
        activePage: 0,
        totalPages: '',
        totalItems: '',
        InfoIsOpen: false,
        openQuantityDialog: false,
        openRequestDialog: false,
        sign: null,
        product_name: null,
        product_quantity: null,
        openSearch: false,
        optionValue: null,
        switcherState: 'quantity',
        someVal: '',
        newVal: ''
    };

    componentDidMount() {
        this.setState({ role: localStorage.getItem('role') });
        if (this.props.location.state) {
            this.setState({
                tab: this.props.location.state.tab.toString(),
            });
            this.props.location.state.tab === 1 && this.setState({ stock: 'out' });
        }

        this.timer = this.timeout = setTimeout(() => {
            this.doRequest();
        }, 0);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    doRequest = (page) => {
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

    changeOutStock = (e) => {
        this.setState({
            outStock: e.target.value,
        })
    }
    changeInStock = (e) => {
        this.setState({
            inStock: e.target.value,
        })
    }
    changeLowStock = (e) => {
        this.setState({
            lowStock: e.target.value,
        })
    }


    lowButtonPlus = () => {
        this.setState({
            lowStock: this.state.lowStock + 1,
        })
    }
    lowButtonMinus = () => {
        this.setState({
            lowStock: this.state.lowStock - 1,
        })
    }

    inButtonPlus = () => {
        this.setState({
            inStock: this.state.inStock + 1,
        })
    }
    inButtonMinus = () => {
        this.setState({
            inStock: this.state.inStock - 1,
        })
    }

    outButtonPlus = () => {
        this.setState({
            outStock: this.state.outStock + 1,
        })
    }
    outButtonMinus = () => {
        this.setState({
            outStock: this.state.outStock - 1,
        })
    }


    handleSwitch = () => {
        if (this.state.switcherState === 'quantity') {
            this.setState({
                switcherState: '-quantity',
            })

        } else {
            this.setState({
                switcherState: 'quantity',
            });
        }
        this.timer = this.timeout = setTimeout(() => {
            this.doRequest();
        }, 0);
    };

    toggleQuantityDialog = (sign, name, quantity, id) => {
        this.setState(({ openQuantityDialog }) => ({
            openQuantityDialog: !openQuantityDialog,
            sign: typeof (sign) === 'string' ? sign : '',
            product_name: name,
            product_quantity: quantity,
            product_id: id,
            InfoIsOpen: false,
        }));
    };
    toggleRequestDialog = (name, quantity, id) => {
        this.setState(({ openRequestDialog }) => ({
            openRequestDialog: !openRequestDialog,
            product_name: typeof (name) === 'string' ? name : '',
            product_quantity: quantity,
            product_id: id,
            InfoIsOpen: false,
        }));
    };

    changeTab = (tab, stock) => {
        const { getStock } = this.props;


        tab == 2 ? this.setState({ tab, totalItems: 1 }) : this.setState({ tab, stock });


        getStock(stock).then(res => {
            if (res.payload && res.payload.status && res.payload.status === 200) {
                this.setState({
                    loading: false,
                    activePage: 0,
                    totalPages: res.payload.data.total_pages,
                    totalItems: res.payload.data.count
                });
                this.pagFunc();
            }
        })

    };

    openMenu = (id) => {
        this.setState(({ InfoIsOpen }) => ({
            InfoIsOpen: true,
            product_id: id,
        }))
    };

    closeMenu = (id) => {
        this.setState(({ InfoIsOpen }) => ({
            InfoIsOpen: false,
            product_id: '',
        }))
    };

    toggleSearch = () => {
        this.setState(({ openSearch }) => ({
            openSearch: !openSearch
        }));
    };

    togglePopper = () => {
        this.setState({ openSearch: true, activePage: 0 });
    };

    handleToggleSearch = () => {
        this.setState({
            openSearch: false
        })
    };

    searchOnChange = (e) => {
        let regEx = /[^a-zA-Zа-яА-Я0-9]/g;

        this.setState({
            someVal: e.target.value.replace(regEx, ''),
            newVal: e.target.value.replace(regEx, '')
        })
    };


    handleSearchChange = (e) => {
        const { searchStock, search_list, getSearchList } = this.props;
        const { stock } = this.state;
        let inputValue = e.target.value.replace('#', '');



        if (inputValue.length >= 3) {
            searchStock(stock, inputValue).then(res => {
                if (res.payload && res.payload.status && res.payload.status === 200) {
                    this.togglePopper();
                }
            })
        } else if (inputValue.length < 3) {
            this.setState({ openSearch: false });
            if (inputValue.length === 0) {

                this.doRequest();
            }
        }

        if (e.keyCode === 13 && inputValue.length > 2) {
            let el_id = search_list.map(el => el.id);
            getSearchList(el_id.join(',')).then(res => {
                if (res.payload && res.payload.status && res.payload.status === 200) {
                    this.setState({
                        totalPages: res.payload.data.total_pages,
                        totalItems: res.payload.data.count
                    });
                    this.handleToggleSearch();
                }
            })
        } else if (e.keyCode === 13 && inputValue.length < 2) {
            return null
        }

    };
    handleSearchClick = (id) => {
        const { getSearchList } = this.props;
        getSearchList(id).then(res => {
            if (res.payload && res.payload.status && res.payload.status === 200) {
                this.setState({
                    totalPages: res.payload.data.total_pages,
                    totalItems: res.payload.data.count
                });
                this.handleToggleSearch();
            }
        })
    };

    

    pagFunc = (page) => {
        this.doRequest(page)
    };


    render() {

        const {
            tab,
            activePage,
            InfoIsOpen,
            openQuantityDialog,
            openRequestDialog,
            loading,
            sign,
            product_name,
            product_quantity,
            product_id,
            openSearch,
            totalPages,
            totalItems,
            role,
            stock,
            newVal
        } = this.state;
        const { stock_list, search_list } = this.props;
        if (loading) return null;
        return (
            <div className="stock_management_page content_block">
                <div className="title_page">Stock management</div>
                
                        

                <div className="content_page">
                        
                    <div className="tab_block">
                        <button
                            className={tab === "0" ? "active" : ""}
                            onClick={() => this.changeTab("0", "in")}
                        >
                            In stock
                        </button>

                        <button
                            className={tab === "1" ? "active" : ""}
                            onClick={() => this.changeTab("1", "out")}
                        >
                            Low stock
                        </button>

                        <button
                            className={tab === "3" ? "active" : ""}
                            onClick={() => this.changeTab("3", "out")}
                        >
                            Out of stock
                        </button>

                        <button
                            className={tab === '2' ? "active" : ''}
                            style={{ textAlign: 'right', marginRight: '15px', marginBottom: '15px' }}
                            onClick={() => this.changeTab("2", "settings")}
                        >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
 <path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>{'  '} Stock settings
                        </button>
                        
                    </div>
                    {totalItems > 0 ? <Fragment>

                        {tab == 2 ? '' :
                            <ClickAwayListener onClickAway={this.handleToggleSearch}>
                                <div className="block_search">
                                    <input
                                        onKeyUp={(e) => this.handleSearchChange(e)}
                                        onChange={this.searchOnChange}
                                        value={newVal}
                                        type="text"
                                        placeholder="Search…"
                                    />
                                    {openSearch ?
                                        <div className="autocomplete">
                                            {!!search_list && search_list[0] ?
                                                search_list.map((el, idx) => (
                                                    <button onClick={() => this.handleSearchClick(el.id)} className='search_item' key={idx}>{el.product_name}</button>
                                                )) : <button disabled>No items</button>}
                                        </div>
                                        : null}
                                </div>
                            </ClickAwayListener>
                        }

                        {tab === "0" &&
                            <div className="in_stock_wrapper">
                                <div className="in_stock_table">
                                    <div className="table_container transactions_columns">
                                        <div className="table_header">
                                            <div className="table_row">
                                                <div className="row">
                                                    <div className="row_item">Name</div>
                                                    <div className="row_item">Code</div>
                                                    <div className="row_item">
                                                        <button onClick={this.handleSwitch} className="btn_sort">
                                                            Quantity
                                                        <div className="sort">
                                                                <img src={sort_up} alt="sort_up" />
                                                                <img src={sort_down} alt="sort_down" />
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="row_item">Unit value</div>
                                                    <div className="row_item">Total value</div>
                                                    <div className="row_item">Actions</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table_body">
                                            {stock_list.results.map((row, idx) => (
                                                <div className="table_row" key={idx}>
                                                    <div className="row">
                                                        <div className="row_item">
                                                            <>
                                                                {['bottom'].map((placement) => (
                                                                    <>
                                                                        <OverlayTrigger
                                                                            key={placement}
                                                                            placement={placement}
                                                                            overlay={

                                                                                <Tooltip id="tooltip-top">

                                                                                    <div>
                                                                                        <Image src={row.image} style={{ width: "100%", height: "100%" }} />

                                                                                    </div>
                                                                                    <div className="row_item" style={{ textAlign: "left" }}>{row.description ? row.description : ''}</div>
                                                                                </Tooltip>
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {row.product_name}
                                                                            </span>

                                                                        </OverlayTrigger>{' '}
                                                                    </>
                                                                ))}
                                                            </>

                                                        </div>
                                                        {row.code ?
                                                            <div className="row_item">#{row.code}</div> :
                                                            <div className="row_item">-</div>}
                                                        <div className="row_item">
                                                            <button disabled={row.quantity <= 0}
                                                                onClick={() => this.toggleQuantityDialog('-', row.product_name, row.quantity, row.id)}>
                                                                <img src={minus} alt="minus" />
                                                            </button>
                                                            <div>{row.quantity}</div>
                                                            <button onClick={() => this.toggleQuantityDialog('+', row.product_name, row.quantity, row.id)}>
                                                                <img src={plus} alt="plus" />
                                                            </button>
                                                        </div>
                                                        <div className="row_item">RWF{row.price}</div>

                                                        <div className="row_item">RWF{row.total_price}</div>
                                                        <div className="row_item">
                                                            {row.deleted && row.code ? <div className="btn_text">Not available</div> :
                                                                row.code ?
                                                                    <div className="row_item">
                                                                        <button className={role !== "user" ? "green_text btn_text" : "hided"} disabled={role === 'user'} onClick={() => this.toggleRequestDialog(row.product_name, row.quantity, row.id)}>
                                                                            REQUEST SUPPLY
                                                                    </button>
                                                                    </div>
                                                                    : <div className="row_item">-</div>}
                                                            <button
                                                                className={InfoIsOpen && product_id === row.id ? "btn_arrow_open btn_arrow" : "btn_arrow"}
                                                                onClick={() => product_id === row.id ? this.closeMenu(row.id) : this.openMenu(row.id)}><img src={roll_down} alt="roll_down" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className={InfoIsOpen && product_id === row.id ? "info info_open" : "info"}>
                                                        <div className="row_item">
                                                            <span>Category</span>
                                                            {role !== 'user' ? <Link className={role !== "user" ? "" : "hided"} to={`/main/catalog/category/${row.product_subcategory[0][row.product_subcategory[0].length - 1].id}`}>{row.product_subcategory[1]}</Link>
                                                                : <a className='hided'>{row.product_subcategory[1]}</a>}
                                                        </div>
                                                        <div className="row_item">
                                                            <span>Auto supply</span>
                                                            {row.auto_supply ?
                                                                <img src={ok} alt="ok" /> :
                                                                <img src={no} alt="no" />
                                                            }
                                                        </div>
                                                        <div className="row_item">
                                                            <span>Min. qty</span>
                                                            {row.deleted ? '-' : row.min_supply_quantity}
                                                        </div>
                                                        <div className="row_item">
                                                            <span>Auto supply qty</span>
                                                            {row.deleted ? '-' : row.supply_quantity}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {totalItems < 10 ? null :
                                        <div className="pagination_info_wrapper">
                                            <div className="pagination_block">
                                                <Pagination
                                                    active={activePage}
                                                    pageCount={+totalPages}
                                                    onChange={this.pagFunc}
                                                />
                                            </div>
                                            <div className="info">Displaying page {activePage + 1} of {totalPages},
                                            items {(activePage + 1) * 10 - 9} to {(activePage + 1) * 10 > totalItems ? totalItems : (activePage + 1) * 10} of {totalItems}</div>
                                        </div>
                                    }
                                </div>

                            </div>
                        }
                        {tab === "1" &&
                            <div className="out_of_stock_table">
                                <div className="table_container transactions_columns">
                                    <div className="table_header">
                                        <div className="table_row">
                                            <div className="row_item">Name</div>
                                            <div className="row_item">Category</div>
                                            <div className="row_item">Code</div>
                                            <div className="row_item">
                                                <button className="btn_sort stub">
                                                    Quantity
                                                <div className="sort">
                                                        {/*<img src={sort_up} alt="sort_up"/>*/}
                                                        {/*<img src={sort_down} alt="sort_down"/>*/}
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="row_item">Unit value</div>
                                            <div className="row_item">Actions</div>
                                        </div>
                                    </div>
                                    <div className="table_body">
                                        {stock_list.results.map((row, idx) => (
                                            <div className="table_row" key={idx}>
                                                <div className="row_item">{row.product_name}</div>
                                                <div className="row_item">
                                                    {role !== 'user' ? <Link className={role !== "user" ? "" : "hided"} to={`/main/catalog/category/${row.product_subcategory[0][row.product_subcategory[0].length - 1].id}`}>{row.product_subcategory[1]}</Link>
                                                        : <a className='hided'>{row.product_subcategory[1]}</a>}
                                                </div>
                                                {row.code ?
                                                    <div className="row_item">#{row.code}</div> :
                                                    <div className="row_item">-</div>}
                                                <div className="row_item">
                                                    <button disabled={row.quantity <= 0} onClick={() => this.toggleQuantityDialog('-', row.product_name, row.quantity, row.id)}>
                                                        <img style={{ opacity: '.4' }} src={minus} alt="minus" />
                                                    </button>
                                                    <div>{row.quantity}</div>
                                                    <button onClick={() => this.toggleQuantityDialog('+', row.product_name, row.quantity, row.id, row.id)}>
                                                        <img src={plus} alt="plus" />
                                                    </button>
                                                </div>
                                                <div className="row_item">RWF{row.price}</div>
                                                {row.code ?
                                                    <div className="row_item">
                                                        <button className={role !== "user" ? "green_text btn_text" : "hided"} disabled={role === 'user'} onClick={() => this.toggleRequestDialog(row.product_name, row.quantity, row.id)}>
                                                            Request supply
                                                    </button>
                                                    </div>
                                                    : <div className="row_item">-</div>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {totalItems < 10 ? null :
                                    <div className="pagination_info_wrapper">
                                        <div className="pagination_block">
                                            <Pagination
                                                active={activePage}
                                                pageCount={+totalPages, console.log(totalItems)}
                                                onChange={this.doRequest}
                                            />
                                        </div>
                                        <div className="info">Displaying page {activePage + 1} of {totalPages},
                                        items {(activePage + 1) * 10 - 9} to {(activePage + 1) * 10 > totalItems ? totalItems : (activePage + 1) * 10} of {totalItems}</div>
                                    </div>
                                }
                            </div>
                        }
                    </Fragment> : <h3 className={'empty_list'}>The list is empty</h3>}

                    {tab === "2" &&
                        <div className="out_of_stock_table">
                        <Row className="inputFields">
                            <Col md="4" className="inputField">
                                <span><a onClick={() => this.changeTab("0", "in")} id="stocklink">In stock</a> is greater than</span>
                            </Col>
                            <Col md="8">
                                <div class="stepper-input">
                                    <button onClick={this.inButtonMinus}class="btn btn-left addButton">-</button>
                                    <input type="text" onChange={this.changeInStock} placeholder="" value={this.state.inStock} class="input-box" />
                                    <button onClick={this.inButtonPlus} class="btn btn-right addButton">+</button>
                                </div>
                            </Col>
                            <Col md="4">
                                <span><a onClick={() => this.changeTab("1", "low")} id="stocklink">Low stock </a>is less than or equal </span>
                            </Col>
                            <Col md="8">
                                <div class="stepper-input">

                                    <button onClick={this.lowButtonMinus} class="btn btn-left addButton">-</button>
                                    <input type="text" onChange={this.changeLowStock} placeholder="" value={this.state.lowStock} class="input-box" />
                                    <button onClick={this.lowButtonPlus} class="btn btn-right addButton">+</button>
                                </div>
                            </Col>
                            <br />
                            <Col md="4">
                                <span><a onClick={() => this.changeTab("3", "out")} id="stocklink">Out of stock</a> is Less than </span>
                            </Col>
                            <Col md="8">
                                <div class="stepper-input">
                                    <button onClick={this.outButtonMinus}class="btn btn-left addButton">-</button>
                                    <input type="text" onChange={this.changeOutStock} placeholder="" value={this.state.outStock} class="input-box" />
                                    <button onClick={this.outButtonPlus}class="btn btn-right addButton">+</button>
                                </div>
                            </Col>
                        </Row>

                        <button className="blue_btn">Save</button>
                    </div>

                    }
                </div>

                <QuantityDialog toggler={this.toggleQuantityDialog}
                    product_quantity={product_quantity}
                    product_name={product_name}
                    sign={sign}
                    state={openQuantityDialog}
                    product_id={product_id}
                    startValue={''}
                    activePage={activePage}
                    doRequest={this.doRequest}
                />
                <RequestDialog toggler={this.toggleRequestDialog}
                    product_quantity={product_quantity}
                    product_name={product_name}
                    state={openRequestDialog}
                    product_id={product_id}
                    startValue={''}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        stock_list: state.stock.stock_list,
        search_list: state.stock.search_list,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getStock,
        searchStock,
        getSearchList,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockManagement);
