// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function ProductDetail() {
  return (
    <>
      <Header />
      <main class="main-wrapper">
        <div class="axil-single-product-area axil-section-gap pb--0 bg-color-white">
            <div class="single-product-thumb ">
                <div class="container">
                    <div class="row"  style={{align: "rebaselined"}}>
                        <div class="col-lg-7 mb--40">
                            <div class="row align-items-center">
                                <div class="col-lg-10 order-lg-2">
                                    <div class="single-product-thumbnail-wrap zoom-gallery">
                                        <div class="single-product-thumbnail product-large-thumbnail-3 axil-product">
                                            <div class="thumbnail">
                                                <a href="assets/images/glass/frame-1.png" class="popup-zoom">
                                                    <Image src="/assets/images/glass/frame-1.png" alt="Product Images" width={612} height={246}/>
                                                </a>
                                            </div>
                                            <div class="thumbnail">
                                                <a href="assets/images/glass/frame-2.png" class="popup-zoom">
                                                    <Image src="/assets/images/glass/frame-2.png" alt="Product Images" width={1200} height={365}/>
                                                </a>
                                            </div>
                                            <div class="thumbnail">
                                                <a href="assets/images/glass/frame-3.png" class="popup-zoom">
                                                    <Image src="/assets/images/glass/frame-3.png" alt="Product Images" width={1200} height={404}/>
                                                </a>
                                            </div>
                                            <div class="thumbnail">
                                                <a href="assets/images/glass/frame-4.png" class="popup-zoom">
                                                    <Image src="/assets/images/glass/frame-4.png" alt="Product Images" width={612} height={219}/>
                                                </a>
                                            </div>
                                            <div class="thumbnail">
                                                <a href="assets/images/glass/frame-5.png" class="popup-zoom">
                                                    <Image src="/assets/images/glass/frame-5.png" alt="Product Images" width={612} height={246}/>
                                                </a>
                                            </div>
                                        </div>
                                         
                                        <div class="product-quick-view position-view">
                                            <a href="assets/images/glass/frame-1.png" class="popup-zoom">
                                                <i class="far fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 order-lg-1">
                                    <div class="product-small-thumb-3 small-thumb-wrapper">
                                        <div class="small-thumb-img">
                                            <Image src="/assets/images/glass/frame-1.png" alt="thumb image" width={66} height={27}/>  
                                        </div>
                                        <div class="small-thumb-img">
                                            <Image src="/assets/images/glass/frame-2.png" alt="thumb image" width={66} height={20}/>
                                        </div>
                                        <div class="small-thumb-img">
                                            <Image src="/assets/images/glass/frame-3.png" alt="thumb image" width={66} height={22}/>
                                        </div>
                                        <div class="small-thumb-img">
                                            <Image src="/assets/images/glass/frame-4.png" alt="thumb image" width={66} height={24}/>
                                        </div>
                                        <div class="small-thumb-img">
                                            <Image src="/assets/images/glass/frame-5.png" alt="thumb image" width={66} height={27}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="single-product-content">
                                <div class="inner">
                                    <h2 class="product-title">Gun Full Rim Hexagonal Eyeglasses</h2>
                                    <span class="price-amount">₹155.00 - ₹255.00</span>
                                    <div class="product-rating">
                                        <div class="star-rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <div class="review-link">
                                            <a href="#">(<span>2</span> customer reviews)</a>
                                        </div>
                                    </div>
                                    <ul class="product-meta">
                                        <li><i class="fal fa-check"></i>In stock</li>
                                        <li><i class="fal fa-check"></i>Free delivery available</li>
                                        <li><i class="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>
                                    </ul> 
                                    <div class="product-action-wrapper d-flex-center">
                                        <ul class="product-action d-flex-center mb--0">
                                            <li class="add-to-cart"><a href="cart.html" class="axil-btn btn-bg-primary">
                                                <Image src="/assets/images/glass/frame-logo.png" width={27} height={12}/> Add to Cart</a></li>
                                            
                                        </ul>
                                         <ul class="pro-des-features">
                                            <li class="single-features">
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/Best-In-Class.png" alt="icon" width={45} height={45}/>
                                                </div>
                                               Best-In-Class Lenses
                                            </li>
                                            <li class="single-features">
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/MadeinIndia.png" alt="icon" width={45} height={45}/>
                                                </div>
                                                Made in India
                                            </li>
                                            <li class="single-features">
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/1YearProduct.png" alt="icon" width={45} height={45}/>
                                                </div>
                                                1 Year Product1 Warranty
                                            </li>
                                             <li class="single-features">
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/7daysReturn.png" alt="icon" width={45} height={45}/>
                                                </div>
                                               7 Days Return  Policy
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="woocommerce-tabs wc-tabs-wrapper">
                <div class="container">
                    <ul class="nav tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                        </li>
                        <li class="nav-item " role="presentation">
                            <a id="additional-info-tab" data-bs-toggle="tab" href="#additional-info" role="tab" aria-controls="additional-info" aria-selected="false">Details</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                            <div class="product-desc-wrapper"> 
                                <div class="row">
                                    <div class="col-lg-7 col-12">
                                        <div class="single-desc"> 
                                            <Image src="/assets/images/glass/dis-img-1.png" width={171} height={171}/>
                                            <p>“Wide range of glasses,u can get cool and funky sunglasses, formal specs,and many more. This website delivers and not disappointing.”</p>
                                        </div>
                                    </div> 
                                    <div class="col-lg-7 col-12">
                                        <div class="single-desc-1"> 
                                            <p>“Wide range of glasses,u can get cool and funky sunglasses, formal specs,and many more. This website delivers and not disappointing.”</p>
                                            <Image src="/assets/images/glass/dis-img-2.png" width={166} height={166}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-12">
                                        <div class="single-desc"> 
                                            <Image src="/assets/images/glass/dis-img-3.png" width={176} height={176}/>
                                            <p>“Wide range of glasses,u can get cool and funky sunglasses, formal specs,and many more. This website delivers and not disappointing.”</p>
                                        </div>
                                    </div> 
                                    <div class="col-lg-7 col-12">
                                        <div class="single-desc-1"> 
                                            <p>“Wide range of glasses,u can get cool and funky sunglasses, formal specs,and many more. This website delivers and not disappointing.”</p>
                                            <Image src="/assets/images/glass/dis-img-4.png" width={180} height={180}/>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="additional-info" role="tabpanel" aria-labelledby="additional-info-tab">
                            <div class="row align-items-center">
                                <div class="col-lg-5 col-md-8">
                                    <div class="product-additional-info">
                                <div class="table-responsive">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Frame Rim type</th>
                                                <td>Full Rim</td>
                                            </tr>
                                            <tr class="tr-custom-color">
                                                <th>Frame Shape </th>
                                                <td>Hexagon</td>
                                            </tr>
                                            <tr>
                                                <th>Frame Material</th>
                                                <td>Metal</td>
                                            </tr>
                                            <tr class="tr-custom-color">
                                                <th>Frame Width</th>
                                                <td>135 MM</td>
                                            </tr>
                                            <tr>
                                                <th>Frame Lens Width </th>
                                                <td>51 MM</td>
                                            </tr>
                                            <tr class="tr-custom-color">
                                                <th>Frame Bridge</th>
                                                <td>18 MM</td>
                                            </tr>
                                            <tr>
                                                <th>Frame Length</th>
                                                <td>138 MM</td>
                                            </tr>
                                            <tr class="tr-custom-color">
                                                <th>Frame Lens Height</th>
                                                <td>40 MM</td>
                                            </tr>
                                            <tr>
                                                <th>Frame Weight</th>
                                                <td>19.69 gms</td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                                </div>
                                <div class="col-lg-6 col-md-8">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="glasses-detail">
                                                <h5>FRAME WIDTH</h5>
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/detail-img-1.png" alt="icon" width={140} height={51}/>
                                                </div>                                    
                                            </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                            <div class="glasses-detail">
                                                <h5>LENS HEIGHT</h5>
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/detail-img-2.png" alt="icon" width={136} height={51}/>
                                                </div>                                    
                                            </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                            <div class="glasses-detail">
                                                <h5>BRIDGE</h5>
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/detail-img-3.png" alt="icon" width={138} height={50}/>
                                                </div>                                    
                                            </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                            <div class="glasses-detail">
                                                <h5>TEMPLE ARMS</h5>
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/detail-img-4.png" alt="icon" width={148} height={51}/>
                                                </div>                                    
                                            </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                            <div class="glasses-detail">
                                                <h5>LENS WIDTH</h5>
                                                <div class="icon">
                                                    <Image src="/assets/images/glass/detail-img-5.png" alt="icon" width={151} height={48}/>
                                                </div>                                    
                                            </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>  
                        <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div class="reviews-wrapper">
                                <div class="row">
                                    <div class="col-lg-6 mb--40">
                                        <div class="axil-comment-area pro-desc-commnet-area">
                                            <h5 class="title">01 Review for this product</h5>
                                            <ul class="comment-list">
                                                <li class="comment">
                                                    <div class="comment-body">
                                                        <div class="single-comment">
                                                            <div class="comment-img">
                                                                <Image src="/assets/images/blog/author-image-4.png" alt="Author Images" width={60} height={60}/>
                                                            </div>
                                                            <div class="comment-inner">
                                                                <h6 class="commenter">
                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                        <span class="hover-flip-item">
                                                                            <span data-text="Cameron Williamson">Eleanor Pena</span>
                                                                        </span>
                                                                    </a>
                                                                    <span class="commenter-rating ratiing-four-star">
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star empty-rating"></i></a>
                                                                    </span>
                                                                </h6>
                                                                <div class="comment-text">
                                                                    <p>Weve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ” </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="comment">
                                                    <div class="comment-body">
                                                        <div class="single-comment">
                                                            <div class="comment-img">
                                                                <Image src="/assets/images/blog/author-image-4.png" alt="Author Images" width={60} height={60}/>
                                                            </div>
                                                            <div class="comment-inner">
                                                                <h6 class="commenter">
                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                        <span class="hover-flip-item">
                                                                            <span data-text="Rahabi Khan">Courtney Henry</span>
                                                                        </span>
                                                                    </a>
                                                                    <span class="commenter-rating ratiing-four-star">
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                    </span>
                                                                </h6>
                                                                <div class="comment-text">
                                                                    <p>“Weve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="comment">
                                                    <div class="comment-body">
                                                        <div class="single-comment">
                                                            <div class="comment-img">
                                                                <Image src="/assets/images/blog/author-image-5.png" alt="Author Images" width={60} height={60}/>
                                                            </div>
                                                            <div class="comment-inner">
                                                                <h6 class="commenter">
                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                        <span class="hover-flip-item">
                                                                            <span data-text="Rahabi Khan">Devon Lane</span>
                                                                        </span>
                                                                    </a>
                                                                    <span class="commenter-rating ratiing-four-star">
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                        <a href="#"><i class="fas fa-star"></i></a>
                                                                    </span>
                                                                </h6>
                                                                <div class="comment-text">
                                                                    <p>“Weve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ” </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb--40">
                                        <div class="comment-respond pro-des-commend-respond mt--0">
                                            <h5 class="title mb--30">Add a Review</h5>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <div class="rating-wrapper d-flex-center mb--40">
                                                Your Rating <span class="require">*</span>
                                                <div class="reating-inner ml--20">
                                                    <a href="#"><i class="fal fa-star"></i></a>
                                                    <a href="#"><i class="fal fa-star"></i></a>
                                                    <a href="#"><i class="fal fa-star"></i></a>
                                                    <a href="#"><i class="fal fa-star"></i></a>
                                                    <a href="#"><i class="fal fa-star"></i></a>
                                                </div>
                                            </div>

                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Other Notes (optional)</label>
                                                            <textarea name="message" placeholder="Your Comment"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <div class="form-group">
                                                            <label>Name <span class="require">*</span></label>
                                                            <input id="name" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-12">
                                                        <div class="form-group">
                                                            <label>Email <span class="require">*</span> </label>
                                                            <input id="email" type="email"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-submit">
                                                            <button type="submit" id="submit" class="axil-btn btn-bg-primary w-auto">Submit Comment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <section>

  <div class="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--50">
      <div class="container">
         <div class="every-india-main">
            <h1>SIMILAR PRODUCTS</h1>
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
    </main>
 
      <Foot />

    </>
  )
}
