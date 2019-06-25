import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="our story"></Title>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
                Protect your head or you will regret it!
                Here in Spain, we lay claim to some of the harshest UV rays in all Europe. 
                Sunglasses are a must, but how many we have broken by letting ourselves go for
                a moment? We have lost the account.

                Raytegrity is made up of a family of inseparable friends. We have been working
                on different projects throughout our lives and this is one of the most exciting. 
                It took us two years of intense effort to create the definitive sunglasses. 
                All of our models are secure, stylish, affordable, resistant and recyclabe. 
                </p>
                <Link to="/about/">
                    <button className="btn text-uppercase btn-yellow">
                        about page
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </section>
    )
}