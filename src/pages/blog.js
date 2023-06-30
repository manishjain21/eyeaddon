// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
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
                                <li class="axil-breadcrumb-item active" aria-current="page">Blogs</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="axil-blog-area axil-section-gap">
            <div class="container">
                <div class="row">
                            <h1 class="title">Blog Grid</h1>
                    
                    <div class="col-lg-8">
                        <div class="row g-5">
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-10.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Digital Art's</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Keeping yourself safe when buying NFTs on eTrade</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-11.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Photography</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Important updates for listing and delisting your NFTs</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-12.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Music</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">10 tips for avoiding scams and staying safe on the decentralized web</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-10.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Sports</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Keeping yourself safe when buying NFTs on eTrade</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-11.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Virtual Studio</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Important updates for listing and delisting your NFTs</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-12.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Utility</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">10 tips for avoiding scams and staying safe on the decentralized web</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-10.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Sketch</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Keeping yourself safe when buying NFTs on eTrade</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-11.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Digital Art's</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Important updates for listing and delisting your NFTs</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-10.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Digital Art's</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Keeping yourself safe when buying NFTs on eTrade</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="content-blog blog-grid">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="#">
                                                <Image src="/assets/images/blog/blog-11.png" alt="Blog Images" width={368} height={207}/>
                                            </a>
                                            <div class="blog-category">
                                                <a href="#">Photography</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="title"><a href="#">Important updates for listing and delisting your NFTs</a></h5>

                                            <div class="read-more-btn">
                                                <a class="axil-btn right-icon" href="#">Read More <i class="fal fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post-pagination">
                            <nav class="navigation pagination" aria-label="Products">
                                <ul class="page-numbers">
                                    <li><span aria-current="page" class="page-numbers current">1</span></li>
                                    <li><a class="page-numbers" href="#">2</a></li>
                                    <li><a class="page-numbers" href="#">3</a></li>
                                    <li><a class="page-numbers" href="#">4</a></li>
                                    <li><a class="page-numbers" href="#">5</a></li>
                                    <li><a class="next page-numbers" href="#"><i class="fal fa-arrow-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <aside class="axil-sidebar-area">
                            <div class="axil-single-widget mt--40">
                                <h6 class="widget-title">Latest Posts</h6>
                                <div class="content-blog post-list-view mb--20">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <Image src="/assets/images/blog/blog-04.png" alt="Blog Images" width={120} height={77}/>
                                        </a>
                                    </div>
                                    <div class="content">
                                        <h6 class="title"><a href="#">Dubai’s FRAME Offers its Take on the</a></h6>
                                        <div class="axil-post-meta">
                                            <div class="post-meta-content">
                                                <ul class="post-meta-list">
                                                    <li>Mar 27, 2022</li>
                                                    <li>300k Views</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-blog post-list-view mb--20">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <Image src="/assets/images/blog/blog-05.png" alt="Blog Images" width={120} height={77}/>
                                        </a>
                                    </div>
                                    <div class="content">
                                        <h6 class="title"><a href="#">Apple presents App Best of 2020 winners</a></h6>
                                        <div class="axil-post-meta">
                                            <div class="post-meta-content">
                                                <ul class="post-meta-list">
                                                    <li>Mar 20, 2022</li>
                                                    <li>300k Views</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-blog post-list-view">
                                    <div class="thumbnail">
                                        <a href="#">
                                            <Image src="/assets/images/blog/blog-06.png" alt="Blog Images" width={120} height={77}/>
                                        </a>
                                    </div>
                                    <div class="content">
                                        <h6 class="title"><a href="#">Gallaudet University innovation in education</a></h6>
                                        <div class="axil-post-meta">
                                            <div class="post-meta-content">
                                                <ul class="post-meta-list">
                                                    <li>Mar 15, 2022</li>
                                                    <li>300k Views</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </main> 
      <Foot />
    </>
  )
}
