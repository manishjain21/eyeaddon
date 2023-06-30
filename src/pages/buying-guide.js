// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function BuyingGuide() {
  return (
    <>
      <Header />
      <main class="main-wrapper">
   <div class="axil-main-slider-area">
      <div class="container-fluid no-padding">
         <div class="row align-items-center">
            <div class="col-sm-12 col-lg-12 col-md-12 no-padding">
               <div class="buying-main-banner">
                  <Image src="/assets/images/glass/buying-banner.png"  width={1410} height={630}/> 
               </div>
            </div>
         </div>
      </div>
   </div>
   <section class="buying-bg-color">
      <div class="axil-main-slider-area">
         <div class="container-fluid no-padding">
            <div class="row align-items-center">
               <div class="col-sm-12 col-lg-12 col-md-12 no-padding">
                  <div class="buying-main-banner-1">
                     <Image src="/assets/images/glass/buying-banner-2.png"  width={1410} height={162}/> 
                  </div>
                  <div class="buying-guide-main-heading">
                     <h1>WAYS TO READ YOUR EYE PRESCRIPTION CORRECTLY</h1>
                     <p>An eye prescription holds the readings that your optometrist records each time you go for an eye test. These numbers on the prescription slip/card are the key to your correct power. Whenever you wish to buy power eyeglasses/sunglasses, these values come in handy. It might look tricky at first, but there’s an easy way to decode these abbreviated terms & set of +/- readings.</p>
                  </div>
                  <ul class="buying-ul">
                     Let’s start with the basics -
                     <li>+ indicates long-sightedness or Hyperopia</li>
                     <li>- indicates correct near-sightedness or Myopia</li>
                     <li>RE/ O.D. stands for Oculus Dexter or Right Eye</li>
                     <li>LE/ O.S. stands for Oculus Sinister or Left Eye</li>
                     <li>PD is Pupillary Distance</li>
                     <li>DV stands for Distance Vision</li>
                     <li>NV stands for Near Vision</li>
                  </ul>
               </div>
            </div>
            <div class="col-sm-12 col-lg-12 col-md-12 no-padding">
               <div class="buying-guide-main-heading-1">
                  <h1>Let’s go ahead and know in detail what do the other <br/> terms in your eye prescription mean:</h1>
               </div>
            </div>
            <div class="row align-items-center">
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-content">
                     <h3>Sphere (SPH)</h3>
                     <p>SPH or Sphere is the power of the lens required to correct a single vision defect. This denotes if a person has myopia or hyperopia. It is measured in Diopters (D). The values can be different for both the eyes.</p>
                     <ul class="buying-ul">
                        <li>Corrects Myopia & Hyperopia</li>
                        <li>Ranges from 0.00 to +/- 20.00 D</li>
                        <li>Higher prescription means high degree myopia/hyperopia</li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-img">
                     <Image src="/assets/images/glass/buying-pro-1.png" width={558} height={156}/>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-img">
                     <Image src="/assets/images/glass/buying-pro-2.png" width={558} height={156}/>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-content-2">
                     <h3>Cylinder (CYL)</h3>
                     <p>CYL or Cylinder power indicates that the cornea of the eye is not perfectly sphere in shape. If you have some numbers in your CYL grid of your prescription, you will require eyeglasses to correct astigmatism.</p>
                     <ul class="buying-ul">
                        <li>Corrects Astigmatism</li>
                        <li>Ranges from 0.00 to +/- 4.00 D</li>
                        <li>Higher prescription means high degree astigmatism</li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-content">
                     <h3>Axis</h3>
                     <p>Axis reflects the exact orientation of your astigmatism. It is measured in Degrees. If your prescription has a CYL value, it is sure to have an axis value too. If your prescription holds a CYL value and no axis or vice versa, it means your prescription is either incomplete or incorrect.</p>
                     <ul class="buying-ul">
                        <li>Indicates degree/direction of astigmatism</li>
                        <li>Ranges from 0.00 to +/- 20.00 D</li>
                        <li>Higher prescription means high degree myopia/hyperopia</li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-img">
                     <Image src="/assets/images/glass/buying-pro-3.png" width={690} height={277}/>
                  </div>
               </div>
               <div class="col-lg-12 col-sm-12 col-12">
                  <div class="buing-prodect-content">
                     <h3>ADD (Addition)</h3>
                     <p>Add or Near Addition power is added on the lower part of the multifocal/bifocal lenses to correct presbyopia. This helps one in performing close-up tasks with ease.</p>
                     <ul class="buying-ul">
                        <li>Indicates the additional reading power</li>
                        <li>Used in bifocals, progressives and reading glasses</li>
                        <li>Added at the bottom half of the lens for people with presbyopia</li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-content">
                     <h3>Pupillary Distance (PD)</h3>
                     <p>Pupillary distance is an important measurement from the center of one eye to the center of another. This is used to mark the exact optical center in your lenses which further helps to view things properly and without any eye strain.</p>
                     <ul class="buying-ul">
                        <li>Indicates the additional reading power</li>
                        <li>Used in bifocals, progressives and reading glasses</li>
                        <li>Added at the bottom half of the lens for people with presbyopia</li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-6 col-12">
                  <div class="buing-prodect-img">
                     <Image src="/assets/images/glass/buying-pro-4.png" width={623} height={207}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="">
      <div class="axil-main-slider-area">
         <h1 class="frame-size-heading">TRY ON</h1>
         <div class="container-fluid buying-bg-color ">
            <div class="row align-items-center">
               <div class="col-lg-5 col-sm-5 col-12">
                  <div class="frame-size-main">
                     <h2>FRAME SIZES</h2>
                     <p>Eyeglass frames are broadly divided into 3 size categories- Small, Medium & Large. To determine what fits you, either keep your prescriptions handy or look on the insides your old frame temples for the exact numeric size specifications.</p>
                     <p class="text-center">Frame size is a combination of numeric values usually represented in sets e.g. 53-18-140 known as the eye size, bridge size & temple size respectively.</p>
                  </div>
               </div>
               <div class="col-lg-7 col-sm-7 col-12">
                  <div class="frame-size-main-img">
                     <Image src="/assets/images/glass/frame-size.png" width={692} height={283}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="mt-5">
      <div class="axil-main-slider-area">
         <div class="container-fluid buying-bg-color ">
            <div class="row align-items-center">
               <div class="col-lg-6 col-sm-6 col-12 no-padd">
                  <div class="frame-size-main-img-1">
                     <Image src="/assets/images/glass/frame-components.png" width={720} height={667}/>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6 col-12">
                  <div class="frame-size-main-1">
                     <h2>FRAME <br/> COMPONENTS</h2>
                     <  p>Knowing your frame specifications is very important. Any eyeglass frame consists of 3 major parts in its construction namely frame front, temples and lenses. Some other components of an eyeglass are rim, nose-bridge, nose pads, hinges and temple tips.</p>
                  </div>
               </div>
            </div>
            <div class="row padd-bottom">
               <div class="col-lg-4 col-md-4 col-12">
                  <div class="frame-components-content">
                     <Image src="/assets/images/glass/frame-com-1.png" width={161} height={52}/>
                     <h5>FRAME FRONT</h5>
                     <p>Also known as chassis or the base, a frame front is the largest part of an eyewear. It is made with different materials and combinations like Acetate, TR 90, Titanium, Wood, Nylon etc.</p>
                  </div>
               </div>
               <div class="col-lg-4 col-md-4 col-12">
                  <div class="frame-components-content">
                     <Image src="/assets/images/glass/frame-com-2.png" width={68} height={50}/>
                     <h5>FRAME FRONT</h5>
                     <p>Lenses are usually made with glass, plastic, or polycarbonate and are fitted into the frame. These may come with coatings like the anti-reflective coating to reduce eye strain or prevent Sun-glare.</p>
                  </div>
               </div>
               <div class="col-lg-4 col-md-4 col-12">
                  <div class="frame-components-content">
                     <Image src="/assets/images/glass/frame-com-3.png" width={119} height={33}/>
                     <h5>FRAME FRONT</h5>
                     <p>Lenses are usually made with glass, plastic, or polycarbonate and are fitted into the frame. These may come with coatings like the anti-reflective coating to reduce eye strain or prevent Sun-glare.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="mt-5 buying-bg-color ">
      <div class="axil-main-slider-area">
         <div class="container">
            <div class="col-lg-12 col-md-12 col-12">
               <div class="face-shap-heading">
                  <h1 class="title-1">FRAME & FACE SHAPES</h1>
                  <p>Even with uncountable designs and styles out there, there are only a few chosen ones which complement our look every day.Your face shape plays a very important role to determine which frame would look the best on you and match your personalstyle statement.</p>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-12 col-md-12 col-12">
                  <ul class="face-bg-ul">
                     <li><Image src="/assets/images/glass/Diamond-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/heart-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/oblong-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/OVAL-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/rectangle-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/round-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/square-8.png" width={150} height={150}/></li> 
                     <li><Image src="/assets/images/glass/Triangle-8.png" width={150} height={150}/></li> 
                  </ul>
               </div>
               <div class="col-lg-12 col-md-12 col-12">
                  <ul class="face-bg-ul-1">
                     <li><Image src="/assets/images/glass/round-frame.png" width={100} height={45}/>ROUND</li> 
                     <li><Image src="/assets/images/glass/cateye-frame.png" width={100} height={35}/>CAT-EYE</li> 
                     <li><Image src="/assets/images/glass/rectangle-frame.png" width={100} height={31}/>RECTANGLE</li> 
                     <li><Image src="/assets/images/glass/aviator-frame.png" width={100} height={31}/>AVIATOR</li> 
                     <li><Image src="/assets/images/glass/wayfarer-frame.png" width={100} height={39}/>WAYFARER</li> 
                     <li><Image src="/assets/images/glass/square-frame.png" width={100} height={37}/>SQUARE</li> 
                     <li><Image src="/assets/images/glass/hexa-frame.png" width={102} height={48}/>HEXAGONAL</li> 
                     <li><Image src="/assets/images/glass/oval-frame.png" width={100} height={40}/>OVAL</li> 
                  </ul>
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
