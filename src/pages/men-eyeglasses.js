// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function MenEyeglasses() {
  return (
    <>
      <Header />
      <main class="main-wrapper">
   <div class="axil-breadcrumb-area tablate-size" style={{backgroundImage: "url('/assets/images/glass/eyeglass-banner.png')", width: "100%", height: "235px"}}>
      <div class="container-fluid">
         <div class="row align-items-center">
            <div class="col-lg-12 col-md-8">
               <div class="inner">
                  <div class="bradcrumb-thumb"> 
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="axil-shop-area axil-section-gap bg-color-white">
      <div class="container-fluid">
         <div class="row">
            <div class="col-lg-3">
               <div class="axil-shop-sidebar">
                  <div class="d-lg-none">
                     <button class="sidebar-close filter-close-btn"><i class="fas fa-times"></i></button>
                  </div>
                  <div class="toggle-list product-categories active">
                     <h6 class="title">FRAME MATERIAL</h6>
                     <div class="shop-submenu">
                        <ul>
                           <li class="current-cat"><a href="#">Plastic</a></li>
                           <li><a href="#">Titanium</a></li>
                           <li><a href="#">Acetate</a></li>
                           <li><a href="#">TR-90</a></li>
                           <li><a href="#">Metal</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="toggle-list product-categories product-gender active">
                     <h6 class="title">FRAME SIZE</h6>
                     <div class="shop-submenu">
                        <ul>
                           <li class="chosen"><a href="#">XS</a></li>
                           <li><a href="#">S</a></li>
                           <li><a href="#">M</a></li>
                           <li><a href="#">L</a></li>
                           <li><a href="#">XL</a></li>
                           <li><a href="#">XXl</a></li>
                           <li><a href="#">3Xl</a></li>
                           <li><a href="#">4Xl</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="toggle-list product-categories product-gender active">
                     <h6 class="title">FRAME GENDER</h6>
                     <div class="shop-submenu">
                        <ul>
                           <li class="chosen"><a href="#">Men (40)</a></li>
                           <li><a href="#">Women (56)</a></li>
                           <li><a href="#">Unisex (18)</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="toggle-list product-categories active">
                     <h6 class="title">FRAME RIM TYPE</h6>
                     <div class="shop-submenu">
                        <ul>
                           <li class="current-cat"><a href="#">Plastic</a></li>
                           <li><a href="#">Titanium</a></li>
                           <li><a href="#">Acetate</a></li>
                           <li><a href="#">TR-90</a></li>
                           <li><a href="#">Metal</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="toggle-list product-color active">
                     <h6 class="title">FRAME COLOR</h6>
                     <div class="shop-submenu">
                        <ul>
                           <li class="chosen"><a href="#" class="color-extra-01"></a></li>
                           <li><a href="#" class="color-extra-02"></a></li>
                           <li><a href="#" class="color-extra-03"></a></li>
                           <li><a href="#" class="color-extra-04"></a></li>
                           <li><a href="#" class="color-extra-05"></a></li>
                           <li><a href="#" class="color-extra-06"></a></li>
                           <li><a href="#" class="color-extra-07"></a></li>
                           <li><a href="#" class="color-extra-08"></a></li>
                           <li><a href="#" class="color-extra-09"></a></li>
                           <li><a href="#" class="color-extra-10"></a></li>
                           <li><a href="#" class="color-extra-11"></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-9">
               <div class="row">
                  <div class="col-lg-6 col-md-8">
                     <div class="inner">
                        <ul class="axil-breadcrumb">
                           <li class="axil-breadcrumb-item"><a href="index.php">HOME</a></li>
                           <li class="separator"></li>
                           <li class="axil-breadcrumb-item active" aria-current="page">Eyeglasses</li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="axil-shop-top mb--40">
                        <div class="category-select align-items-center justify-content-lg-end justify-content-between">
                           <select class="single-select">
                              <option>Short by Latest</option>
                              <option>Short by Oldest</option>
                              <option>Short by Name</option>
                              <option>Short by Price</option>
                           </select>
                        </div>
                        <div class="d-lg-none">
                           <button class="product-filter-mobile filter-toggle"><i class="fas fa-filter"></i> FILTER</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row row--15">
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-1.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">10% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹30</span>
                                 <span class="price old-price">₹30</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-2.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-3.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">25% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹45</span>
                                 <span class="price old-price">₹60</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-4.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">5% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹50</span>
                                 <span class="price old-price">₹60</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-5.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹38</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-6.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">5% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹25</span>
                                 <span class="price old-price">₹40</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-7.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">15% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹15</span>
                                 <span class="price old-price">₹20</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-8.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹60</span>
                                 <span class="price old-price">₹80</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-9.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-10.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-11.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-12.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="/product-detail">
                           <Image src="/assets/images/frame/frame-13.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="/wishlist"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="/cart">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="/product-detail">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <Image src="/assets/images/frame/frame-14.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <Image src="/assets/images/frame/frame-15.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <Image src="/assets/images/frame/frame-16.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <Image src="/assets/images/frame/frame-17.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <Image src="/assets/images/frame/frame-18.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <image src="/assets/images/frame/frame-19.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-sm-6 col-6">
                     <div class="axil-product product-style-one mb--30 box-design">
                        <div class="thumbnail-2">
                           <a href="product-detail.php">
                           <image src="/assets/images/frame/frame-20.png" alt="Product Images" width={191} height={114}/>
                           </a>
                           <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                           </div>
                           <div class="product-hover-action">
                              <ul class="cart-action">
                                 <li class="wishlist"><a href="wishlist.php"><i class="far fa-heart"></i></a></li>
                                 <li class="select-option"><a href="cart.php">Add to Cart</a></li>
                                 <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-content-2">
                           <div class="inner">
                              <h5 class="title"><a href="product-detail.php">Gun Full Rim Hexagonal Eyeglasses</a></h5>
                              <div class="product-price-variant">
                                 <span class="price current-price">₹40</span>
                                 <span class="price old-price">₹50</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="text-center pt--20">
                  <a href="#" class="axil-btn btn-bg-lighter btn-load-more">Load more</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</main>
      <Foot />

    </>
  )
}
