import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare } from 'react-icons/fa';

const SocialShareButton = ({ url, title }) => {
  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/dialog/share?app_id=2296138210580900&display=popup&href=${(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${(url)}`;
  const redditShareUrl = `https://www.reddit.com/submit?url=${(url)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${(url)}`;

  return (
    <div className='w-full flex justify-between'>
      <button onClick={handleFacebookShare}>
        <FaFacebookSquare className='text-[#3b5998] w-12 h-auto'/>
      </button>
      <a target='_blank' rel='noreferrer' href={twitterShareUrl}>
        <FaTwitterSquare className='text-[#00acee] w-12 h-auto'/>
      </a>
      <a target='_blank' rel='noreferrer' href={redditShareUrl}>
        <FaRedditSquare className='text-[#ff4500] w-12 h-auto'/>
      </a>
      <a target='_blank' rel='noreferrer' href={whatsappShareUrl}>
        <FaWhatsappSquare className='text-[#25d366] w-12 h-auto'/>
      </a>
    </div>
  );
};

export default SocialShareButton;
