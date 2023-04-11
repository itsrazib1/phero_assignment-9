import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black mt-5'>
      <div className='footer-container'>
        <div className='grid grid-cols-2 text-white md:grid-cols-6 pt-10 md:pt-25'>
          <div className='col-span-2 flex flex-col p-5 md:p-10'>
            <p className='font-bold text-3xl'>IT'S JOB HUB</p>
            <p className='my-2 text-xs font-thin'>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form.</p>
            
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Company</p>
            <p className='my-1 text-xs font-thin'>About Us</p>
            <p className='my-1 text-xs font-thin'>Work</p>
            <p className='my-1 text-xs font-thin'>Latest News</p>
            <p className='my-1 text-xs font-thin'>Careers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Product</p>
            <p className='my-1 text-xs font-thin'>Prototype</p>
            <p className='my-1 text-xs font-thin'>Plans & Pricing</p>
            <p className='my-1 text-xs font-thin'>Customers</p>
            <p className='my-1 text-xs font-thin'>Integrations</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Support</p>
            <p className='my-1 text-xs font-thin'>Help Desk</p>
            <p className='my-1 text-xs font-thin'>Sales</p>
            <p className='my-1 text-xs font-thin'>Become a Partner</p>
            <p className='my-1 text-xs font-thin'>Developers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Contact</p>
            <p className='my-1 text-xs font-thin'>Tangail,Dhaka</p>
            <p className='my-1 text-xs font-thin'>+880171-XXXXXX</p>
          </div>
        </div>
        <div className="border-t border-gray-800 w-[95%] mx-auto"></div>
        <div className='text-gray-300 p-5 md:p-10 flex justify-between items-center'>
          <p className='text-lg'>@2023 Job provider. All Rights Reserved</p>
          <p className='text-lg'>Powered BY : IT'S JOB HUB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;