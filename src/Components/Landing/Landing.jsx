import React from 'react'
import vegetable from '../Assets/vegetable.png'
import meat from '../Assets/meat.png'
import cupcake from '../Assets/cupcake.png'
import cheese from '../Assets/cheese.png'
import recipe from '../Assets/recipeimg.jpg'
import recipe1 from '../Assets/today-recipe1.jpg'
import recipe2 from '../Assets/today-recipe2.jpg'
import recipe3 from '../Assets/today-recipe3.jpg'
import recipe4 from '../Assets/today-recipe4.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing">
    <div className='landingpage'>
     <div class="container">
        <div class="row align-items-center p-0 m-0">
        <div class="col-4">
            <div class="slider-txt mt-5"><span class="text-theme font-weight-semibold fs-20 mb-3 d-block text-capitalize"> The Perfect Choice</span><h2 class="mb-2">Chicken and Mushroom</h2><p>Fresh, organic ingredients. Carefully prepared.</p>
            <Link to='./Booktable' className="booktable p-2" >Book a Table</Link></div></div></div></div>

    </div>
    <div className="row m-0 p-0 px-3 py-3">
        <div className="col-3 d-flex flex-column itemssection  justify-content-center align-items-center">
            <img src={meat} alt='' className='iconsize'/>
            <p className='textcolor'>Meat</p>
        </div>
        <div className="col-3 d-flex flex-column itemssection  justify-content-center align-items-center">
            <img src={cupcake} alt=''className='iconsize'/>
            <p className='textcolor'>Bakery</p>
        </div>
        <div className="col-3 d-flex flex-column itemssection  justify-content-center align-items-center">
            <img src={vegetable} alt='' className='iconsize'/>
            <p className='textcolor'>Meat</p>
        </div>
        <div className="col-3 d-flex flex-column itemssection  justify-content-center align-items-center">
            <img src={cheese} alt=''  className='iconsize'/>
            <p className='textcolor'>Meat</p>
        </div>
       
    </div>
    <div className="section py-3">
    <div class="sec-space"><div class="container"><div class="row align-items-center"><div class="col-lg-6"><div class="sing-recipe-img wow fadeInLeft" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s'}}><img class="img-fluid" src={recipe} alt=""/></div></div><div class="col-lg-6"><div class="sing-recipe-content"><div class="single-rec-desc"><h2 class="mb-3">Chicken Kebabs with Roasted Red Onions.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ratione optio nulla illum, eius dolor maiores Lorem ipsum dolor sit amEa ratione optio nullaius dolor maiores et, cnulla illum, eius dolor maiores Lorem ipsumonsectetur adipisicing elit. </p><button class="submitbtn p-3">Learn More</button></div></div></div></div></div></div>
    </div>
    <div className="swiper container">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
     <div class="testy"><figure class="mb-4"><img src={recipe1} alt="Sliderimg"/></figure><div class="recipe-info position-relative"><h2 class="fs-22"><a href="recipe-detail.html">Sesame Honey Roasted</a></h2><span class="fs-14 text-theme text-uppercase">By Gino D'Acampo</span>
     <br /><a class="maincourse text-uppercase" href="recipe-detail.html" title="">Main Course<i class="fa fa-angle-right"></i></a></div><ul class="recipe-cokng-info p-0 list-unstyled"><li class="fs-16 text-gray">Preparation time: <strong>30 mins</strong></li><li class="fs-16 text-gray">Cooking time: <strong>10 to 30 mins</strong></li><li class="fs-16 text-gray">Serves: <strong>4 Persons</strong></li></ul></div>
        </SwiperSlide>
        <SwiperSlide><div class="testy"><figure class="mb-4"><img src={recipe2} alt="Sliderimg"/></figure><div class="recipe-info position-relative"><h2 class="fs-22"><a href="recipe-detail.html">Chicken Reshmi Kabab</a></h2><span class="fs-14 text-theme text-uppercase">By Addison</span><br /><a class=" text-uppercase maincourse" href="recipe-detail.html" title="">Main Course<i class="fa fa-angle-right"></i></a></div><ul class="recipe-cokng-info p-0 list-unstyled"><li class="fs-16 text-gray">Preparation time: <strong>30 mins</strong></li><li class="fs-16 text-gray">Cooking time: <strong>10 to 30 mins</strong></li><li class="fs-16 text-gray">Serves: <strong>4 Persons</strong></li></ul></div></SwiperSlide>
        <SwiperSlide><div class="testy"><figure class="mb-4"><img src={recipe3} alt="Sliderimg"/></figure><div class="recipe-info position-relative"><h2 class="fs-22"><a href="recipe-detail.html">Chicken Reshmi Kabab</a></h2><span class="fs-14 text-theme text-uppercase">By Addison</span> <br /><a class="maincourse text-uppercase" href="recipe-detail.html" title="">Main Course<i class="fa fa-angle-right"></i></a></div><ul class="recipe-cokng-info p-0 list-unstyled"><li class="fs-16 text-gray">Preparation time: <strong>30 mins</strong></li><li class="fs-16 text-gray">Cooking time: <strong>10 to 30 mins</strong></li><li class="fs-16 text-gray">Serves: <strong>4 Persons</strong></li></ul></div></SwiperSlide>
        <SwiperSlide><div class="testy"><figure class="mb-4"><img src={recipe4} alt="Sliderimg"/></figure><div class="recipe-info position-relative"><h2 class="fs-22"><a href="recipe-detail.html">Chicken Reshmi Kabab</a></h2><span class="fs-14 text-theme text-uppercase">By Addison</span>
        <br /><a class="maincourse text-uppercase" href="recipe-detail.html" title="">Main Course<i class="fa fa-angle-right"></i></a></div><ul class="recipe-cokng-info p-0 list-unstyled"><li class="fs-16 text-gray">Preparation time: <strong>30 mins</strong></li><li class="fs-16 text-gray">Cooking time: <strong>10 to 30 mins</strong></li><li class="fs-16 text-gray">Serves: <strong>4 Persons</strong></li></ul></div></SwiperSlide>
        
      </Swiper>
    </div>
    </div>
  )
}

export default Landing
