import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { DASHBOARD_NAVLINKS } from '../../constants/constants';
import aviewLogo from '../../public/img/aview/logo.svg';
import signout from '../../public/img/icons/signout.svg';
import left from '../../public/img/icons/left-chevron.svg';
import right from '../../public/img/icons/right-chevron.svg';



const DashboardSidebar = ({ userInfo }) => {
  const [menuOpen,setMenuOpen]=useState(true)

  return (
    <>
    
    <aside className={`relative top-0 letf-0 transition ease-linear duration-500 max-h-screen hidden flex-col bg-white-transparent flex-start ${menuOpen ? ' w-40':' w-16 '} text-white lg:flex `}>
      <div className={`absolute flex gap-1 rounded-[4px] cursor-pointer w-12 h-12 top-4 left-4 ${menuOpen&&'top-5 left-28'}`} onClick={()=>setMenuOpen(!menuOpen)}>
         
       <Image src={menuOpen?left :right} alt='button' width={32} height={32} />
       
        
      </div>
      <div className={`  ${menuOpen?'top-s4  absolute  left-4': 'hidden'}`}>
        <Link href="/dashboard">
          <a>
            <Image
              src={aviewLogo}
              alt="AVIEW International logo"
              width={48}
              height={48}
            />
          </a>
        </Link>
      </div>
      <Profile userInfo={userInfo} menuOpen={menuOpen} />
      <Navlink menuOpen={menuOpen}/>
      <Signout menuOpen={menuOpen}/>
      </aside>
      </>
  );
};

const Profile = ({ userInfo,menuOpen }) => {
  return (
    <div className={`justify-content absolute  duration-300 ${menuOpen? 'h-36 w-32 top-28 px-1 left-4': 'w-16 h-16 top-24 px-0 left-0'} p-0 gap-2  flex flex-col items-center`}>
      <Image
        src={userInfo?.picture}
        alt="Profile Picture"
        width={`${menuOpen ?80:40}`}
        height={`${menuOpen ? 80 :40 }`}
        className="rounded-full"
      />
      <div className={`${menuOpen ? ' flex flex-col text-center items-center p-0  w-32  h-11' : 'hidden'}`}>
         <h3 className="text-lg">
        {userInfo.firstName} {userInfo?.lastName}
        </h3>
        <p className="text-sm">Content Creator</p>
      </div>
    </div>
  );
};




const Navlink = ({menuOpen}) => {
  

  return (
    <>
    <div className= {`flex-col items-start  justify-center p-0 gap-4 duration-300 absolute ${menuOpen ? 'w-36  h-[325px] left-2 top-[295px] ' : ' w-12 left-2 h-[325px] top-[250px] '} `}>
       {
        DASHBOARD_NAVLINKS.map((link,index)=>(
          <Link href={link.route} key={`sidebar-link-${index}`}>
            <div className='w-full  h-10 flex cursor-pointer  flex-row py-2 pr-0  rounded-s0   gap-2 justify-between items-center hover:bg-gray-1 hover:rounded-md  '>
              
              <div className={`${menuOpen?'px-2 py-2  gap-2':'px-2 py-2 '} left-1 flex group relative items-center`} >
                <Image src={link.image} alt={link.text} width={20} height={20}/>
               
                <h6 className={`${menuOpen ? 'text-sm text-center ': 'hidden'}`} >{link.text}</h6>
                <h6 className={`${menuOpen&&'hidden'} absolute bg-gray-1 group-hover:px-2 group-hover:py-1 w-0 overflow-hidden group-hover:w-fit left-48 rounded-md group-hover:left-16 group-hover:duration-500 group-hover:text-center`}>{link.text}</h6>
              </div>
              </div>
          </Link>
        ))
       }
    </div>
    </>
  );
};








const Signout = ({menuOpen}) => {


  const buttonValue='Sign Out'

  const handleLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    window.location.href = '/';
  };


  return (
    <div className={` flex w-full items-center cursor-pointer   flex-row  text-sm absolute duration-300 top-[670px]  ${menuOpen ? 'left-10': 'left-3 p-2 bg-gray-1 rounded-md w-fit'}`} onClick={handleLogout} >
      <Image src={signout} alt="Sign out" width={20} height={20} />
      <h6 className={`${!menuOpen && 'hidden'} ml-2 text-center`}>{buttonValue}</h6>
    </div>
   );
};

export default DashboardSidebar;
