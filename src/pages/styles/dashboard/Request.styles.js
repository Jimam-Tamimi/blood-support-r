import styled from 'styled-components'
import { Flex } from '../../../globalStyles'

export const Wrap = styled.div`
    ${Flex}
    flex-direction: column;
`

export const TopSection = styled.div`
    ${Flex}
    justify-content: space-between;
    width: 100%;
`

export const SearchForm = styled.form`
    /* margin-right: auto; */
`

export const SearchInp = styled.input`
    padding: 10px 10px;
    border-radius: 4px;
    background: var(--secendory-color);
    border: none;
    outline: none;
    color: var(--secendory-text-color);
    width: 215px;
    
`

export const OrderedBySection = styled.div`

`

export const Select = styled.select`

`

export const Option = styled.option`

`


export const BottomSection = styled.div`
    ${Flex} 
    width: 100%;
    margin-top: 20px;

`
