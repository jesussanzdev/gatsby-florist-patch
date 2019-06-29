import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact us"/>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/contact@jesussanzdev.com" method="POST">
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="David Smith"/>
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="davidsmith@email.com"/>
                        </div>
                        {/* message */}
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" className="form-control" name="message" id="message" rows="5" placeholder="Put your message down here..."/>
                        </div>
                        {/* message */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
