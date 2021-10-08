import React, { useRef, useEffect , useState} from "react";
import {
  Wrap,
  DropdownMenu, 
  DropdownLink, 
  LinkIcon, 
  LinkText,
} from "./ReqDropdown.styles";
import { Button, Badge, IconDiv } from '../../globalStyles'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {VscSaveAll} from 'react-icons/vsc'
import {IoMdOpen} from 'react-icons/io'
import {FaRegCopy} from 'react-icons/fa'
import {FaBan} from 'react-icons/fa'

export default function ReqDropdown({  absolute }) {
 

  const [showDropdown, setShowDropdown] = useState(false)


  return (
    <>
      <IconDiv
        onClick={(e) => setShowDropdown(!showDropdown)}
        style={{
          margin: "unset",
          
          position: `${absolute? 'absolute': ''}`,
          top: "-4px",
          right: "-16px",
        }}
        scaleOnHover
        width="30px"
        fontSize="20px"
        height="30px"
      >
        <BsThreeDotsVertical />
      </IconDiv>
      <DropdownMenu
        onClick={(e) => (showDropdown ? setShowDropdown(false) : "")}
        showDropdown={showDropdown}
      >
        <DropdownLink>
          <LinkIcon>
            <FaBan />
          </LinkIcon>
          <LinkText>Report</LinkText>
        </DropdownLink>
        <DropdownLink>
          <LinkIcon>
            <VscSaveAll />
          </LinkIcon>
          <LinkText>Save</LinkText>
        </DropdownLink>
        <DropdownLink>
          <LinkIcon>
            <IoMdOpen />
          </LinkIcon>
          <LinkText>Open</LinkText>
        </DropdownLink>
        <DropdownLink>
          <LinkIcon>
            <FaRegCopy />
          </LinkIcon>
          <LinkText>Copy Link</LinkText>
        </DropdownLink>
      </DropdownMenu>
    </>
  );
}
