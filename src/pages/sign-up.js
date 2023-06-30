// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from '@/common/header'
import Foot from '@/common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  return (
    <>
        <div class="axil-signin-area">
<div class="signin-header">
    <div class="row align-items-center">
        <div class="col-md-6">
            <a href="index.php" class="site-logo"><Image src="/assets/images/logo/logo.png" alt="logo" width={268} height={86}/></a>
        </div>
        <div class="col-md-6">
            <div class="singin-header-btn">
                <p>Already a member?</p>
                <a href="sign-in.php" class="axil-btn btn-bg-secondary sign-up-btn">Sign In</a>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xl-6 col-lg-6">
        <div class="axil-signin-banner bg_image bg_image--10">
            <h3 class="title">We Offer the Best Products</h3>
        </div>
    </div>
    <div class="col-lg-6 col-xl-6">
        <div class="axil-signin-form-wrap">
            <div class="axil-signin-form">
                <h3 class="title">I'm New Here</h3>
                <p class="b2 mb--55">Enter your detail below</p>
                <form class="singin-form">
                    <div class="form-group">
                        <label>User Name</label>
                        <input type="text" class="form-control" name="username"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="axil-btn btn-bg-primary submit-btn">Create Account</button>
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
