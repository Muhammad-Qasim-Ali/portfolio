import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoDribbble } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank'> <FaLinkedin /> </a>
      <a href="https://github.com" target='_blank'><IoLogoGithub /> </a>
      <a href="https://dribbble.com" target='_blank'> <IoLogoDribbble /> </a>
    </div>
  )
}

export default HeaderSocials