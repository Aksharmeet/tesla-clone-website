import React from 'react'
import styled from 'styled-components'

function section(props) {
    return (
        <Wrap bgImage =  {props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.descritpion}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText && 
                        <RightButton>
                            {props.rightBtnText}
                         </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src={props.arrow}></DownArrow>
            </Buttons>
        </Wrap>
    )
}
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
     

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center
`
const Buttons = styled.div`

`

export default section
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 20px;
    @media (max-width:768px) {
        flex-direction: column;
        
    }
    
`

const LeftButton= styled.div`
    background-color: rgba(23, 26, 32,0.8);
    height:40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
    @media (max-width:768px) {
        width:50vw;
        
    }
                                    
`

const RightButton= styled(LeftButton)`
    background-color: white;
    color: black;
    
`

const DownArrow= styled.img`
    height:40px;
    margin-top:10px;
    animation: animationDown infinite 1.5s;
`