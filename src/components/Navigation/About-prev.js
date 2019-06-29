import React from 'react'
import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="our story"></Title>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto">
                <p className="lead text-muted mb-5">
                The Flower Patch is a florist located in Sacramento, California and founded by the Fernández family in 1997. 
                For more than twenty years we have exported our products to more than seven different countries. 
                We love botany and we wish with all our heart to share our passion with all possible people.
                </p>
                </div>
            </div>
            </div>
        </section>
    )
}