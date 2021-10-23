import React from "react";

import {AiFillDashboard, AiOutlineForm,} from 'react-icons/ai'
import {FaHandsHelping,} from 'react-icons/fa'
import {BiTimer, BiDonateBlood, BiMessageRoundedDetail,} from 'react-icons/bi'
import {GiPlayerPrevious,} from 'react-icons/gi'
import {IoMdNotificationsOutline,} from 'react-icons/io'
import {MdFavoriteBorder,} from 'react-icons/md'
import {CgProfile,} from 'react-icons/cg'
import {FiSettings,} from 'react-icons/fi'

import logo from '../../assets/img/logo.png'


import { 
    DashboardWraper, 
    Logo, 
    LogoText, 
    DashLink, 
    LinkIcon,
    LinkText,
    DashboardLogo,
} from "./Dashboard.styles";


export default function Dashboard({show, toggleDashOnSmallDevice}) {
    const dashLinks = [
        {to:"/", name: 'Dashboard', icon: AiFillDashboard},
        {to:"/help-people/", name: 'Help People', icon:FaHandsHelping},
        {to:"/make-request/", name: 'Make Request', icon:AiOutlineForm},
        {to:"/current/", name: 'Current', icon:BiTimer},
        {to:"/all-blood-requests/", name: 'All Blood Requests', icon:GiPlayerPrevious},
        {to:"/all-donor-requests/", name: 'All Donor Requests', icon:BiDonateBlood},

        {to:"/messages/", name: 'Messages', icon:BiMessageRoundedDetail},
        {to:"/notifications/", name: 'Notifications', icon:IoMdNotificationsOutline},
        {to:"/favorites/", name: 'Favorites', icon:MdFavoriteBorder},

        {to:"/profile/", name: 'Profile', icon:CgProfile},

        {to:"/settings/", name: 'Settings', icon:FiSettings},
    ]


    
  return (
    <>
      <DashboardWraper show={show}>
            <DashboardLogo exact to="/">
                <Logo  src={logo}/>
                <LogoText>
                    BloodSupport
                </LogoText>
            </DashboardLogo>
            
            {
                dashLinks.map((link, i) => {
                    return (
                        <>
                        <DashLink  key={i} on Click={() => toggleDashOnSmallDevice()} activeClassName="active"  to={link.to} exact>
                            <LinkIcon>
                                <link.icon/>
                            </LinkIcon>
                            <LinkText>
                                {link.name}
                            </LinkText>
                        </DashLink>
                        </>
                    )
                })
            }

      </DashboardWraper>
    </>
  );
}
