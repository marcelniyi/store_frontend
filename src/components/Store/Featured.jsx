import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeaturedProd  } from '../../actions/storeAction';



class Featured extends Component {

  constructor(props) {
   super(props);
   this.featuredProd();
 }

  state = {
      featuredProd: []
  };

  componentDidMount() {
      this.featuredProd();
  }

  componentWillUnmount() {
    this.featuredProd();
  }

  featuredProd = () => {
      const { getFeaturedProd } = this.props;

      getFeaturedProd().then(res => {
          if (res.payload && res.payload.status && res.payload.status === 200) {
              this.setState({
                featuredProd: res.payload.data
              })
          }
      })
};



    render() {
        const role = localStorage.role;

        console.log(this.state.featuredProd);

        return (
         <div className="characteristics">
          <div className="container">
            <div className="row">
              {/* Char. Item */}
              <div className="col-lg-3 col-md-6 char_col">
                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                  <div className="char_icon"><img src="http://139.59.152.214:2992/static/build/images/char_1.ef17d0cfc74e2904657326f6b5e96959.png" alt="" /></div>
                  <div className="char_content">
                    <div className="char_title">Free Delivery</div>
                  </div>
                </div>
              </div>
              {/* Char. Item */}
              <div className="col-lg-3 col-md-6 char_col">
                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                  <div className="char_icon"><img src="http://139.59.152.214:2992/static/build/images/char_2.e9b554bd5c1cef313aea2c52ecc7b3ea.png" alt="" /></div>
                  <div className="char_content">
                    <div className="char_title">Free Delivery</div>
                  </div>
                </div>
              </div>
              {/* Char. Item */}
              <div className="col-lg-3 col-md-6 char_col">
                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                  <div className="char_icon"><img src="http://139.59.152.214:2992/static/build/images/char_3.2b10e493dc76b0f01d1ba7a02949bc46.png" alt="" /></div>
                  <div className="char_content">
                    <div className="char_title">Free Delivery</div>
                  </div>
                </div>
              </div>
              {/* Char. Item */}
              <div className="col-lg-3 col-md-6 char_col">
                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                  <div className="char_icon"><img src="http://139.59.152.214:2992/static/build/images/char_4.95b158a66abe12cca58df7b3ea754724.png" alt="" /></div>
                  <div className="char_content">
                    <div className="char_title">Free Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        <div className="deals_featured mb-5">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                {/* Deals */}
                <div className="deals">
                  <div className="deals_title">Deals of the Week</div>
                  <div className="deals_slider_container">
                    {/* Deals Slider */}
                    <div className="owl-carousel owl-theme deals_slider">

                      {/* Deals Item */}
                      <div className="owl-item deals_item" style={{wordWrap: 'break-word !important'}}>
                        <div className="deals_image">
                          <a href="/product/high-speed-handpiece-4-holes">
                            <img src="http://139.59.152.214:2992/static/build/images/loading.a3d2ba4750435e922c606fc802fa3cb8.gif" data-src="/static/products/1565337521.428331.jpg" style={{maxWidth: '310px', maxHeight: '310px'}} alt="" />
                          </a>
                        </div>
                        <div className="deals_content" style={{wordWrap: 'break-word !important'}}>
                          <div className="deals_info_line d-flex flex-row justify-content-start">
                            <div className="deals_item_category" style={{wordWrap: 'break-word !important'}}>
                              <a href="/category/others" style={{wordWrap: 'break-word !important'}}>
                                Others</a>
                            </div>
                          </div>
                          <div className="deals_info_line d-flex flex-row justify-content-start">
                            <div className="deals_item_name" style={{wordWrap: 'break-word !important'}}>
                              <a href="/product/high-speed-handpiece-4-holes" style={{wordWrap: 'break-word !important'}}>
                                High speed handpiece 4 holes
                              </a>
                            </div>
                          </div>
                          <div className="available">
                            <div className="available_bar"><span style={{width: '17%'}} /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="deals_slider_nav_container">
                    <div className="deals_slider_prev deals_slider_nav"><i className="fas fa-chevron-left ml-auto" />
                    </div>
                    <div className="deals_slider_next deals_slider_nav"><i className="fas fa-chevron-right ml-auto" />
                    </div>
                  </div>
                </div>
                {/* Featured */}
                <div className="featured">
                  <div className="tabbed_container">
                    <div className="tabs">
                      <ul className="clearfix">
                        <li className="active">Featured</li>
                        <li>On Sale</li>
                        <li>Best Rated</li>
                      </ul>
                      <div className="tabs_line"><span /></div>
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel active" style={{wordWrap: 'break-word !important'}}>
                      <div className="featured_slider slider" style={{wordWrap: 'break-word !important'}}>


                        <div className="featured_slider_item" style={{wordWrap: 'break-word !important'}}>
                          <div className="border_active" />
                          <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="product_image d-flex flex-column align-items-center justify-content-center">
                              <a href="/product/adhesive-bond-2-1-5ml">
                                <img src="/static/products/1565256340.234219.jpg" data-src="/static/products/1565256340.234219.jpg" style={{maxWidth: '135px', maxHeight: '135px'}} alt="" />
                              </a>
                            </div>
                            <div className="product_content">
                              <div className="product_price discount">
                              </div>
                              <div className="product_name" style={{wordWrap: 'break-word !important'}}>
                                <div style={{wordWrap: 'break-word !important'}}>
                                  <a href="/product/adhesive-bond-2-1-5ml" style={{wordWrap: 'break-word !important'}}>
                                    AMENYO
                                  </a>
                                </div>
                              </div>
                              <div className="product_extras">
                                <form action="/cart/create/adhesive-bond-2-1-5ml" method="post">
                                  <button className="product_cart_button" type="submit">Add to Cart
                                  </button>
                                </form>
                              </div>
                            </div>
                            <div className="product_fav"><i className="fas fa-heart" /></div>
                            <ul className="product_marks">
                              <li className="product_mark product_discount">-25%</li>
                              <li className="product_mark product_new">new</li>
                            </ul>
                          </div>
                        </div>
                      
                      </div>

                      <div className="featured_slider_dots_cover" />
                    </div>


                    {/* Product Panel */}
                    <div className="product_panel panel">
                      <div className="featured_slider slider">

                        {/* Slider Item */}

                        { this.state.featuredProd.map((key, index) => (
                        <div className="featured_slider_item">
                          <div className="border_active" />
                          <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="product_image d-flex flex-column align-items-center justify-content-center">
                              <a href="/product/hot-and-cold-pack">
                                <img src="http://139.59.152.214:2992/static/build/images/loading.a3d2ba4750435e922c606fc802fa3cb8.gif" data-src="/static/products/1565256034.436863.jpg" style={{maxWidth: '135px', maxHeight: '135px'}} alt="" />
                              </a>
                            </div>
                            <div className="product_content" style={{wordWrap: 'break-word !important'}}>
                              <div className="product_price discount">
                              </div>
                              <div className="product_name" style={{wordWrap: 'break-word !important'}}>
                                <div style={{wordWrap: 'break-word !important'}}>
                                  <a href="/product/hot-and-cold-pack" style={{wordWrap: 'break-word !important'}}>
                                    HOT AND COLD PACK
                                  </a>
                                </div>
                              </div>
                              <div className="product_extras">
                                <form action="/cart/create/hot-and-cold-pack" method="post">
                                  <input id="csrf_token" name="csrf_token" type="hidden" defaultValue="IjhhNDllMjU4ODgxNjRkZGZlMjllMGZiNDQ0NzNiNmQ5YWM4MjMxNzgi.Xz4iFA.ADnP_Dpn9MOPRMk8DWDJAtTEfk4" />
                                  <input type="hidden" defaultValue={146} name="product_id" />
                                  <input type="hidden" defaultValue="hot-and-cold-pack" name="product_slug" />
                                  <input name="product_quantity" type="hidden" defaultValue={1} />
                                  <button className="product_cart_button" type="submit">Add to Cart
                                  </button>
                                </form>
                              </div>
                            </div>
                            <div className="product_fav"><i className="fas fa-heart" /></div>
                            <ul className="product_marks">
                              <li className="product_mark product_discount">-25%</li>
                              <li className="product_mark product_new">new</li>
                            </ul>
                          </div>
                        </div>

                      ))}
                      </div>
                      <div className="featured_slider_dots_cover" />
                    </div>
                    {/* Product Panel */}
                    <div className="product_panel panel">
                      <div className="featured_slider slider">
                        {/* Slider Item */}

                        {/* Slider Item */}
                        <div className="featured_slider_item">
                          <div className="border_active" />
                          <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="product_image d-flex flex-column align-items-center justify-content-center">
                              <a href="/product/applic-composite-nano-hybrid-resin-ea3-4gr">
                                <img src="http://139.59.152.214:2992/static/build/images/loading.a3d2ba4750435e922c606fc802fa3cb8.gif" data-src="/static/products/1565254904.973323.jpg" style={{maxWidth: '135px', maxHeight: '135px'}} alt="" />
                              </a>
                            </div>
                            <div className="product_content">
                              <div className="product_price discount">
                              </div>
                              <div className="product_name" style={{wordWrap: 'break-word !important'}}>
                                <div style={{wordWrap: 'break-word !important'}}>
                                  <a href="/product/applic-composite-nano-hybrid-resin-ea3-4gr" style={{wordWrap: 'break-word !important'}}>
                                    Applic Nano-Hybrid
                                  </a>
                                </div>
                              </div>
                              <div className="product_extras">
                                <form action="/cart/create/applic-composite-nano-hybrid-resin-ea3-4gr">
                                  <input type="hidden" defaultValue={155} name="product_id" />
                                  <input type="hidden" defaultValue="applic-composite-nano-hybrid-resin-ea3-4gr" name="product_slug" />
                                  <input name="product_quantity" type="hidden" defaultValue={1} />
                                  <button className="product_cart_button" type="submit">Add to Cart
                                  </button>
                                </form>
                              </div>
                            </div>
                            <div className="product_fav"><i className="fas fa-heart" /></div>
                            <ul className="product_marks">
                              <li className="product_mark product_discount">-25%</li>
                              <li className="product_mark product_new">new</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="featured_slider_dots_cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFeaturedProd
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
