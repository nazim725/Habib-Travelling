import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer my-4 py-4">
            <div className='footer-1at-row'>
                <div>
                    <h4 className=' text-white'>Address</h4>
                    <p className=' text-white'><small>Habib's Travelling 3rd Floor, Taneem Square,158/E, Kemal Ataturk Avenue, Banani, Dhaka 1213,Bangladesh</small></p>


                </div>


                <div className='text-center '>
                    <h4 className='text-center text-white'>Verified by</h4>
                    <img src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/media/assets/comodoSecure.png" alt="" />
                </div>
                <div className='text-center '>
                    <h4 className='text-center text-white'>Authorised by</h4>
                    <img src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/media/assets/iata-logo.png" alt="" />
                </div>
                <div className='text-center '>
                    <h4 className='text-center text-white'>Approved Agent</h4>
                    <img src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/bimanbd.png" alt="" />
                </div>
            </div>

            <div className='footer-2nd-row mt-4'>
                <div>
                    <p className='text-primary'> <i class="fas fa-envelope"></i> habib@gmail.com</p>
                    <p className='text-primary'><i class="fas fa-phone-alt"></i>  01830082347</p>
                    <p className='text-primary'><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-facebook-messenger"></i> <i class="fab fa-twitter"></i> <i class="fab fa-linkedin-in"></i></p>
                </div>

                <div className='text-center '>
                    <p className='text-white'>We Accept</p>
                    <img className='' src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/visa-new.png" alt="" />
                </div>


                <div className='text-center '>
                    <p></p>
                    <img className='mt-4' src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/bkash-new.png" alt="" />
                </div>
                <div className='text-center '>
                    <p></p>
                    <img className='mt-4' src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/nogod-new.png" alt="" />
                </div>
            </div>
            <p className='text-white text-center mt-2'>Copyright @ 2021. Habib's Travelling. All rights reserved.</p>

        </div>
    );
};

export default Footer;