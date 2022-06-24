import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    display:grid;
    grid-template-columns: 1fr 4fr;
    width:50%;
    gap:20px;
    margin:auto;
   margin-top: 50px;
   padding-left: 100px;
   height: 150px;
    
`
const Imgdiv= styled.div`
    /* border: 2px solid red; */
    border-radius: 2px;
`

const Contentt= styled.div`
    /* border: 2px solid blue; */
    border-radius: 2px;
`
const Logo=styled.div`
    display:flex;
    gap:10px;

`


export const Contect = () => {
  return (
    <Container >
    
    
    <Imgdiv>
    <img src="https://lh3.googleusercontent.com/XBlM5kYXJwEkXO4UptXzohlwBR0HURJAO9RhbwDTxAmTLJ1pF_M1L31wE_J_NBat03h1Q8AKosnR1RYpcfSBO8F2hcOHxEjxpqA0506x34_23GXeThZOZbSDQQtz-uiVFqI4CistZDatCVamsEI7ATTM7NulxnMe3vtDag8M3YnjB7gsdvSEdfWiDOHydtWlf6fgN2gu8wfkLcW80UWuil0dp2cH0lf9jYLl6yuGMSSR1iqJ5VTR5ZrxicEdCdcb1LT8pXMbMLn89J-sPC-A5pufqZzMUpLJ6vaqdOS-E8uhXGeh4qnmRb5dALfqT6wDODXFawia6hb4-kBagLOS358RLu63824bwGKWrUvTTOKbb2Wyeb-uDgAK2CSRIvQF62Pstgfg_v4LzbOLVb1M-v2uXCHxwyAkA6wTlghoIiP4OvJwUOw-L_SPJvENYcYFR0LMOuRa9K9cJ8FPEwUtZrSM25vf_qE41IuOeB31z5PvkYhbNzcmG7nqP6ssbL13CaTau_XmwTxZbljwmGRLUtM1WGPHe89cb0MMYw3SjSWV9kKxT85E_QhboHuLft41O65_OoLJHUcP1dKKnisaoh93sKzt_3QMZk_Vql2mAMR6m2OpeRk_TGoahGVJY9a7dkfmilg_z83TR-b0lFPLoCKFXPZgv95BrK47NyIFAKlI9kmEkS12EFjPhtXu714lo9enR9G_MNv8UNZYLfwVu3nMcnmobc2VcQjcWgzJ8zhOTLYw2DErRiCb5EXB7a1_cUNTfM9sUX3bDdOxOH9ZrLvWcIvQOZK2vwA=w347-h386-no?authuser=0" alt=""  style={{"width":"200px"}}/>

    </Imgdiv>

    <Contentt>
      <h4>I'm Sourabh Kumar</h4>
      <h6>Full Stack MERN Developer</h6>
      <p>Connect with me:</p>
      <div>
    <a href="https://www.linkedin.com/in/sourabh-kumar-80b8b0212/"><img src="https://cdn.svgporn.com/logos/linkedin-icon.svg" alt="" style= {{"width":'30px', "marginRight":"10px"}} /></a>
    
    <a href="https://github.com/sour7"><img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="" width='30px' /></a></div>

    </Contentt>

    </Container>
  )
}

