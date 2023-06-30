// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })


export default function AboutUs() {
  return (
    <>
      <Header />
      <main class="main-wrapper">
        <div class="axil-breadcrumb-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="inner">
                            <ul class="axil-breadcrumb">
                                <li class="axil-breadcrumb-item"><a href="index.php">Home</a></li>
                                <li class="separator"></li>
                                <li class="axil-breadcrumb-item active" aria-current="page">About Us</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="axil-about-area about-style-1 axil-section-gap ">
            <div class="container">
                <div class="row align-items-center">
                            <h1 class="title">About Our Store</h1>
                    
                    <div class="col-xl-4 col-lg-6">
                        <div class="about-thumbnail">
                            <div class="thumbnail">
                                <Image src="/assets/images/about/about-01.png" alt="About Us" width={410}
                height={489}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-6">
                        <div class="about-content content-right">
                            <span class="title-highlighter highlighter-primary2"> <i class="far fa-shopping-basket"></i>About Store</span>
                            <h3 class="title">Online shopping includes both buying things online.</h3>
                            <span class="text-heading">Salesforce B2C Commerce can help you create unified, intelligent digital commerce
                                experiences — both online and in the store.</span>
                            <div class="row">
                                <div class="col-xl-6">
                                    <p>Empower your sales teams with industry tailored
                                        solutions that support manufacturers as they go
                                        digital, and adapt to changing markets & customers
                                        faster by creating new business.</p>
                                </div>
                                <div class="col-xl-6">
                                    <p class="mb--0">Salesforce B2B Commerce offers buyers the
                                        seamless, self-service experience of online
                                        shopping with all the B2B</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-info-area">
            <div class="container">
                <div class="row row--20">
                    <div class="col-lg-4">
                        <div class="about-info-box">
                            <div class="thumb">
                                <Image src="/assets/images/about/shape-01.png" alt="Shape" width={60}
                height={60}/>
                            </div>
                            <div class="content">
                                <h6 class="title">40,000+ Happy Customer</h6>
                                <p>Empower your sales teams with industry
                                    tailored solutions that support.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-info-box">
                            <div class="thumb">
                                <Image src="/assets/images/about/shape-02.png" alt="Shape" width={60}
                height={58}/>
                            </div>
                            <div class="content">
                                <h6 class="title">16 Years of Experiences</h6>
                                <p>Empower your sales teams with industry
                                    tailored solutions that support.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-info-box">
                            <div class="thumb">
                                <Image src="/assets/images/about/shape-03.png" alt="Shape" width={53}
                height={60}/>
                            </div>
                            <div class="content">
                                <h6 class="title">12 Awards Won</h6>
                                <p>Empower your sales teams with industry
                                    tailored solutions that support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="axil-about-area about-style-2">
            <div class="container">
                <div class="row align-items-center mb--80 mb_sm--60">
                    <div class="col-lg-5">
                        <div class="about-thumbnail">
                            <Image src="/assets/images/about/about-02.png" alt="about" width={520}
                height={420}/>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="about-content content-right">
                            <span class="subtitle">Features #01</span>
                            <h4 class="title">Solutions that work together</h4>
                            <p>Publish your eCommerce site quickly with our easy-to-use store builder— no
                                coding required. Migrate your items from your point of sale system or turn your
                                Instagram feed into a shopping site and start selling fast. Square Online works
                                for all kinds of businesses—retail, restaurants, services.</p>
                            <a href="contact.html" class="axil-btn btn-outline">Get In Touch</a>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mb--80 ">
                    <div class="col-lg-5 order-lg-2">
                        <div class="about-thumbnail">
                            <Image src="/assets/images/about/about-03.png" alt="about" width={520}
                height={420}/>
                        </div>
                    </div>
                    <div class="col-lg-7 order-lg-1">
                        <div class="about-content content-left">
                            <span class="subtitle">Features #01</span>
                            <h4 class="title">Solutions that work together</h4>
                            <p>Publish your eCommerce site quickly with our easy-to-use store builder— no
                                coding required. Migrate your items from your point of sale system or turn your
                                Instagram feed into a shopping site and start selling fast. Square Online works
                                for all kinds of businesses—retail, restaurants, services.</p>
                            <a href="contact.html" class="axil-btn btn-outline">Get In Touch</a>
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
