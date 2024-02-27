import styled from 'styled-components'

export const Task = styled.header`
display:flex;
justify-content:space-between;
max-width: 400px;
margin:0 auto;
border-bottom: 1px solid #ccc;
padding:1em;
`

export const Details = styled.div`
text-align: left;
`
export const TextH4 = styled.h4`
font-size:1.2em;
margin-bottom: 1em;

`
export const Actions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
  
`
export const Icons = styled.i`
  margin-bottom: .5em;
  font-size:1.2em;
  background-color:#282c34;
  color: #fff;
  padding:.4em;
  transition: .5s;

  &:hover{
    color:#61dafb
  }
`