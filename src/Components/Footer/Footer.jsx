import React from 'react'
import {BiCurrentLocation,BiPhoneCall} from 'react-icons/bi'
import {MdOutlineMail} from 'react-icons/md'
function Footer() {
  return (
    <div>
            <footer class="footer footer-bg-dark p-2 pb-0 p-lg-3 my-2 ">
                <div class="container">
                    <div class="row mb-5 p-0 m-0">
                        <div class="col-md-3 col-12">
                            <div class="footer-widget mb-4">
                                <h2 class="footer-heading">Mazaa</h2>
                                <p className='footertext'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                               
                            </div>
                        </div>
                        <div class="col-md-2 col-12">
                            <div class="footer-widget mb-4">
                                <h2 class="footer-heading">Recipies</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#sdf" class="pb-1 d-block">Meats</a></li>
                                    <li><a href="#af" class="pb-1 d-block">Bakery</a></li>
                                    <li><a href="#af" class="pb-1 d-block">Cheese</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-12">
                            <div class="footer-widget mb-4 ml-md-4">
                                <h2 class="footer-heading">Account</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#fsd" class="pb-1 d-block">My Account</a></li>
                                    <li><a href="#sdf" class="pb-1 d-block">Sign In</a></li>
                                    <li><a href="#sdf" class="pb-1 d-block">Create Account</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-12">
                            <div class="footer-widget mb-4">
                                <h2 class="footer-heading">Have a Questions?</h2>
                                <div class="block-23 mb-3">
                                    <ul className='p-0'>
                                        <li className='d-flex'><BiCurrentLocation className='fs-3 mx-2'/><p class="text">California, USA</p></li>
                                        <li className='d-flex'><BiPhoneCall className='fs-4 mx-2'/><p class="text">+2 392 3929 210</p></li>
                                        <li className='d-flex'>
                                            <MdOutlineMail className='fs-4 mx-2'/>
                                            <p class="text">info@yourdomain.com</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0 p-0">
                        <div class="col-md-12 text-center">
                          <p>Copyright © 2023 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default Footer
