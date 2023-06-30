import React, { Component, Fragment } from "react";
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

class Footer extends Component {
  render() {
    return (
        <footer class = "axil-footer-area footer-style-2">
        <div class="footer-top separator-top">
            <div class="container">
                <div class="row custom-justify">
                    <div class="col-lg-3 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Support</h5> 
                            <div class="inner"> 
                                <ul class="support-list-item-2">
                                    <li><a href="#"><Image
                src="/assets/images/glass/help.png"
                width={20}
                height={20}
              /> Help Center</a></li>
                                    <li><a href="#"><Image src="/assets/images/glass/live-chat.png" width={20}
                height={20} /> Live Chat</a></li>
                                    <li><a href="tel:(+01)850-315-5862"><Image src="/assets/images/glass/call.png"  width={20}
                height={20} />(+01) 850-315-5862 </a></li> 
                                    <li><a href="mailto:example@domain.com"><Image src="/assets/images/glass/mail.png" width={20}
                height={20} />  example@domain.com</a></li>
                                </ul>
                                <div class="social-share">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-discord"></i></a>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Information</h5>
                            <div class="inner">
                                <ul>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/terms-conditions">Terms & Conditions</a></li>
                                    <li><a href="#">Discount Coupons</a></li>
                                    <li><a href="/blog">Blogs</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">My Account</h5>
                            <div class="inner">
                                <ul>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Order History</a></li>
                                    <li><a href="#">Wish List</a></li>
                                    <li><a href="">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="axil-footer-widget">
                            <h5 class="widget-title">Support</h5> 
                            <div class="inner"> 
                                <ul class="support-list-item">
                                    <li><i class="fal fa-map-marker-alt"></i>  Address</li>
                                    <li><a href="mailto:example@domain.com"><i class="fal fa-envelope-open"></i> example@domain.com</a></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="axil-footer-widget-2">
                            <h5 class="widget-title">Services</h5>
                            <div class="inner"> 
                                <ul>
                                    <li><a href="">Free Shipping & Returns</a> </li>
                                    <li><a href="">100% Money Back guarantee</a> </li>
                                    <li><a href="">FSA/HSA Eligible</a> </li>
                                    <li><a href="">Buy now, Pay Later with Eyeaddon</a> </li>
                                    <li><Image src="/assets/images/glass/footer-rating-preview.png" width={230} height={48} /> </li>
                                </ul>
                                <div class="download-btn-group"> 
                                    <div class="app-link">
                                        <a href="#">
                                            <Image src="/assets/images/others/app-store.png" width={123} height={37} alt="App Store" />
                                        </a>
                                        <a href="#">
                                            <Image src="/assets/images/others/play-store.png" width={123} height={36} alt="Play Store" />
                                        </a>
                                    </div>
                                </div>
                                <div class="footer-ptag">
                                    <p>Download Eyeaddon App to buyEyeglasses, Sunglasses and Contact Lenses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
       
    );
  }
}

export default Footer;