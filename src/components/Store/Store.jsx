import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Featured from './Featured';
import { getSingleProd, getSlideProd, getTrendsProd } from '../../actions/storeAction';

class Store extends Component {

  state = {
      singProd: [],
      slideProd: [],
      trendsPro: []
  };

  componentDidMount() {
      this.changeTab();
      this.fetchSlide();
      this.fetchTrends();
  }

  componentWillUnmount() {

  }

  changeTab = () => {
      const { getSingleProd } = this.props;

      getSingleProd().then(res => {
          if (res.payload && res.payload.status && res.payload.status === 200) {
              this.setState({
                singProd: res.payload.data
              })
          }
      })
};

fetchSlide = () => {
    const { getSlideProd } = this.props;

    getSlideProd().then(res => {
        if (res.payload && res.payload.status && res.payload.status === 200) {
            this.setState({
              slideProd: res.payload.data
            })
        }
    })
};

fetchTrends = () => {

  const { getTrendsProd } = this.props;
  getTrendsProd().then(res => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
          this.setState({
            trendsPro: res.payload.data
          })


      }
  })

};







    render() {
        const role = localStorage.role;

        //console.log(this.state.trendsPro);

        return (
          <div className="super_container">


      <Navbar/>



      { this.state.singProd.map((key, index) => (
     <div className="banner">
       <div className="banner_background" style={{backgroundImage: 'url(http://139.59.152.214:2992/static/build/images/banner_background.1187f4a81ce89867003768166ecb1b66.jpg)'}} />
       <div className="container fill_height" style={{wordWrap: 'break-word !important'}}>
         <div className="row fill_height" style={{wordWrap: 'break-word !important'}}>
           <div className="banner_product_image">
             <img src={key.image} data-src={key.image} style={{maxWidth: '400px', maxHeight: '300px'}} alt="Meta Etchant 37% Phosphoric " />
           </div>
           <div className="col-lg-5 offset-lg-4 fill_height" style={{wordWrap: 'break-word !important'}}>
             <div className="banner_content" style={{wordWrap: 'break-word !important'}}>
               <h1 className="banner_text" style={{wordWrap: 'break-word !important'}}>{key.name} </h1>
               <div className="banner_price">&nbsp;</div>
               <div className="banner_product_name" style={{wordWrap: 'break-word !important'}}>{key.subcategory.name}</div>
               <div className="button banner_button">
                 <a href="/product/meta-etchant-37-phosphoric">
                   Shop Now
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

   )) }


       <Featured/>







     {/* Banner */}

      <div className="banner_2">
        <div className="banner_2_background" style={{backgroundImage: 'url(http://139.59.152.214:2992/static/build/images/banner_2_background.4763716d2a4b667b9e550a959b1ba046.jpg)'}} />
        <div className="banner_2_container">
          <div className="banner_2_dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div>
          {/* Banner 2 Slider */}
          <div className="owl-carousel owl-theme banner_2_slider owl-loaded owl-drag">
            {/* Banner 2 Slider Item */}
            {/* Banner 2 Slider Item */}
            <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-2574px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '7722px'}}>
            <div className="owl-item cloned" style={{width: '1287px'}}><div className="owl-item">
                    <div className="banner_2_item">
                      <div className="container fill_height">
                        <div className="row fill_height">
                          <div className="col-lg-4 col-md-6 fill_height">
                            <div className="banner_2_content">
                              <div className="banner_2_category" style={{wordWrap: 'break-word !important'}}>RESTORATIVES</div>
                              <div className="banner_2_title" style={{wordWrap: 'break-word !important'}}>Nexcomp flow</div>
                              <div className="banner_2_text" style={{wordWrap: 'break-word !important'}}>
                                Low viscosity,light-cure,radiopaque flowable composite resin for minimally invasive cavity preparation
                                filled with various nano sized filler for excellent polishability
                                flowon deman handling
                                excellent radiopacity
                                no slumping and running
                              </div>
                              <div className="button banner_2_button">
                                <a href="/product/nexcomp-flow">Explore</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6 fill_height">
                            <div className="banner_2_image_container">
                              <div className="banner_2_image"><img src="/static/products/1566288445.610219.png" data-src="/static/products/1566288445.610219.png" style={{maxHeight: '477px', maxWidth: '860px'}} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div><div className="owl-item cloned" style={{width: '1287px'}}><div className="owl-item">
                    <div className="banner_2_item">
                      <div className="container fill_height">
                        <div className="row fill_height">
                          <div className="col-lg-4 col-md-6 fill_height">
                            <div className="banner_2_content">
                              <div className="banner_2_category" style={{wordWrap: 'break-word !important'}}>RESTORATIVES</div>
                              <div className="banner_2_title" style={{wordWrap: 'break-word !important'}}>Imflex putty</div>
                              <div className="banner_2_text" style={{wordWrap: 'break-word !important'}}>
                                Impression of crown or bridge, partial denture
                                accurate impression without bubbles because of hydrophilic property
                                gypsum model will be effectively reproduced without transformation due to an excellent reproducibility
                              </div>
                              <div className="button banner_2_button">
                                <a href="/product/imflex-putty">Explore</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6 fill_height">
                            <div className="banner_2_image_container">
                              <div className="banner_2_image"><img src="/static/products/1566288568.831823.png" data-src="/static/products/1566288568.831823.png" style={{maxHeight: '477px', maxWidth: '860px'}} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div><div className="owl-item" style={{width: '1287px'}}><div className="owl-item">
                    <div className="banner_2_item">
                      <div className="container fill_height">
                        <div className="row fill_height">
                          <div className="col-lg-4 col-md-6 fill_height">
                            <div className="banner_2_content">
                              <div className="banner_2_category" style={{wordWrap: 'break-word !important'}}>RESTORATIVES</div>
                              <div className="banner_2_title" style={{wordWrap: 'break-word !important'}}>Nexcomp flow</div>
                              <div className="banner_2_text" style={{wordWrap: 'break-word !important'}}>
                                Low viscosity,light-cure,radiopaque flowable composite resin for minimally invasive cavity preparation
                                filled with various nano sized filler for excellent polishability
                                flowon deman handling
                                excellent radiopacity
                                no slumping and running
                              </div>
                              <div className="button banner_2_button">
                                <a href="/product/nexcomp-flow">Explore</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6 fill_height">
                            <div className="banner_2_image_container">
                              <div className="banner_2_image"><img src="/static/products/1566288445.610219.png" data-src="/static/products/1566288445.610219.png" style={{maxHeight: '477px', maxWidth: '860px'}} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div><div className="owl-item" style={{width: '1287px'}}><div className="owl-item">
                    <div className="banner_2_item">
                      <div className="container fill_height">
                        <div className="row fill_height">
                          <div className="col-lg-4 col-md-6 fill_height">
                            <div className="banner_2_content">
                              <div className="banner_2_category" style={{wordWrap: 'break-word !important'}}>RESTORATIVES</div>
                              <div className="banner_2_title" style={{wordWrap: 'break-word !important'}}>Imflex putty</div>
                              <div className="banner_2_text" style={{wordWrap: 'break-word !important'}}>
                                Impression of crown or bridge, partial denture
                                accurate impression without bubbles because of hydrophilic property
                                gypsum model will be effectively reproduced without transformation due to an excellent reproducibility
                              </div>
                              <div className="button banner_2_button">
                                <a href="/product/imflex-putty">Explore</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6 fill_height">
                            <div className="banner_2_image_container">
                              <div className="banner_2_image"><img src="/static/products/1566288568.831823.png" data-src="/static/products/1566288568.831823.png" style={{maxHeight: '477px', maxWidth: '860px'}} alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div></div>
        </div>
      </div>



     {/* Popular Categories */}
     <div className="popular_categories">
       <div className="container">
         <div className="row">
           <div className="col-lg-3">
             <div className="popular_categories_content">
               <div className="popular_categories_title">Popular Categories</div>
               <div className="popular_categories_slider_nav">
                 <div className="popular_categories_prev popular_categories_nav"><i className="fas fa-angle-left ml-auto" /></div>
                 <div className="popular_categories_next popular_categories_nav"><i className="fas fa-angle-right ml-auto" /></div>
               </div>
             </div>
           </div>
           {/* Popular Categories Slider */}
           <div className="col-lg-9">
             <div className="popular_categories_slider_container">
               <div className="owl-carousel owl-theme popular_categories_slider">

                 {/* Popular Categories Item */}
                 <a href="/category/small-equipments">
                   <div className="owl-item">
                     <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                       <div className="popular_category_image">
                       </div>
                       <div className="popular_category_text" style={{wordWrap: 'break-word !important'}}>
                         Small equipments
                       </div>
                     </div>
                   </div>
                 </a>
                 <a href="/category/small-equipments">
                   <div className="owl-item">
                     <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                       <div className="popular_category_image">
                       </div>
                       <div className="popular_category_text" style={{wordWrap: 'break-word !important'}}>
                         Small marcel
                       </div>
                     </div>
                   </div>
                 </a>
                 {/* Popular Categories Item */}

               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Trends */}
     <div className="trends">
       <div className="trends_background" style={{backgroundImage: 'url(http://139.59.152.214:2992/static/build/images/trends_background.f0c7adc389db159123977ceabd93bd2d.jpg)'}} />
       <div className="trends_overlay" />
       <div className="container">
         <div className="row">
           {/* Trends Content */}
           <div className="col-lg-3">
             <div className="trends_container">
               <h2 className="trends_title">Trends 2020</h2>
               <div className="trends_text"><p />
               </div>
               <div className="trends_slider_nav">
                 <div className="trends_prev trends_nav"><i className="fas fa-angle-left ml-auto" /></div>
                 <div className="trends_next trends_nav"><i className="fas fa-angle-right ml-auto" /></div>
               </div>
             </div>
           </div>
           {/* Trends Slider */}
           <div className="col-lg-9">
             <div className="trends_slider_container">
               {/* Trends Slider */}
               <div className="owl-carousel owl-theme trends_slider">


               {/* Trends Slider Item */}
               { this.state.trendsPro.map((key, index) => (
               <div className="owl-item active" style={{width: '250px', marginRight: '20px'}}>
               <div className="owl-item">
               <div className="trends_item is_new">
               <div className="trends_image d-flex flex-column align-items-center justify-content-center">
               <a href="/product/abritec-bite-box-large-and-small-pink-color-autoclavable">
                <img src={key.image} data-src={key.image} style={{maxWidth: '212px', maxHeight: '132px'}} alt="" />
               </a>
               </div>
               <div className="trends_content">
               <div className="trends_category" style={{wordWrap: 'break-word !important'}}>
                <a href="/category/others">
                  {key.subcategory.name}
                </a>
               </div>
               <div className="trends_info clearfix" style={{wordWrap: 'break-word !important'}}>
                <div className="trends_name">
                  <a href="/product/abritec-bite-box-large-and-small-pink-color-autoclavable">
                    {key.name}
                  </a>
                </div>
               </div>
               </div>
               <ul className="trends_marks">
               <li className="trends_mark trends_discount">-25%</li>
               <li className="trends_mark trends_new">new</li>
               </ul>
               <div className="trends_fav"><i className="fas fa-heart" /></div>
               </div>
               </div>
               </div>
               ))}



               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Hot New Arrivals */}
     <div className="new_arrivals">
       <div className="container">
         <div className="row">
           <div className="col">
             <div className="tabbed_container">
               <div className="tabs clearfix tabs-right">
                 <div className="new_arrivals_title">Hot New Arrivals</div>
                 <ul className="clearfix">
                   <li className="active">&nbsp;</li>
                 </ul>
                 <div className="tabs_line"><span /></div>
               </div>
               <div className="row">
                 <div className="col-lg-9" style={{zIndex: 1}}>
                   {/* Product Panel */}
                   <div className="product_panel panel active">
                     <div className="arrivals_slider slider">


                       {/* Slider Item */}

                       { this.state.trendsPro.map((key, index) => (

                       <div className="arrivals_slider_item" style={{wordWrap: 'break-word !important'}}>
                         <div className="border_active" />
                         <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                           <div className="product_image d-flex flex-column align-items-center justify-content-center">
                             <a href="/product/aspirayted-syringe">
                               <img src="http://139.59.152.214:2992/static/build/images/loading.a3d2ba4750435e922c606fc802fa3cb8.gif" data-src="/static/products/1567584995.713379.jpg" style={{maxWidth: '135px', maxHeight: '109px'}} alt="Aspirayted syringe" />
                             </a>
                           </div>
                           <div className="product_content" style={{wordWrap: 'break-word !important'}}>
                             <div className="product_name text-wrap" style={{wordWrap: 'break-word !important'}}>
                               <div style={{wordWrap: 'break-word !important'}}>
                                 <a href="/product/aspirayted-syringe" style={{wordWrap: 'break-word !important'}}>
                                   Aspirayted syringe
                                 </a>
                               </div>
                             </div>
                             <div className="product_extras">
                               <form action="/cart/create/aspirayted-syringe" method="post">
                                 <input id="csrf_token" name="csrf_token" type="hidden" defaultValue="IjhhNDllMjU4ODgxNjRkZGZlMjllMGZiNDQ0NzNiNmQ5YWM4MjMxNzgi.Xz4iFA.ADnP_Dpn9MOPRMk8DWDJAtTEfk4" />
                                 <input type="hidden" defaultValue={193} name="product_id" />
                                 <input type="hidden" defaultValue="aspirayted-syringe" name="product_slug" />
                                 <input type="hidden" defaultValue="http://139.59.152.214/" name="request_url" />
                                 <input name="product_quantity" type="hidden" defaultValue={1} />
                                 <button className="product_cart_button" type="submit">
                                   Add to Cart
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

                       {/* Slider Item */}




                       </div>
                     <div className="arrivals_slider_dots_cover" />
                   </div>
                 </div>
                 <div className="col-lg-3">
                   <div className="arrivals_single clearfix">
                     <div className="d-flex flex-column align-items-center justify-content-center" style={{wordWrap: 'break-word !important'}}>
                       <div className="arrivals_single_image">
                         <a href="/product/meta-etchant-37-phosphoric">
                           <img src="http://139.59.152.214:2992/static/build/images/loading.a3d2ba4750435e922c606fc802fa3cb8.gif" data-src="/static/products/1567585749.201893.png" style={{maxWidth: '135px'}} alt="Meta Etchant 37% Phosphoric " />
                         </a>
                       </div>
                       <div className="arrivals_single_content" style={{wordWrap: 'break-word !important'}}>
                         <div className="arrivals_single_category" style={{wordWrap: 'break-word !important'}}>
                           <a href="/category/restoratives">RESTORATIVES</a>
                         </div>
                         <div className="arrivals_single_name_container clearfix" style={{wordWrap: 'break-word !important'}}>
                           <div className="arrivals_single_name text-wrap" style={{wordWrap: 'break-word !important'}}>
                             <a href="/product/meta-etchant-37-phosphoric" style={{wordWrap: 'break-word !important'}}>
                               Meta etchant 37% phosphoric
                             </a>
                           </div>
                           <div className="arrivals_single_price text-right" style={{wordWrap: 'break-word !important'}} />
                         </div>
                         <form action="/cart/create/meta-etchant-37-phosphoric" method="post">
                           <input id="csrf_token" name="csrf_token" type="hidden" defaultValue="IjhhNDllMjU4ODgxNjRkZGZlMjllMGZiNDQ0NzNiNmQ5YWM4MjMxNzgi.Xz4iFA.ADnP_Dpn9MOPRMk8DWDJAtTEfk4" />
                           <input type="hidden" defaultValue={195} name="product_id" />
                           <input type="hidden" defaultValue="meta-etchant-37-phosphoric" name="product_slug" />
                           <input type="hidden" defaultValue="http://139.59.152.214/" name="request_url" />
                           <input name="product_quantity" type="hidden" defaultValue={1} />
                           <button className="arrivals_single_button" type="submit">Add to
                             Cart
                           </button>
                         </form>
                       </div>
                       <div className="arrivals_single_fav product_fav active"><i className="fas fa-heart" />
                       </div>
                       <ul className="arrivals_single_marks product_marks">
                         <li className="arrivals_single_mark product_mark product_new">new</li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Best Sellers */}
     <div className="best_sellers">
       <div className="container">
         <div className="row">
           <div className="col">
             <div className="tabbed_container">
               <div className="tabs clearfix tabs-right">
                 <div className="new_arrivals_title">Hot Best Sellers</div>
                 <ul className="clearfix">
                   <li className="active">&nbsp;</li>
                 </ul>
                 <div className="tabs_line"><span /></div>
               </div>
               <div className="bestsellers_panel panel active">
                 {/* Best Sellers Slider */}
                 <div className="bestsellers_slider slider">
                   {/* Best Sellers Item */}




                { this.state.trendsPro.map((key, index) => (
                  <div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: '350px'}} tabIndex={0} role="tabpanel" id="slick-slide41"><div><a href="/category/others" style={{width: '100%', display: 'inline-block'}} tabIndex={0}>
          </a></div><div><div className="bestsellers_item" style={{width: '100%', display: 'inline-block'}}><a href="/category/others" tabIndex={0}>
            </a><div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start"><a href="/category/others" tabIndex={0}>
              </a><div className="bestsellers_image"><a href="/category/others" tabIndex={0}>
                </a><a href="/product/retractor-2-thick-250cm" tabIndex={0}>
                  <img src={key.image} data-src={key.image} style={{maxHeight: '115px', maxWidth: '115px'}} alt="" />
                </a>
              </div>
              <div className="bestsellers_content" style={{wordWrap: 'break-word !important'}}>
                <div className="bestsellers_category" style={{wordWrap: 'break-word !important'}}>
                  <a href="/category/others" style={{wordWrap: 'break-word !important'}} tabIndex={0}>
                    {key.subcategory.name}
                  </a>
                </div>
                <div className="bestsellers_name" style={{wordWrap: 'break-word !important'}}>
                  <a href="/product/retractor-2-thick-250cm" style={{wordWrap: 'break-word !important'}} tabIndex={0}>
                    {key.name}
                  </a>
                </div>
              </div>
            </div>
            <div className="bestsellers_fav active"><i className="fas fa-heart" /></div>
            <ul className="bestsellers_marks">
              <li className="bestsellers_mark bestsellers_discount">-25%</li>
              <li className="bestsellers_mark bestsellers_new">new</li>
            </ul>
          </div></div></div>
                 ))}






                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Brands */}
     <div className="brands">
       <div className="container">
         <div className="row">
           <div className="col">
             <div className="brands_slider_container">
               {/* Brands Slider */}
               <div className="owl-carousel owl-theme brands_slider">
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1561651145.352455.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1561651711.623175.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1561651798.972237.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562852561.975058.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562852814.216681.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562852828.389226.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562852845.987658.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853058.77298.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853033.479199.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853510.564029.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853534.804799.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853556.47769.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853579.133201.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562853599.363741.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562854033.258549.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562854054.577248.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562854073.23963.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562854096.703977.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562854225.429982.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1562854248.132021.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1565682978.126476.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1565683104.283147.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1565683487.738711.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1565683819.541258.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1565683579.343227.jpg" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
                 <div className="owl-item">
                   <div className="brands_item d-flex flex-column justify-content-center">
                     <img src="/static/brands/1567583925.008965.png" style={{maxWidth: '72px !important', maxHeight: '72px !important'}} alt="" />
                   </div>
                 </div>
               </div>
               {/* Brands Slider Navigation */}
               <div className="brands_nav brands_prev"><i className="fas fa-chevron-left" /></div>
               <div className="brands_nav brands_next"><i className="fas fa-chevron-right" /></div>
             </div>
           </div>
         </div>
       </div>
     </div>


     <footer className="text-white bg-primary" style={{fontSize: '.92em', marginBottom: '-15px'}} id="footer-main">
       <div className>
         <div className="container">
           <div className="row align-items-center pt-md">
             <div className="col-lg-4 order-1 order-lg-0 col-sm-12 mb-lg-0">
               <a href="/">
                 <img className="d-none mt-4 d-lg-block" src="http://139.59.152.214:2992/static/build/images/logo_viebeg.008cc7558873297e4269b5989aef63a5.png" alt="Footer logo" style={{height: '40px'}} />
               </a>
               <div className="footer_social mb-3 text-sm">
                 <ul>
                   <li>
                     <a href="https://www.facebook.com/Viebeg-Medical-353976595340596/" target="_blank">
                       <i className="fab fa-facebook-f" />
                     </a>
                   </li>
                   <li>
                     <a href="https://twitter.com/ViebegM" target="_blank"><i className="fab fa-twitter" /></a>
                   </li>
                   <li>
                     <a href="https://www.linkedin.com/company/11499454/admin/" target="_blank">
                       <i className="fab fa-linkedin" />
                     </a>
                   </li>
                   <li>
                     <a href="https://www.instagram.com/viebeg.medical/" target="_blank">
                       <i className="fab fa-instagram" />
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-lg-4 col-sm-4 ">
               <h5 className="font-weight-bolder text-white">Contact us</h5>
               <ul className="list-unstyled font-weight-light">
                 <li><a className="text-light" href="/">+250 787 104 894</a></li>
                 <li><a className="text-light" href="/">office@viebeg.com</a></li>
                 <li><a className="text-light" href="/">Downtown Building 3rd Floor F 316</a></li>
               </ul>
             </div>
             <div className="col-lg-2 col-sm-4">
               <h5 className="font-weight-bolder text-white">Viebeg</h5>
               <ul className="list-unstyled font-weight-light">
                 <li><a className="text-light" href="http://viebeg.org/">Store</a></li>
                 <li><a className="text-light" href="http://viebeg.com/team/">Team</a></li>
                 <li><a className="text-light" href="http://viebeg.com/csr/">Csr</a></li>
               </ul>
             </div>
             <div className="col-lg-2 col-sm-4">
               <h5 className="font-weight-bolder text-white">About</h5>
               <ul className="list-unstyled font-weight-light">
                 <li><a className="text-light" href="http://viebeg.com/about/">About us</a></li>
                 <li><a className="text-light" href="http://viebeg.com/why-africa/">Why Africa?</a></li>
                 <li><a className="text-light" href="http://viebeg.com/corporate-charter/">Corporate charter</a></li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </footer>
     {/* Copyright */}
     <div className="copyright text-center">
       <div className="container">
         <div className="row">
           <div className="col">
             <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
               <div className="copyright_content">
                 {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                 Copyright ©
                 {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
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
        getSingleProd,
        getSlideProd,
        getTrendsProd
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
