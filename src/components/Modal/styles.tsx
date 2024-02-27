import styled from 'styled-components'


export const Modal = styled.div`
position: absolute;
top:10%;
left:0;
right: 0;
margin: 0 auto;
width: 500px;
height: 400px;
z-index:1;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
export const Fade = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: #000;
opacity: .3;
`
export const Modalh2 =styled.h2`
margin-bottom:1em;

`
export const ModalForm = styled.div`
width: 90%;
`