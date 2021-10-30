import React from 'react';
import './About.css'
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div className="about-container">
            <Zoom left cascade>
                <h1 className="text-center text-success my-4">Why Choose Habib's Travelling</h1>
                <div className="about-item">
                    <div>
                        <h3 className='text-center bg-success text-white p-3 heading'>TINY GROUPS</h3>
                        <p className='text-center'>Personalized experience on every tours with us.5 travellers per group maximum.Private tours are also available</p>
                        <hr />
                    </div>
                    <div>
                        <h3 className='text-center bg-success text-white p-3 heading'>LOWER PRICE</h3>
                        <p className='text-center'>Compared to to any your home operators. Book directly anf curt the middleman.Save money and Travel More</p>
                        <hr />
                    </div>
                    <div>
                        <h3 className='text-center bg-success text-white p-3 heading'>SCHEDULED TOURS</h3>
                        <p className='text-center'>Regularly scheduled tours.Suitable for also solo travellers to jopin and reduce cost. Singler suppleman are also available.</p>
                        <hr />
                    </div>
                    <div>
                        <h3 className='text-center bg-success text-white p-3 heading'>HIGHEST QUALITY</h3>
                        <p className='text-center'>350+ Reviewers and 5/5 rating on trip advisor. Awarded Certificate in excellence in 2015 ,2016.2017</p>
                        <hr />
                    </div>
                    <div>
                        <h3 className='text-center bg-success text-white p-3 heading'>LOCAL EXPERIENCES</h3>
                        <p className='text-center'>Experinced local guides with vast local Knowledge.Have an authentic local experiences focusing on people and culture</p>
                        <hr />
                    </div>
                    <div>
                        <h3 className='text-center bg-success text-white p-3 heading'>LOCAL COMPANY</h3>
                        <p className='text-center'>100% of your money spent goes directly to the local.No commission to foreign agencies online or offline</p>
                        <hr />
                    </div>

                </div>

            </Zoom>

        </div>
    );
};

export default About;