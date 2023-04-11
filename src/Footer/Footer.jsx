import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage,faRetweet,faMailBulk } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
   
    return (
        <div>
            <div className='p-8 md:px-16 bg-black py-10 text-white mt-24'>
                {/* Logos and Links */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-5 items-center'>
                    <div>
                        <div>
                            <h1 className='font-bold text-3xl'>IT'S JOB HUB</h1>
                        </div>
                        <div className='pt-5'>
                            <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className='py-4 flex gap-5'>
                            <div><FontAwesomeIcon icon={faMessage}/></div>
                            <div><FontAwesomeIcon icon={faRetweet} /></div>
                            <div><FontAwesomeIcon icon={faMailBulk} /></div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Company</li>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Product</li>
                            <li>Prototype</li>
                            <li>Plan & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Support</li>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold '>Contact</li>
                            <li>Tangail, Dhaka</li>
                            <li>+880 1711-XXXXXX</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Last Part */}
                <hr />
                <div className='flex justify-between py-8'>
                    <div>
                        &copy;2023 IT'S JOB HUB, All Rights Reserved
                    </div>
                    <div>
                        Powered by IT'S JOB HUB
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
