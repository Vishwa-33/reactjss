import React from "react";
import './card.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faArrowRightLong, faBookBible, faBurger, faCashRegister, faCloudMoon, faDollar, faGlobeEurope, faGrinTongueWink, faHandHoldingDollar, faHatHard, faHome, faImage, faLightbulb, faMailBulk, faMailReplyAll, faMap, faMapLocation, faMapMarked, faMapMarkerAlt, faMapPin, faMoneyBillTrendUp, faPeopleGroup, faSquare, faTrademark, faTruckArrowRight, faUserFriends } from '@fortawesome/free-solid-svg-icons';
 import navlogo from './navlogo.png';
import plumber from './plumber.jpg';
import { faAddressBook, faContactBook, faContactCard } from "@fortawesome/free-regular-svg-icons";
import servicepic from './servicepic.png';
import formpic from './formpic.jpg';
import firstpic from './logo.png';
import secondpic from './logoo.png';
import thirdpic from './logooo.png';
import fourthpic from './logoooo.png';



export function Card() {
    return(
         
// .................nav.............
<div className="bg  background">
<div className=" top container-fluid fixed-top mt-4">
<div className="navbar navbar-expand-lg px-5">

<nav className="navbar navbar-expand-lg-sm-md ml-3 new" id="navbar">

 




<div className="collapse navbar-collapse " >
  <ul className="navbar-nav">

  <li id="#menu" className="nav-item font-weight-bold mt-1 float-left"> 
<a  href="#menu"> <img className="image-fluid  w-25 float-left my-3" src={navlogo}/></a>
</li>


<li className="nav-item font-weight-bold mr-5 ">
<a className="nav-link " href="#home"> <FontAwesomeIcon icon ={faHome}  />  Home</a>
</li>

<li className="nav-item font-weight-bold mr-5">
<a className="nav-link" href="about"> <FontAwesomeIcon icon ={faAddressBook}  />  About</a>
</li>
<li className="nav-item font-weight-bold mr-5">
<a className="nav-link" href="#"> <FontAwesomeIcon icon ={faHandHoldingDollar}  />  Services</a>
</li>
<li className="nav-item font-weight-bold mr-5">
<a className="nav-link" href="#menu"> <FontAwesomeIcon icon ={faImage}  />  Gallery</a>
</li>
<li className="nav-item font-weight-bold mr-5">
<a className="nav-link" href="#menu"> <FontAwesomeIcon icon ={faUserFriends}  />  Team</a>
</li>
<li className="nav-item font-weight-bold mr-5">
<a className="nav-link" href="#menu"> <FontAwesomeIcon icon ={faDollar}  />  Payment</a>
</li>
 <li className="nav-item font-weight-bold">
<a className="nav-link" href="#menu"> <FontAwesomeIcon icon ={faContactBook}  />  Contact</a>
</li>


  </ul> 
  
<button className="navbar-toggler mr-5"  href="#menu" id="" type="button" data-bs-toggle="collapse" data-bs-target="#menu"><FontAwesomeIcon icon ={faBurger}  /></button>
</div>
</nav>

</div>    
</div>
<div className="container content">
<div className=" font-weight-bold text-center text-light">
<h4 className>Wellcome to</h4>
<h1 className="py-3">TRICHY RELOCATION SOLIUTON</h1>
<h4 className="py-2">Door to Door Delivery Service All Over India</h4>
</div>
</div>
{/* ---------------nav bottom--------- */}

<div className="container-fluid">

{/* <div className="row ml-5 col-12 col-sm-12 col-md-8">
<div className="col-12 col-lg-1 col-md-0 "></div>
<div class="col-12 col-lg-4 col-md-3 ms-md-3 ">

  <h3 className="text-light  pt-4">Enquiry  <FontAwesomeIcon icon ={faArrowRightLong} className="text-dark" /></h3>
</div>
</div> 
 */}

<div className="row  infodiv">

<div className="container col-lg-3 col-10 float-left  enquiry">
<h3 className="text-light font-weight-bold">Get a More Enquiry  </h3>

<FontAwesomeIcon icon ={faArrowRightLong} className=" font-weight-bold" />
  </div>


<div className="container col-lg-3   mt-5 mail">
  <div className="text-center">
<h3 className="text-light text-dark font-weight-bold  mt-4">EMAIL</h3>
</div>

  <h6 className=" text-secondary"><FontAwesomeIcon icon ={faMailBulk} className="text-secondary" />  info@trichyrelocation.com</h6>

  </div>

  <div className="container col-lg-3 float-right  position-sticky phone">
<h3 className="text-dark font-weight-bold mt-4">PHONE</h3>

 
  <h6 className=" text-secondary"><FontAwesomeIcon icon ={faContactCard} className="text-secondary" />  +919790083752</h6>

  </div>

</div>
{/* ---------------about----------------------- */}

{/* <div className="row w-50  col float-left about">

 
<p className="font-weight-bold text-light">We, Trichy relocation Solution, are a company situated in Tamilnadu that offers moving and packing services.we provide skilled packing and moving services in Tamil Nadu to all over India.</p>


<h2 className=" text-light font-weight-bold mb-5">Best Services</h2>

<p className="text-light mb-5">Providing a High-Quality Packing & Relocating Services</p>

<h2 className=" text-light font-weight-bold mb-5">On-Time Delivery</h2>

<p className="text-light mb-5">24/7 Services with Right Time Delivery</p>

</div>

  <div className="image-fluid container aboutpic">

  <img className="image-fluid float-right" src={servicepic}/>

</div>   */}


{/* -----------------------About--------------------- */}
<div id="about">
<div className="row mt-5">
  <div className="col-lg-6 ml-5 about m">
  <h2 className="text-light">About Us</h2>
<p className="text-light">We, Trichy relocation Solution, are a company situated in Tamilnadu that offers moving and packing services.we provide skilled packing and moving services in Tamil Nadu to all over India</p>

<h2 className=" text-light font-weight-bold mb-5 k">Best Services</h2>

<p className="text-light mb-5 k ">Providing a High-Quality Packing & Relocating Services</p>

<h2 className=" text-light font-weight-bold mb-5 k">On-Time Delivery</h2>

<p className="text-light mb-5 k">24/7 Services with Right Time Delivery</p>
  </div>
  <div className="col-lg-4 mr-5">
  <img className="pic" src={servicepic}/>
  </div>
</div>
</div>

{/* ----------------------------our service------------------------ */}
<div id="service">
<div className="container mt-5">

<h3 className="font-weight-bold text-danger mt-5 service">OUR SERVICES</h3>
<p>Trichy Relocation Solution offer unrivalled domestic relocation services as per your specific requirements. We make sure that your household shifting to and from any corner of India is absolutely hassle-free by deploying our distinctive and brilliant moving techniques.</p>
</div>


<div className="row  mt-5">

<div className="col-lg-2"></div>
<div className=" col-lg-3 mx-5 box">
  <div className="card-body">
    <h3 className="card-title font-weight-bold text-danger">Local Domestic Moving</h3>
    <p className="card-text font-weight-bold">Giving up a car or bike that has been</p>

    <p className="card-text font-weight-bold">your Crime-fighting partners on several</p>

    <p className="card-text font-weight-bold">times ise nerver an easy...</p>

    <FontAwesomeIcon icon ={faMapMarkerAlt} className="text-warning float-left iconmap" />  <FontAwesomeIcon icon ={faArrowRightLong} className="text-danger float-right font-weight-bold iconarrow" />

								
    
  </div>
</div>

<div className=" col-lg-3 mx-5 box">
<div className="col-lg-2"></div>
  <div className="card-body">
    <h3 className="card-title font-weight-bold text-danger">Storage Solutions</h3>
    <p className="card-text font-weight-bold">We at Trichy Relocation Solution provide</p>

    <p className="card-text font-weight-bold">our customers with top-notch Storage</p>

    <p className="card-text font-weight-bold">services throughout...</p>

    
    <FontAwesomeIcon icon ={faTruckArrowRight} className="text-warning float-left iconmap" />  <FontAwesomeIcon icon ={faArrowRightLong} className="text-danger float-right font-weight-bold iconarrow" />

								
    
  </div>
</div>



</div>
</div>
{/* -----------------------------Form------------------------ */}

<div className="container  mt-5 position-sticky pb-3 form">

<h1 className="text-light float-left my-5">Get A Free Quote</h1>
<div className="shadow  rounded w-25 mt-5">
<form>
<div>
  <select>
 <option>Move from</option>
 <option>item 1</option>
 <option>item 2</option>
 <option>item 3</option>
  </select>
  <select className="pl-4 ml-3">
  <option>Move to</option>
 <option>item 1</option>
 <option>item 2</option>
 <option>item 3</option>
  </select>
</div>
<div>
  <input type='text' className="name mt-3" placeholder="Your name"/>
  </div>  
  <div>
  <input type='number' className="number mt-3" placeholder="phone number"/>
  </div>
   <div>
    <input type='description' className="des p-5 mt-3"/>
   </div>
  <div className="text-light bg-primary py-3 mt-5 getquote">
    <h4 className="mt-3" getquote>Get a Quote</h4>
  </div>
  <div className="row">



  </div>
</form>

</div>

</div> 








{/* ------------------------------our work------------------- */}


<div className="text-center mt-5">

<h2 className="text-danger font-weight-bold mt-5 service">OUR WORK</h2>

<h5 className="font-weight-bold mt-3">We Create A Honest, Hassle-Free And Quality Moving Experience</h5>

</div>


<div className="position-sticky">

<div class="column icon">
    
    <p> <FontAwesomeIcon icon ={faLightbulb} className="  font-weight-bold iconarroww" /></p>
      <h3>2600+</h3>
      <p>SATISFIED CLIENTS</p>
  
  </div>

  
  <div class="column icon">
    
    <p> <FontAwesomeIcon icon ={faTruckArrowRight} className="  font-weight-bold iconarroww" /></p>
      <h3>11+</h3>
      <p>VEHILES</p>
  
  </div>

  <div class="column icon">
    
    <p> <FontAwesomeIcon icon ={faHatHard} className="  font-weight-bold iconarroww" /></p>
      <h3>100+</h3>
      <p>HARD WORKERS</p>
  
  </div>

  </div>

  {/* <div className="brand-logo">
    <div className="col-lg-10">
		<h2 className="text-danger font-weight-bold service">Our Clients</h2>
		<marquee>

			<div className="image-fluid">
			
      <img className="marqueepic" src={firstpic}/>
      <img className="marqueepic" src={secondpic}/>
      <img className="marqueepic" src={thirdpic}/>
      <img className="marqueepic" src={fourthpic}/>
     
      
     
      

			</div>

      </marquee>
      </div>
	</div> */}


<div className="row w-100 bg-primary text-center">
<div className="col-lg-1"></div>
<div className="container col-lg-4 float-left">
  <img className="mt-5 col-lg-6" src={navlogo}/>
<p className="font-weight-bold text-center text-light">We, Trichy relocation Solution, are a company situated in Tamilnadu that offers moving and packing services. For all of your packing and moving needs, we provide skilled packing and moving services in Tamil Nadu to all over India. We also have locations in Karur, Dindigul, Perambalur and Trichy
</p>

</div>
{/* <div className="col-lg-1"></div>
<div className="container col-lg-4 mt-5 ml-5">
<h3 className="text-dark font-weight-bold col-lg-6 col-12 col-md-8">Quick link</h3>

<ul type="none">
  <li className="text-light font-weight-bold link mr-5 col-lg-4 col-8 col-md-6">Services</li>
  <li className="text-light font-weight-bold link mr-5 col-lg-4 col-8 col-md-6">Payment</li>
  <li className="text-light font-weight-bold link mr-5 col-lg-4 col-8 col-md-6">Gallery</li>
  <li className="text-light font-weight-bold link mr-5 col-lg-4 col-8 col-md-6">Contact Us</li>
</ul>

</div>

<div className=" row">
<div className="col-lg-3"></div>
<div className="col-lg-6  ml-5 pt-5">
<h1><FontAwesomeIcon icon ={faGlobeEurope} className="font-weight-bold" /></h1>
<h1><FontAwesomeIcon icon ={faBookBible} className="font-weight-bold " /></h1>
<h1><FontAwesomeIcon icon ={faCloudMoon} className="font-weight-bold " /></h1>

</div> 
</div>


<div className=" row">
<div className="col-lg-2"></div>
  <div className="col-lg-2 "></div>
  <div className="col-lg-6  text-center">
<h4 className="text-light font-weight-bold  lastfont">Copyright ©2022 All Rights Reserved by Vishwa33.com</h4>
</div>
<div className="col-lg-2 ml-5"></div>
</div>

</div>

<div className="col-lg-3"></div> */}













</div>

</div>

</div>

    );
}
