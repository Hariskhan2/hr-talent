import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex justify-between items-center max-[650px]:hidden'>
      <div className='text-[12px] text-[#B1B2B5] flex items-center gap-3 pt-4'>
        <p className='text-[#6D6E75]'>Copyright © 2025 </p>
        <p>Privacy Policy</p>
        <p>Term and conditions</p>
        <p>Contact</p>
      </div>
      <div className='flex gap-4 items-center'>
        <Instagram size={18} color='#B1B2B5' />
        <Facebook size={18} color='#B1B2B5' />
        <Youtube size={18} color='#B1B2B5' />
        <Linkedin size={18} color='#B1B2B5' />
      </div>
    </div>
  );
};

export default Footer;