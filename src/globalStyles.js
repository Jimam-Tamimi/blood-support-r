import styled, { createGlobalStyle, css } from 'styled-components'

export const DARK_MODE_SECENDORY_COLOR = 'white'
export const LIGHT_MODE_SECENDORY_COLOR = 'BLACK'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    transition: var(--main-transition) !important ;
  }
  
  :root {

    
    --for-active-click: scale(.92);
    --main-transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --primary-color: #dc3545;
    --primary-text-color: white ;
    --primary-hover-color: #b52a37;
    --main-box-shadow-color:  #00000061;
    ${
      ({darkMode}) => {
        if(darkMode){
          return `

          --secendory-color: #2f343a;
          --secendory-text-color: ${DARK_MODE_SECENDORY_COLOR};
          --secendory-hover-color: #272c31;
          
          --main-bg-color: #212427;
          
          --input-bg-color: #2f343a;

          --object-bg-color: #343a40;

          `
        } else {
          return `


          --secendory-color: #dfe5ec;
          --secendory-text-color: ${LIGHT_MODE_SECENDORY_COLOR};
          --secendory-hover-color: #c5ccd4;

          --main-bg-color: #f2f6fb;

          --input-bg-color: #dfe5ec;

          
          --object-bg-color: #ffffff;

          `
        }
      }
    }
 
  }
  html {
      scroll-behavior: smooth;
  }
  body{
      background-color: var(--main-bg-color);
      color: var(--secendory-text-color);
  }

  
  a{
      text-decoration: none;
      color: var(--secendory-text-color);
  }
  
  @media only screen and (min-width: 768px){
      body{
          font-size: 16px;
      }
  }
  
  @media only screen and (min-width: 480px) and (max-width: 768px){
      body{
          font-size: 15px;
      }
  }
  
  @media only screen and (max-width: 479px) {
      body{
          font-size: 14px;
      }
  }

    /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  
`;
 
export default GlobalStyle;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  

  margin-left: ${({show, smallDevice}) => show && !smallDevice? '255px': '0px'};

  transition: var(--main-transition);

`


export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`




export const FormWrap = styled.div`
  width: 100%;
`

export const Form = styled.form`
  ${Flex}
  justify-content: space-between;
  flex-wrap: wrap;

`

export const InputDiv = styled.div`
  height: 48px;
  width: ${({size=12}) => `calc(${(100 / 12 ) * size}% - 10px)`};
  margin-bottom: 20px;
  @media only screen and (max-width: 748px) {
    &{
      width: 100%;
    }
  }


`

export const Input = styled.input`
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
    background: var(--input-bg-color);
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: var(--secendory-text-color);
`

export const Button = styled.button`
    padding: 12px 20px;
    font-size: 16px;

    color: var(--primary-text-color);
    background: var(--primary-color);
    border: none;
    border-radius: 4px;
    margin: 0px 5px ;
    cursor: pointer;
    transition: var(--main-transition);
    ${({sm}) => (
      sm? `
        padding: 9px 7px;
        font-size: 13.33px;
      `:''
    )}

    @media only screen and (max-width: 748px) {
      &{
        width: 100%;
      }
    }


    &:active{
        transform: var(--for-active-click);
    }
`

// custom styling for React Select Component
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
  //   borderBottom: "1px dotted pink",
  //   color: state.isSelected ? "red" : "blue",

  }),
  control: (provided) => ({
      ...provided,
      height: '100%',
      background: 'var(--secendory-color)',
      border: 'none',
  }),
  container: () => ({
      width: '100%',
      height: '100%',
  }),
  menu: (provided) => ({
      // ...provided,
  }),
  singleValue: (provided, state) => ({
      ...provided,
      color: 'var(--secendory-text-color)',
      transition: 'var(--main-transition)',

  }),
  option: (provided, state) => ({
      ...provided,
    background: !state.isSelected ? "var(--secendory-hover-color)" : "var(--primary-color)",
    transition: 'var(--main-transition)',

  }),
  
};