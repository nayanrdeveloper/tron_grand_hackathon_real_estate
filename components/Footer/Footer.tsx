import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaHouseUser } from "react-icons/fa";
import { IconType } from "react-icons";
import FooterSocialMedia from './FooterSocialMedia';

function Footer() {
    interface socialMediaListStruct {
        icon: IconType;
        url: string;
      }
      const socialMediaList: socialMediaListStruct[] = [
        {
          icon: FaLinkedin,
          url: "https://in.linkedin.com/in/nayanrdeveloper",
        },
        {
          icon: FaGithub,
          url: "https://github.com/nayanrdeveloper",
        },
        {
          icon: FaTwitter,
          url: "https://twitter.com/nayan_radadiya6",
        }, 
        {
          icon: FaHouseUser,
          url: "https://nayanrdeveloper-portfolio.netlify.app/",
        }, 
      ];
  return (
    <div className='mt-5'>
        <div className='flex justify-between bg-[#303441] px-14 py-5 border-t border-light-800 items-center text-white'>
            <div>
                <p>2021 © Copyright - All Rights Reserved.</p>
            </div>
            <div>
            <ul className="flex gap-2">
            {
                socialMediaList.map((socialMedia: socialMediaListStruct, index: number) => {
                    return <FooterSocialMedia key={index} {...socialMedia} />
                })
            }
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer