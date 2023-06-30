// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function ContactLens() {
  return (
    <>
      <Header />
      <main class="main-wrapper">
   <div class="axil-breadcrumb-area mobile-banner" 
   style={{backgroundImage: "url('/assets/images/glass/contact-lens-banner.png')", width: "100%", backgroundRepeat: "no-repeat", height: "172px", backgroundSize: "contain"}}>
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
   <div class="axil-shop-area axil-section-gap-2 bg-color-white">
      <div class="container-fluid">
         <div class="row">
            
            <div class="col-lg-12">
               <div class="row">
                  <div class="col-lg-6 col-md-8">
                     <div class="inner">
                        <ul class="axil-breadcrumb">
                           <li class="axil-breadcrumb-item"><a href="index.php">HOME</a></li>
                           <li class="separator"></li>
                           <li class="axil-breadcrumb-item active" aria-current="page">Contact-Lenses</li>
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
            </div>
         </div>
      </div>
      <div class="container-fluid">
         <div class="single-pro-content-2">
            <h1>disposability</h1>
         </div>
         <div class="row row--15 row-spacing">
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/lanse-1.png" alt="Product Images" width={167} height={80}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Monthely</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/lanse-2.png" alt="Product Images" width={167} height={80}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Monthely Day and Night</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/lanse-3.png" alt="Product Images" width={167} height={80}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Daily</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/lanse-4.png" alt="Product Images" width={167} height={78}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Color Lenses</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/lanse-5.png" alt="Product Images" width={167} height={80}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Yearly</a></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="axil-shop-area axil-section-gap-2 bg-color-white">
      <div class="container-fluid">
         <div class="single-pro-content-2">
            <h1>COLOR</h1>
         </div>
         <div class="row row--15 row-spacing">
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/color-1.png" alt="Product Images" width={167} height={111}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Aquacolor Premium</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/color-2.png" alt="Product Images" width={167} height={111}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Aquacolor</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/color-3.png" alt="Product Images" width={167} height={111}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Freshlook</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/color-4.png" alt="Product Images" width={167} height={111}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Clalen</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/color-5.png" alt="Product Images" width={167} height={111}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Color with no Power</a></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="axil-shop-area axil-section-gap-2 bg-color-white">
      <div class="container-fluid">
         <div class="single-pro-content-2">
            <h1>POWER</h1>
         </div>
         <div class="row row--15 row-spacing">
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/power-1.png" alt="Product Images" width={167} height={84}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">[-] SPH Power (CYL)</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/power-2.png" alt="Product Images" width={167} height={84}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">[+] SPH Power (CYL)</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/power-3.png" alt="Product Images" width={167} height={84}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">CYL Power </a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/power-4.png" alt="Product Images" width={167} height={80}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Toric Power</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/power-5.png" alt="Product Images" width={167} height={84}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">[-] SPH Power (CYL)</a></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="axil-shop-area axil-section-gap-2 bg-color-white">
      <div class="container-fluid">
         <div class="single-pro-content-2">
            <h1>LENS SOLUTION</h1>
         </div>
         <div class="row row--15 row-spacing">
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/solution-1.png" alt="Product Images" width={167} height={167}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Aqualenses Comfort</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/solution-2.png" alt="Product Images" width={167} height={167}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Bio True</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/solution-3.png" alt="Product Images" width={167} height={167}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Renu Fresh</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/solution-4.png" alt="Product Images" width={167} height={167}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Opti-Free-Replenish</a></h5>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-sm-8 col-md-6 col-6">
               <div class="axil-product product-style-one mb--30 box-design">
                  <div class="thumbnail-2">
                     <a href="#">
                     <Image src="/assets/images/glass/lenses/solution-2.png" alt="Product Images" width={167} height={167}/>
                     </a> 
                  </div>
                  <div class="product-content-2">
                     <div class="inner">
                        <h5 class="title"><a href="#">Renu Fresh </a></h5>
                     </div>
                  </div>
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
