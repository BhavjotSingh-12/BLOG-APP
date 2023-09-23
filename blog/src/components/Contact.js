import React from 'react'
import './contact.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FiShare2, FiMail } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"
const Contact = () => {
  return (
    <div className=' contactcs w-full py-3'>
      <div className='opacity-90 bg-[#444] my-[3%] mx-[13%] rounded-[10px] py-3 text-[white] fontsty'>
        <div className="m-3 text-[40px] grad">Contact Me</div>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='md:w-[500px] flex flex-row mx-5 md:mx-8 bg-[#c4c4c451] md:m-3 md:text-[25px] md:p-3 rounded-[8px] h-[80px] md:h-[110px]'>
            <MdLocationOn className='w-[35px] h-[35px] mr-3 mt-2 ' />
            <div className='md:flex-col mt-2 md:mt-0'>
              <div>My Address</div>
              <div className='text-md:[20px]'>Haridwar, Uttarakhand</div>
            </div>
          </div>
          <div className='md:w-[500px] flex flex-col mx-5 md:mx-0 bg-[#c4c4c451] md:m-3 md:text-[25px] md:p-3 h-[80px] md:h-[110px] rounded-[8px]'>
            <div className=' flex flex-row '>
              <FiShare2 className='w-[35px] h-[35px] mr-3 ' />
              Social Profiles
            </div>
            <div className="flex flex-row  ml-[55px] gap-4">
              <a href="https://github.com/BhavjotSingh-12">
                <AiFillGithub className='w-[25px] h-[25px]  my-2' /></a>
              <a href="https://www.linkedin.com/in/bhavjot-singh-166b05228">
                <AiFillLinkedin className='w-[25px] h-[25px]  my-2' /></a>
              <a href="mailto:bhavjot861@gmail.com">
                <FiMail className='w-[25px] h-[25px]  my-2' /></a>
            </div>
          </div>
        </div>
        <div className='md:w-[500px] bg-[#c4c4c451] mx-5 md:mx-[25%] mt-5 md:mt-0 flex flex-row md:m-3 md:text-[25px] md:p-3 h-[80px] md:h-[110px] rounded-[8px]'>
          <FiMail className='w-[35px] h-[35px] mr-3 mt-2 md:mt-0 ' />
          <div className='md:flex-col mt-2 md:mt-0'>
            <div>Email Me</div>
            <div className='text-md:[20px]'>bhavjot861@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="opacity-70 bg-black my-[3%] mx-[13%] rounded-[10px] py-3 text-[white]">
        <div className='md:text-center ml-[60px] md:ml-0 md:text-[40px]'>Write me an Email!</div>
        <form action="https://getform.io/f/22fbf253-57a9-4862-ae33-80f01cd0f7c0" method="POST">
          <input type="text" name="Name" placeholder='Name' className='mx-[30px] rounded-[8px] m-2 p-2 bg-[#c4c4c451] w-[55vw] md:w-[65vw] text-[black]' />
          <input type="email" name="email" placeholder='Email' className='mx-[30px] rounded-[8px] m-2 p-2 bg-[#c4c4c451] w-[55vw]  md:w-[65vw] text-[black]' />
          <input type="text" name="subject" placeholder='Subject' className='mx-[30px] rounded-[8px] m-2 p-2 bg-[#c4c4c451] w-[55vw]  md:w-[65vw] text-[black]' />
          <textarea name="message"
            rows="10"
            placeholder="Message" className='mx-[30px] m-2 p-2 bg-[#c4c4c451] rounded-[8px] w-[55vw] md:w-[65vw] text-[black]' />
          <button className='btn mx-[30%] md:mx-[45%] w-[110px] h-[40px] rounded-[8px] bg-[#49def8]'>Send Email</button>
        </form>
      </div>
    </div>
  )
}

export default Contact