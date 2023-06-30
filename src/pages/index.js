// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import HeaderHome from '@/common/headerHome'
import Footer from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderHome />
      <main class="main-wrapper">
   <div class="axil-main-slider-area main-slider-style-7 bg_image--8">
      <div class="container-fluid">
         <div class="row  "> 
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src="/assets/images/img/group-friends-having-fun-beach.png" class="d-block w-100" width={1440} height={786}/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="slider-heading">Beauty lies in the glasses of Beholder</h5> 
      </div>
    </div>
    <div class="carousel-item">
      <Image src="/assets/images/img/group-friends-having-fun-beach.png" class="d-block w-100" width={1440} height={786} />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="slider-heading">Second slide label</h5>
      </div>
    </div>
    <div class="carousel-item">
      <Image src="/assets/images/img/group-friends-having-fun-beach.png" class="d-block w-100" width={1440} height={786} />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="slider-heading">Third slide label</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         </div>
      </div>
   </div>
   <div class="axil-poster axil-section-gap  boder-custom">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6 col-12">
               <div class="single-pro-img">
                  <Image src="/assets/images/glass/pro-img-1.png" width={600} height={300} />
               </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
               <div class="single-pro-content">
                  <h6>Eyeaddon Product</h6>
                  <h1>Eyeglasses</h1>
                  <p>At Enek Luso, EyeGlasses are handcrafted by Opticians in New York.We use High-quality materials and innovative designs that provide both function and fashion. They are typically made with lightweight, durable materials such as titanium or Acetate, which allow for comfortable wear and long-lasting use. Our frames feature sleek, stylish designs that are perfect for everyday wear or for making a fashion statement.</p>
                  <a href="#" class="btn custom-btn" >Shop Eyeglasses</a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="axil-poster axil-section-gap  boder-custom">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6 col-12">
               <div class="single-pro-content">
                  <h6>Eyeaddon Product</h6>
                  <h1>Sunglasses</h1>
                  <p>Are we saying Fashion or Protection? Well, our sunglasses are both! They are made with the highest quality materials to give you the style that you deserve and the protection that you need. Look hot, be a Star!</p>
                  <a href="#" class="btn custom-btn" >Shop Sunglasses</a>
               </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
               <div class="single-pro-img float-right">
                  <Image src="/assets/images/glass/pro-img-2.png" width={608} height={300}/>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="axil-poster axil-section-gap">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6 col-12">
               <div class="single-pro-img">
                  <Image src="/assets/images/glass/pro-img-3.png" width={550} height={300}/>
               </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
               <div class="single-pro-content">
                  <h6>Eyeaddon Product</h6>
                  <h1>Reading Glasses</h1>
                  <p>Our top-quality reading glasses feature advanced lens technology, such as anti-reflective coatings and blue light filtering, which can improve visual clarity and reduce eye strain. These glasses are designed to help you see small print and other near objects with ease, and their high-quality lenses ensure that your vision is sharp and distortion-free.</p>
                  <a href="#" class="btn custom-btn" >Reading Glasses</a>
               </div>
            </div>
         </div>
      </div>
   </div>
    <section class=" pb-5">
   <div class="container">
        <div class="col-lg-12 col-12 col-sm-12">
         <div class="every-india-main">
            <h1>Our Featured categories</h1>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-3 col-sm-6 col-12"> 
               <figure class="snip1527">
                 <div class="image">
                  <Image src="/assets/images/glass/card-img-1.png" alt="pr-sample23" width={300} height={404}/></div>
                 <figcaption> 
                   <h3>Designer Outlet</h3>
                   <p>   Get an extra 40% off. </p>
                   <div>
                 <a href="#" class="btn btn-card">Women</a>
                 <a href="#" class="btn btn-card">Shop Men</a> 
                 </div>
                 </figcaption> 
               </figure> 
         </div>
         <div class="col-lg-3 col-sm-6 col-12"> 
               <figure class="snip1527">
                 <div class="image">
                  <Image src="/assets/images/glass/card-img-2.png" alt="pr-sample23" width={300} height={404}/></div>
                 <figcaption> 
                   <h3>NEW Live Try-On</h3>
                   <p> Virtual try-on made easy.</p>
                   <div>
                 <a href="#" class="btn btn-card">Women</a>
                 <a href="#" class="btn btn-card">Men</a> 
                 </div>
                 </figcaption> 
               </figure> 
         </div>
         <div class="col-lg-3 col-sm-6 col-12"> 
               <figure class="snip1527">
                 <div class="image">
                  <Image src="/assets/images/glass/card-img-3.png" alt="pr-sample23" width={300} height={404} /></div>
                 <figcaption> 
                   <h3>Best Sellers</h3>
                   <p>Save up to 50% off.</p>
                   <div>
                 <a href="#" class="btn btn-card">Women</a>
                 <a href="#" class="btn btn-card">Men</a> 
                 </div>
                 </figcaption> 
               </figure> 
         </div>
         <div class="col-lg-3 col-sm-6 col-12"> 
               <figure class="snip1527">
                 <div class="image">
                  <Image src="/assets/images/glass/card-img-4.png" alt="pr-sample23" width={300} height={404}/></div>
                 <figcaption> 
                   <h3>Contact Lenses</h3>
                   <p>Get 25% off all brands.</p>
                   <div>
                 <a href="#" class="btn btn-card">Women</a>
                 <a href="#" class="btn btn-card">Men</a> 
                 </div>
                 </figcaption> 
               </figure> 
         </div>
      </div>
   </div>
</section>
   <section>
      <div class="axil-poster axil-section-gap-1 bg-color-custom">
         <div class="container">
            <div class="top-coll-main-heading">
               <h1>Top Collections</h1>
            </div>
            <div class="row align-items-center">
               <div class="col-lg-3 col-sm-3 col-6">
                  <div class="single-pro-img">
                     <Image src="/assets/images/glass/top-coll-1.png" width={210} height={89}/>
                     <h2>Men Eyeglasses</h2>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-3 col-6">
                  <div class="single-pro-img">
                     <Image src="/assets/images/glass/top-coll-2.png" width={210} height={89}/>
                     <h2>Women Eyeglasses</h2>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-3 col-6">
                  <div class="single-pro-img">
                     <Image src="/assets/images/glass/top-coll-3.png" width={210} height={89}/>
                     <h2>Men Sunglasses</h2>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-3 col-6">
                  <div class="single-pro-img">
                     <Image src="/assets/images/glass/top-coll-4.png" width={210} height={89}/>
                     <h2>Women Sunglasses</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>

  <div class="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--50">
      <div class="container">
          <div class="section-title-wrapper"> 
              <h2 class="title">Most Recommended</h2>
              <p>Take a look at some of the hottest styles out there. Your favorites, Our Favorites! Bet, You’ll like one!</p>
          </div>
          <div class="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow  arrow-top-slide">
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="100" data-sal-duration="1500" src="/assets/images/glass/glass-1.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">10% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Moab</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹30</span>
                              </div>
                          </div>
                          
                          <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="200" data-sal-duration="1500" src="/assets/images/glass/glass-2.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">25% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Saco</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹40</span>
                              </div>
                          </div> 
                          <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="300" data-sal-duration="1500" src="/assets/images/glass/glass-3.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">15% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Reno</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹45</span>
                              </div>
                          </div> 
                          <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="400" data-sal-duration="1500" src="/assets/images/glass/glass-4.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner">
                             
                              <h5 class="title"><a href="product-detail.php">Arizona</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹20</span>
                              </div>
                          </div> 
                           <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="100" data-sal-duration="1500" src="/assets/images/glass/glass-1.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">50% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Moab</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹25</span>
                              </div>
                          </div> 
                           <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="200" data-sal-duration="1500" src="/assets/images/glass/glass-2.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">15% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Saco</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹45</span>
                              </div>
                          </div> 
                           <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="300" data-sal-duration="1500" src="/assets/images/glass/glass-3.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">30% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Reno</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹20</span>
                              </div>
                          </div> 
                           <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="slick-single-layout">
                  <div class="axil-product product-style-two has-color-pick">
                      <div class="thumbnail">
                          <a href="product-detail.php">
                              <Image data-sal="fade" data-sal-delay="400" data-sal-duration="1500" src="/assets/images/glass/glass-4.png" alt="Product Images" width={276} height={185}/>
                          </a>
                          <div class="label-block label-right">
                              <div class="product-badget">50% OFF</div>
                          </div>
                      </div>
                      <div class="product-content">
                          <div class="inner"> 
                              <h5 class="title"><a href="product-detail.php">Arizona</a></h5>
                              <div class="product-price-variant">
                                  <span class="price current-price">₹25</span>
                              </div>
                          </div>  
                          <div class="color-variant-wrapper">
                                  <ul class="color-variant">
                                      <li class="color-extra-01 active"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-02"><span><span class="color"></span></span>
                                      </li>
                                      <li class="color-extra-03"><span><span class="color"></span></span>
                                      </li>
                                  </ul>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
   </section>
   <section>
      <div class="axil-categorie-area bg-barnd axil-section-gapcommon-1">
         <div class="container-fluid">
            <div class="section-title-wrapper brand-main-heading">
               <h2 class="title">Our most popular brands</h2>
            </div>
            <div class="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow  arrow-top-slide">
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="200" data-sal-duration="500">
                     <a href="#">
                        <Image class="img-fluid" src="/assets/images/glass/brand-1.png" alt="product categorie" width={98} height={51}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="300" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-2.png" alt="product categorie" width={113} height={51}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="400" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-3.png" alt="product categorie" width={127} height={51}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="500" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-4.png" alt="product categorie" width={152} height={44}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="600" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-5.png" alt="product categorie" width={152} height={41}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="700" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-6.png" alt="product categorie" width={152} height={41}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="700" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-7.png" alt="product categorie" width={152} height={41}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product" data-sal="zoom-out" data-sal-delay="100" data-sal-duration="500">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-1.png" alt="product categorie" width={98} height={51}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-2.png" alt="product categorie" width={113} height={51}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-3.png" alt="product categorie" width={127} height={51}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-4.png" alt="product categorie" width={152} height={44}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-5.png" alt="product categorie" width={152} height={41}/>
                     </a>
                  </div>
               </div>
               <div class="slick-single-layout">
                  <div class="categrie-product">
                     <a href="#">
                     <Image class="img-fluid" src="/assets/images/glass/brand-6.png" alt="product categorie" width={152} height={41}/>
                     </a>
                  </div>
               </div>
            </div>
            <div class="text-center">
               <a href="#" class="btn custom-btn-2">Shop All</a>
            </div>
         </div>
      </div>
   </section> 
</main> 
<section>
   <div class="container">
      <div class="col-lg-12 col-12 col-sm-12">
         <div class="every-india-main">
            <h1>Eyeaddon For Every Indian</h1>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-6 col-sm-6 col-12">
            <div class="every-india-img">
               <a href="">
               <Image src="/assets/images/glass/eyeaddon-1.png" width={630} height={317}/>
               </a>
            </div>
         </div>
         <div class="col-lg-6 col-sm-6 col-12">
            <div class="every-india-img">
               <a href="">
               <Image src="/assets/images/glass/eyeaddon-2.png" width={630} height={317}/>
               </a>
            </div>
         </div>
         <div class="col-lg-6 col-sm-6 col-12">
            <div class="every-india-img">
               <a href="">
               <Image src="/assets/images/glass/eyeaddon-3.png" width={630} height={317}/>
               </a>
            </div>
         </div>
         <div class="col-lg-6 col-sm-6 col-12">
            <div class="every-india-img">
               <a href="">
               <Image src="/assets/images/glass/eyeaddon-4.png" width={630} height={317}/>
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="discount-bg-image">
   <div class="container">
      <div class="row justify-content-end">
         <div class="col-lg-8 col-sm-8 col-8">
            <div class="discount-banner-content">
               <h1>10% GET 
                  DISCOUNT
               </h1>
               <p>10 % Get Discount</p>
               <a href="#" class="btn btn-discount">Claim now</a>
            </div>
         </div>
      </div>
   </div>
</section>
      <Footer />

    </>
  )
}
