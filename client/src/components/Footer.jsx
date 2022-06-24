import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    margin-top: 10rem;
   
    padding: 2rem;
    padding-bottom: 15rem;
    background-color: #0e192b ;
    position: static;
    color:white;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
`

const Logo= styled.div`
margin: auto;
/* border:2px solid red; */
    width:max-content;
  display: flex;
  gap: 24px;
    `
    const Text= styled.div`
        margin: auto;
        text-align: center;
    `

export const Footer = () => {
  return (
    <div >
        <Foot>
     <Logo>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAqUlEQVRIie3SsQ3CMBBA0buUdFTUzEDPEEwAU9EyC2tEiI4SapCiT0PDSeDjjCOE7peO42cnFsl+OUCBNbAHLsAAnIEDsGgJ73jdshW6eoO64S5gbwLv1AeczAm3wHQM+GrgWWQdDcCYoU5V7VixyD9+KoK6YHtlS8+BuWvDHtiz0KObiExUdShNrP7UpqMHbQH33onVt1pVP15D5PsnTjjhhBP+YzgbrTs8kL3ZJFJksQAAAABJRU5ErkJggg=="/>
     <img src="https://img.icons8.com/fluency-systems-filled/30/FFFFFF/twitter.png"/>
     <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin-2--v1.png"/>
     <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/youtube-play.png" width='30px'/>
     </Logo>
     <hr />
     <Text>
     <p>© 2022 CandyMart. All Right Reserved</p>
     <p>Made with <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/red-heart_2764-fe0f.png" alt="Love" width="20px" /> by Sourabh !</p>
     </Text>
      </Foot>
    </div>
  )
}

