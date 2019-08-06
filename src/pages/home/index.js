import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../../assets/js/custom'

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedCity: "",
            bedrooms: "",
            bathrooms: "",
            searchFlag: false
        }

        this.recentSlider = React.createRef();
    }

    setSearchFilter(key, e){
        this.setState({[key]: e.target.value});
    }
    
    searchProperties(){
        this.setState({searchFlag: true});
    }

    render(){
        const options = {
            items: 1,
            rewind: true,
            autoplay: true
        };

        const recentOptions = {
            items: 3,
            rewind: true,
            autoplay: true
        };
        return(
            <div className="super_container">
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="logo">
                                        <a href="#"><img src="images/logo.png" alt=""/></a>
                                    </div>
                                    <nav className="main_nav">
                                        <ul>
                                            <li className="active"><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="properties.html">Properties</a></li>
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                    <div className="phone_num ml-auto">
                                        <div className="phone_num_inner">
                                            <img src="images/phone.png" alt="" /><span>+91 9730-000-494</span>
                                        </div>
                                    </div>
                                    <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="menu trans_500">
                    <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="menu_close_container"><div className="menu_close"></div></div>
                        <div className="logo menu_logo">
                            <a href="#">
                                <div className="logo_container d-flex flex-row align-items-start justify-content-start">
                                    <div className="logo_image"><div><img src="images/logo.png" alt=""/></div></div>
                                </div>
                            </a>
                        </div>
                        <ul>
                            <li className="menu_item"><a href="index.html">Home</a></li>
                            <li className="menu_item"><a href="about.html">About us</a></li>
                            <li className="menu_item"><a href="#">Speakers</a></li>
                            <li className="menu_item"><a href="#">Tickets</a></li>
                            <li className="menu_item"><a href="news.html">News</a></li>
                            <li className="menu_item"><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="menu_phone"><span>call us: </span>+91 9730-000-494</div>
                </div>



                <div className="home">


                    <div className="home_slider_container">
                        <OwlCarousel options={options}>
                            <div className="item">
                                <div className="home_slider_background" style={{backgroundImage: "url(images/home_slider_1.jpg)"}}/>
                                <div className="slide_container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slide_content">
                                                    {/*<div className="home_subtitle">Dream</div>*/}
                                                    <div className="home_title">Properties in your city</div>
                                                    {/* <div className="home_details">
                                                        <ul className="home_details_list d-flex flex-row align-items-center justify-content-start">
                                                            <li>
                                                                <div className="home_details_image"><img src="images/icon_1.png" alt=""/></div>
                                                                <span> 650 Ftsq</span>
                                                            </li>
                                                            <li>
                                                                <div className="home_details_image"><img src="images/icon_2.png" alt=""/></div>
                                                                <span> 3 Bedrooms</span>
                                                            </li>
                                                            <li>
                                                                <div className="home_details_image"><img src="images/icon_3.png" alt=""/></div>
                                                                <span> 2 Bathrooms</span>
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                    {/*<div className="home_price">$ 1. 245 999</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="home_slider_background" style={{backgroundImage: "url(images/home_slider_1.jpg)"}}/>
                                <div className="slide_container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slide_content">
                                                    {/*<div className="home_subtitle">Dream</div>*/}
                                                    <div className="home_title">Properties in your city</div>
                                                    {/* <div className="home_details">
                                                        <ul className="home_details_list d-flex flex-row align-items-center justify-content-start">
                                                            <li>
                                                                <div className="home_details_image"><img src="images/icon_1.png" alt=""/></div>
                                                                <span> 650 Ftsq</span>
                                                            </li>
                                                            <li>
                                                                <div className="home_details_image"><img src="images/icon_2.png" alt=""/></div>
                                                                <span> 3 Bedrooms</span>
                                                            </li>
                                                            <li>
                                                                <div className="home_details_image"><img src="images/icon_3.png" alt=""/></div>
                                                                <span> 2 Bathrooms</span>
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                    {/*<div className="home_price">$ 1. 245 999</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="home_slider_background" style= {{backgroundImage: "url(images/home_slider_1.jpg)"}}/>
                                <div className="slide_container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slide_content">
                                                    {/*<div className="home_subtitle">Dream</div>*/}
                                                    <div className="home_title">Properties in your city</div>
                                                    {/*<div className="home_details">*/}
                                                    {/*    <ul className="home_details_list d-flex flex-row align-items-center justify-content-start">*/}
                                                    {/*        <li>*/}
                                                    {/*            <div className="home_details_image"><img src="images/icon_1.png" alt=""/></div>*/}
                                                    {/*            <span> 650 Ftsq</span>*/}
                                                    {/*        </li>*/}
                                                    {/*        <li>*/}
                                                    {/*            <div className="home_details_image"><img src="images/icon_2.png" alt=""/></div>*/}
                                                    {/*            <span> 3 Bedrooms</span>*/}
                                                    {/*        </li>*/}
                                                    {/*        <li>*/}
                                                    {/*            <div className="home_details_image"><img src="images/icon_3.png" alt=""/></div>*/}
                                                    {/*            <span> 2 Bathrooms</span>*/}
                                                    {/*        </li>*/}
                                                    {/*    </ul>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="home_price">$ 1. 245 999</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </OwlCarousel>
                    </div>
                </div>



                <div className="home_search">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_search_container">
                                    <div className="home_search_content">
                                        <form action="#" className="search_form d-flex flex-row align-items-start justfy-content-start">
                                            <div className="search_form_content d-flex flex-row align-items-start justfy-content-start flex-wrap">
                                                <div className="flex-grow-1" style={{flexGrow: 1}}>
                                                    <select value={this.state.selectedCity || "City"} onChange={this.setSearchFilter.bind(this, "selectedCity")}
                                                    className="search_form_select">
                                                        <option value="City" disabled>City</option>
                                                        <option value="nagpur">Nagpur</option>
                                                        <option value="pune">Pune</option>
                                                        <option value="mumbai">Mumbai</option>
                                                    </select>
                                                </div>
                                                <div className="flex-grow-1" style={{flexGrow: 1}}>
                                                    <select value={this.state.bedrooms || "bedrooms"} onChange={this.setSearchFilter.bind(this, "bedrooms")}
                                                    className="search_form_select">
                                                        <option value="bedrooms" disabled>Bedrooms</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                                <div className="flex-grow-1" style={{flexGrow: 1}}>
                                                    <select value={this.state.bathrooms || "bathrooms"} onChange={this.setSearchFilter.bind(this, "bathrooms")} 
                                                    className="search_form_select">
                                                        <option value="bathrooms" disabled>Bathrooms</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button className="search_form_button ml-auto" onClick={this.searchProperties.bind(this)}>search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="recent">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title">
                                    {this.state.searchFlag ? "10 Properties found" : "Recent Properties"}
                                    </div>
                                <div className="section_subtitle">Search your dream home</div>
                            </div>
                        </div>
                        <div className="row recent_row">
                            <div className="col">
                                <div className="recent_slider_container">
                                    <OwlCarousel ref={this.recentSlider} options={recentOptions}>
                                        <div className="owl-item">
                                            <div className="recent_item">
                                                <div className="recent_item_inner">
                                                    <div className="recent_item_image">
                                                        {!this.state.searchFlag && <img src="images/property_1.jpg" alt=""/>}
                                                        {this.state.searchFlag && <img src="images/property_6.jpg" alt=""/>}
                                                        <div className="tag_featured property_tag"><a href="#">Featured</a></div>
                                                    </div>
                                                    <div className="recent_item_body text-center">
                                                        <div className="recent_item_location">City Name</div>
                                                        <div className="recent_item_title"><a href="property.html">Property name</a></div>
                                                        <div className="recent_item_price"><span style={{content:"20B9"}}>&#8377;</span> 1234 981</div>
                                                    </div>
                                                    <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="recent_icon"><img src="images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item">
                                            <div className="recent_item">
                                                <div className="recent_item_inner">
                                                    <div className="recent_item_image">
                                                    {!this.state.searchFlag && <img src="images/property_2.jpg" alt=""/>}
                                                        {this.state.searchFlag && <img src="images/property_7.jpg" alt=""/>}
                                                        <div className="tag_offer property_tag"><a href="#">Offer</a></div>
                                                    </div>
                                                    <div className="recent_item_body text-center">
                                                        <div className="recent_item_location">City Name</div>
                                                        <div className="recent_item_title"><a href="property.html">Property name</a></div>
                                                        <div className="recent_item_price"><span style={{content:"20B9"}}>&#8377;</span> 1834 971</div>
                                                    </div>
                                                    <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="recent_icon"><img src="images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item">
                                            <div className="recent_item">
                                                <div className="recent_item_inner">
                                                    <div className="recent_item_image">
                                                    {!this.state.searchFlag && <img src="images/property_3.jpg" alt=""/>}
                                                        {this.state.searchFlag && <img src="images/property_8.jpg" alt=""/>}
                                                        <div className="tag_featured property_tag"><a href="#">Featured</a></div>
                                                    </div>
                                                    <div className="recent_item_body text-center">
                                                        <div className="recent_item_location">City Name</div>
                                                        <div className="recent_item_title"><a href="property.html">Property name</a></div>
                                                        <div className="recent_item_price"><span style={{content:"20B9"}}>&#8377;</span> 968 8555</div>
                                                    </div>
                                                    <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="recent_icon"><img src="images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {!this.state.searchFlag && <div className="owl-item">
                                            <div className="recent_item">
                                                <div className="recent_item_inner">
                                                    <div className="recent_item_image">
                                                        <img src="images/property_3.jpg" alt=""/>
                                                        <div className="tag_featured property_tag"><a href="#">Featured</a></div>
                                                    </div>
                                                    <div className="recent_item_body text-center">
                                                        <div className="recent_item_location">City Name</div>
                                                        <div className="recent_item_title"><a href="property.html">Property name</a></div>
                                                        <div className="recent_item_price"><span style={{content:"20B9"}}>&#8377;</span> 1234 981</div>
                                                    </div>
                                                    <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="recent_icon"><img src="images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                        {!this.state.searchFlag && <div className="owl-item">
                                            <div className="recent_item">
                                                <div className="recent_item_inner">
                                                    <div className="recent_item_image">
                                                        <img src="images/property_3.jpg" alt=""/>
                                                        <div className="tag_featured property_tag"><a href="#">Featured</a></div>
                                                    </div>
                                                    <div className="recent_item_body text-center">
                                                        <div className="recent_item_location">City Name</div>
                                                        <div className="recent_item_title"><a href="property.html">Property name</a></div>
                                                        <div className="recent_item_price"><span style={{content:"20B9"}}>&#8377;</span> 1234 981</div>
                                                    </div>
                                                    <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                                                        <div><div className="recent_icon"><img src="images/icon_1.png" alt=""/></div><span>650 Ftsq</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_2.png" alt=""/></div><span>3 Bedrooms</span></div>
                                                        <div><div className="recent_icon"><img src="images/icon_3.png" alt=""/></div><span>3 Bathrooms</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                    </OwlCarousel>

                                    <div className="recent_slider_nav_container d-flex flex-row align-items-start justify-content-start">
                                        <div className="recent_slider_nav recent_slider_prev">
                                            <i className="fa fa-chevron-left" aria-hidden="true" onClick={() => {this.recentSlider.current.prev()}}/></div>
                                        <div className="recent_slider_nav recent_slider_next">
                                            <i className="fa fa-chevron-right" aria-hidden="true" onClick={() => {this.recentSlider.current.next()}}/></div>
                                    </div>
                                </div>
                                <div className="button recent_button"><a href="#">see more</a></div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="cities">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title">Listed Properties</div>
                                <div className="section_subtitle">Search your dream home</div>
                            </div>
                        </div>
                    </div>

                    <div className="cities_container d-flex flex-row flex-wrap align-items-start justify-content-between">


                        <div className="city">
                            <img src="images/city_1.jpg" alt="https://unsplash.com/@dnevozhai"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_2.jpg" alt="https://unsplash.com/@lachlanjdempsey"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_3.jpg" alt="https://unsplash.com/@hellolightbulb"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_4.jpg" alt="https://unsplash.com/@justinbissonbeck"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_5.jpg" alt="https://unsplash.com/@claudiotrigueros"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_6.jpg" alt="https://unsplash.com/@andersjilden"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_7.jpg" alt="https://unsplash.com/@sawyerbengtson"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>


                        <div className="city">
                            <img src="images/city_8.jpg" alt="https://unsplash.com/@mathewwaters"/>
                            <div className="city_overlay">
                                <a href="#" className="d-flex flex-column align-items-center justify-content-center">
                                    <div className="city_title">Property name</div>
                                    <div className="city_subtitle">Details</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title">What our customer say</div>
                                <div className="section_subtitle">Search your dream home</div>
                            </div>
                        </div>
                        <div className="row testimonials_row">


                            <div className="col-lg-4 testimonial_col">
                                <div className="testimonial">
                                    <div className="testimonial_title">Amazing home for me</div>
                                    <div className="testimonial_text">Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</div>
                                    <div className="testimonial_author_image"><img src="images/testimonial_1.png" alt=""/></div>
                                    <div className="testimonial_author"><a href="#">Rajat Thakur</a><span>, Client</span></div>
                                    <div className="rating_r rating_r_5 testimonial_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                </div>
                            </div>


                            <div className="col-lg-4 testimonial_col">
                                <div className="testimonial">
                                    <div className="testimonial_title">Friendly Realtors</div>
                                    <div className="testimonial_text">Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit.</div>
                                    <div className="testimonial_author_image"><img src="images/testimonial_2.png" alt=""/></div>
                                    <div className="testimonial_author"><a href="#">Karan Singh</a><span>, Client</span></div>
                                    <div className="rating_r rating_r_5 testimonial_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                </div>
                            </div>


                            <div className="col-lg-4 testimonial_col">
                                <div className="testimonial">
                                    <div className="testimonial_title">Very good communication</div>
                                    <div className="testimonial_text">Retiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</div>
                                    <div className="testimonial_author_image"><img src="images/testimonial_3.png" alt=""/></div>
                                    <div className="testimonial_author"><a href="#">Mandar Patil</a><span>, Client</span></div>
                                    <div className="rating_r rating_r_5 testimonial_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/*<div className="newsletter">*/}
                {/*    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/newsletter.jpg" data-speed="0.8"></div>*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col">*/}
                {/*                <div className="newsletter_content d-flex flex-lg-row flex-column align-items-start justify-content-start">*/}
                {/*                    <div className="newsletter_title_container">*/}
                {/*                        <div className="newsletter_title">Are you buying or selling?</div>*/}
                {/*                        <div className="newsletter_subtitle">Search your dream home</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="newsletter_form_container">*/}
                {/*                        <form action="#" className="newsletter_form">*/}
                {/*                            <input type="email" className="newsletter_input" placeholder="Your e-mail address" required="required"/>*/}
                {/*                            <button className="newsletter_button" >Contact us</button>*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}



                <footer className="footer">
                    <div className="footer_main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer_logo"><a href="#"><img src="images/logo.png" alt="" height={150} width={250}/></a></div>
                                </div>
                                {/*<div className="col-lg-9 d-flex flex-column align-items-start justify-content-end">*/}
                                {/*    <div className="footer_title">Latest Properties</div>*/}
                                {/*</div>*/}
                            </div>
                            <div className="row">
                                <div className="col-lg-3 footer_col">
                                    <div className="footer_about">
                                        <div className="footer_about_text">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.                                        </div>
                                    </div>
                                </div>
                                {/*<div className="col-lg-3 footer_col">*/}
                                {/*    <div className="footer_latest d-flex flex-row align-items-start justify-content-start">*/}
                                {/*        <div><div className="footer_latest_image"><img src="images/footer_latest_1.jpg" alt=""/></div></div>*/}
                                {/*        <div className="footer_latest_content">*/}
                                {/*            <div className="footer_latest_location">Miami</div>*/}
                                {/*            <div className="footer_latest_name"><a href="#">Sea view property</a></div>*/}
                                {/*            <div className="footer_latest_price">$ 1. 234 981</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="col-lg-3 footer_col">*/}
                                {/*    <div className="footer_latest d-flex flex-row align-items-start justify-content-start">*/}
                                {/*        <div><div className="footer_latest_image"><img src="images/footer_latest_2.jpg" alt=""/></div></div>*/}
                                {/*        <div className="footer_latest_content">*/}
                                {/*            <div className="footer_latest_location">Miami</div>*/}
                                {/*            <div className="footer_latest_name"><a href="#">Town House</a></div>*/}
                                {/*            <div className="footer_latest_price">$ 1. 234 981</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="col-lg-3 footer_col">*/}
                                {/*    <div className="footer_latest d-flex flex-row align-items-start justify-content-start">*/}
                                {/*        <div><div className="footer_latest_image"><img src="images/footer_latest_3.jpg" alt=""/></div></div>*/}
                                {/*        <div className="footer_latest_content">*/}
                                {/*            <div className="footer_latest_location">Miami</div>*/}
                                {/*            <div className="footer_latest_name"><a href="#">Modern House</a></div>*/}
                                {/*            <div className="footer_latest_price">$ 1. 234 981</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>);
    }
}

export default Home;