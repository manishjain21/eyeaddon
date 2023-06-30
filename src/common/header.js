import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
       <header class="header axil-header header-style-4 transprent-header header-1-bg page-header-1"> 
         <div class="axil-header-top">
            <div class="container">
               <div class="row align-items-center mt--mobile">
                  <div class="col-md-4 col-7 mobile-hide">
                     <div class="header-action">
                        <ul class="action-list-1">
                           <li>
                              <a href="#"><i class="fab fa-facebook-f"></i></a> 
                           </li>
                           <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                           <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                           <li>  <a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-4 col-5">
                     <div class="header-brand">
                        <a href="/" class="logo logo-dark">
                        <Image src="/assets/images/logo/logo.png" alt="Site Logo" width={220}
                height={71} />
                        </a> 
                     </div>
                  </div>
                  <div class="col-md-4 col-7">
                     <div class="header-action">
                        <ul class="action-list">
                           <li class="axil-search">
                              <a href="javascript:void(0)" class="header-search-icon" title="Search">
                              <i class="flaticon-magnifying-glass"></i>
                              </a>
                           </li>
                           <li class="wishlist">
                              <a href="/wishlist">
                              <i class="flaticon-heart"></i>
                              </a>
                           </li>
                           <li class="shopping-cart">
                              <a href="#" class="cart-dropdown-btn">
                              <span class="cart-count">3</span>
                              <i class="flaticon-shopping-cart"></i>
                              </a>
                           </li>
                           <li class="my-account">
                              <a href="javascript:void(0)">
                              <i class="flaticon-person"></i>
                              </a>
                              <div class="my-account-dropdown">
                                 <span class="title">QUICKLINKS</span>
                                 <ul>
                                    <li>
                                       <a href="/profile">My Account</a>
                                    </li> 
                                 </ul>
                                 <a href="/sign-in" class="axil-btn btn-bg-primary">Login</a>
                                 <div class="reg-footer text-center">No account yet? <a href="/sign-up" class="btn-link">REGISTER HERE.</a></div>
                              </div>
                           </li>
                           <li class="axil-mobile-toggle">
                              <button class="menu-btn mobile-nav-toggler">
                              <i class="flaticon-menu-2"></i>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="axil-sticky-placeholder"></div>
         <div class="axil-mainmenu">
            <div class="container">
               <div class="header-navbar">
                  <div class="header-main-nav">
                     <nav class="mainmenu-nav">
                        <button class="mobile-close-btn mobile-nav-toggler"><i class="fas fa-times"></i></button>
                        <div class="mobile-nav-brand">
                           <a href="/" class="logo">
                           <Image src="/assets/images/logo/logo.png" alt="Site Logo" width={120}
                height={39}/>
                           </a>
                        </div>
                        <ul class="mainmenu">
                           <li class="menu-item-has-children">
                              <a href="#">Eyeglasses</a>
                              <ul class="axil-submenu">
                                 <li><a href="#">Women Eyeglasses</a></li>
                                 <li><a href="/men-eyeglasses">Men Eyeglasses</a></li>
                                 <li><a href="#">Kids Eyeglasses</a></li>
                              </ul>
                           </li>
                           <li class="menu-item-has-children">
                              <a href="#">Sunglasses</a> 
                              <ul class="axil-submenu">
                                 <li><a href="#">Women Sunglasses</a></li>
                                 <li><a href="#">Men Sunglasses</a></li>
                                 <li><a href="#">Kids Sunglasses</a></li>
                              </ul>
                           </li>
                           <li>
                              <a href="/contact-lens">Contact Lens</a>
                           </li>
                           <li><a href="#">Store</a></li>
                           <li>
                              <a href="/buying-guide">Buying Guide</a> 
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      
    </>
  )
}
