// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
  return (
    <>
        <div class="axil-signin-area">
<div class="signin-header">
    <div class="row align-items-center">
        <div class="col-sm-4">
            <a href="index.php" class="site-logo"><Image src="/assets/images/logo/logo.png" alt="logo" width={268} height={86}/></a>
        </div>
        <div class="col-sm-8">
            <div class="singin-header-btn">
                <p>Not a member?</p>
                <a href="sign-up.php" class="axil-btn btn-bg-secondary sign-up-btn">Sign Up Now</a>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xl-6 col-lg-6">
        <div class="axil-signin-banner bg_image bg_image--9">
            <h3 class="title">We Offer the Best Products</h3>
        </div>
    </div>
    <div class="col-lg-6  col-xl-6">
        <div class="axil-signin-form-wrap">
            <div class="axil-signin-form">
                <h3 class="title">Sign in to Eyeaddon</h3>
                <p class="b2 mb--55">Enter your detail below</p>
                <form class="singin-form">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password"/>
                    </div>
                    <div class="form-group d-flex align-items-center justify-content-between">
                        <button type="submit" class="axil-btn btn-bg-primary submit-btn">Sign In</button>
                        <a href="#" class="forgot-btn">Forget password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>

    </>
  )
}
