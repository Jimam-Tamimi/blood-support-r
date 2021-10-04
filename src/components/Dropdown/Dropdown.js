import React, {useRef, useEffect} from 'react'
import {Wrap} from './Dropdown.styles'

export default function Dropdown({children, style}) {
    const dropDownCont = useRef(null)
    useEffect(() => {
        console.log(dropDownCont.current.children[0].children[0])
        dropDownCont.current.children[0].children[0].addEventListener('click', () => {
            console.log("clicked")
            let elm = dropDownCont.current.children[0].children[1]
            if(elm.getAttribute('show') == 'false'){
                elm.style.height = "100%"
                elm.style.opacity = "1"
                elm.setAttribute('show', true)
            } else{
                elm.style.height = "0"
                elm.style.opacity = "0"
                elm.setAttribute('show', false)
            }

            
        })
    }, [])
    
    
    return (
        <>
            <Wrap  style={style} ref={dropDownCont}>
                {children}
            </Wrap>
        </>
    )
}
