import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Navbar = () => {
    return (

      <header className="header">

      <div className="top_bar">
      <div className="container">
      <div className="row" style={{ marginTop: '-8px' }}>
       <div className="col d-flex flex-row">
         <div className="top_bar_contact_item">
           <div className="top_bar_icon"><img src="http://139.59.152.214:2992/static/build/images/phone.7edb16f99199cfb9fc062ba7cd4105e2.png" alt="" /></div>
           +250 787 104 894
         </div>
         <div className="top_bar_contact_item">
           <div className="top_bar_icon"><img src="http://139.59.152.214:2992/static/build/images/mail.123246836508ffd85418db180d31fbec.png" alt="" /></div>
           <a href="mailto:fastsales@gmail.com">office@viebeg.com</a></div>
         <div className="top_bar_content ml-auto">
           <div className="top_bar_user">
             <div className="user_icon"><img src="http://139.59.152.214:2992/static/build/images/user.b5bdec384be154d119d2101831efea68.svg" alt="" />
             </div>
             <div><a href="/register">Register</a></div>
             <div><a href="/login">Sign in</a></div>
           </div>
         </div>
       </div>
      </div>
      </div>
      </div>
      {/* Header Main */}
      <div className="header_main">
      <div className="container" style={{ height: '180px' }}>
      <div className="row">
       {/* Logo */}
       <div className="col-lg-2 col-sm-3 col-3 order-1">
         <div className="logo_container">
           <div className="logo"><a href="/">
               <img src="http://139.59.152.214:2992/static/build/images/logo_viebeg.008cc7558873297e4269b5989aef63a5.png" className="mt-2" alt="VieBeg" width="200px" />
             </a></div>
         </div>
       </div>
       {/* Search */}
       <div className="col-lg-8 col-12 order-lg-2 order-3 text-lg-left text-right">
         <div className="header_search">
           <div className="header_search_content">
             <div className="header_search_form_container">
               <form action="/search" className="header_search_form clearfix">
                 <input type="text" required="required" name="q" className="header_search_input" defaultValue placeholder="Search for products..." />
                 <div className="custom_dropdown">
                   <div className="custom_dropdown_list">
                     <span className="custom_dropdown_placeholder clc">All Categories</span>
                     <i className="fas fa-chevron-down" />
                     <ul className="custom_list clc">
                       <li><a className="clc" href="#">All Categories</a></li>
                       <li>
                         <a className="clc" data-slug="restoratives" style={{cursor: 'pointer'}}>
                           Restoratives
                         </a>
                       </li>

                     </ul>
                   </div>
                 </div>
                 <button type="submit" className="header_search_button trans_300" value="Submit">
                   <img src="http://139.59.152.214:2992/static/build/images/search.1a3275ca78dc201769c086dca0eda7f2.png" alt="" /></button>
               </form>
             </div>
           </div>
         </div>
       </div>
       <div className="col-lg-2 col-9 order-lg-3 order-2 text-lg-left text-right">
         <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
           {/* Cart */}
           <div className="cart">
             <div className="cart_container d-flex flex-row align-items-center justify-content-end">
               <div className="cart_icon">
                 <a href="/cart" style={{textDecoration: 'none'}}>
                   <img src="http://139.59.152.214:2992/static/build/images/cart.dcfde41979637b749869ecda106ef041.png" alt="" />
                   <div className="cart_count"><span>0</span></div>
                 </a>
               </div>
               <div className="cart_content">
                 <a href="/cart" style={{textDecoration: 'none'}}>
                   <div className="cart_text">Cart</div>
                   <div className="cart_price">RWF 0</div>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
      </div>
      </div>
      {/* Main Navigation */}
      <nav className="main_nav" style={{ height: '60px' }}>
      <div className="container">
      <div className="row">
       <div className="col">
         <div className="main_nav_content d-flex flex-row">
           {/* Categories Menu */}
           <div className="cat_menu_container" style={{ marginTop: '-10px' }}>
             <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
               <div className="cat_burger"><span /><span /><span /></div>
               <div className="cat_menu_text">categories</div>
             </div>
             <ul className="cat_menu">
               <li>
                 <a href="/category/restoratives">
                   Restoratives
                 </a>
               </li>

             </ul>
           </div>

           <div class="main_nav_menu ml-auto">
              <ul class="standard_dropdown main_nav_dropdown" style={{ marginTop: '-10px' }}>
                  <li>
                      <a href="/store">
                          Home
                      </a>
                  </li>
                  <li>
                      <a href="https://viebeg.health.blog" target="_blank">
                          Blog <i class="fas fa-chevron-down"></i>
                      </a>
                  </li>
                  <li>
                      <a href="http://www.viebeg.com/contact/" target="_blank">
                          Contact <i class="fas fa-chevron-down"></i>
                      </a>
                  </li>
              </ul>
          </div>


           {/* Menu Trigger */}
           <div className="menu_trigger_container ml-auto">
             <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
               <div className="menu_burger">
                 <div className="menu_trigger_text">menu</div>
                 <div className="cat_burger menu_burger_inner">
                   <span /><span /><span /></div>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
      </div>
      </nav>
      {/* Menu */}
      <div className="page_menu">
      <div className="container">
      <div className="row">
       <div className="col">
         <div className="page_menu_content">
           <div className="page_menu_search">
             <form action="/search">
               <input type="search" required="required" className="page_menu_search_input" name="q" placeholder="Search for products..." />
             </form>
           </div>
           <ul className="page_menu_nav">
             <li className="page_menu_item">
               <a href="/">
                 Home <i className="fa fa-angle-down" />
               </a>
             </li>
             <li className="page_menu_item">
               <a href="https://viebeg.health.blog">
                 blog <i className="fa fa-angle-down" />
               </a>
             </li>
             <li className="page_menu_item">
               <a href="http://www.viebeg.com/contact/">
                 contact <i className="fa fa-angle-down" />
               </a>
             </li>
           </ul>
           <div className="menu_contact">
             <div className="menu_contact_item">
               <div className="menu_contact_icon"><img src="http://139.59.152.214:2992/static/build/images/phone_white.1f8689bfc9efd3ab30751b28290809d0.png" alt="" /></div>
               +38 068 005 3570
             </div>
             <div className="menu_contact_item">
               <div className="menu_contact_icon"><img src="http://139.59.152.214:2992/static/build/images/mail_white.6d85832e5636963d7141922771d56ae4.png" alt="" /></div>
               <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
           </div>
         </div>
       </div>
      </div>
      </div>
      </div>
      </header>

    );
};

export default Navbar;
