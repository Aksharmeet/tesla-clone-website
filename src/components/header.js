import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';


import { NavLink} from 'react-router-dom';




function Header() {
    const cars = useSelector(selectCars);
   
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
         
            <NavLink to="/" >
                <img src="/images/logo.svg" alt="" />
            </NavLink>
            
           
            <Menu> 
                   
                     {cars && cars.map((car, index)=>{
                       return  <a href="#" key={index}> {car} </a>
                    })}
                    
            </Menu>
           

            <RightMenu>
                    <NavLink to="shop" >Shop </NavLink>
                    <NavLink to="tesla-account" >Tesla Account </NavLink>
                    <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu> 

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <CustomClose onClick={() =>setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index)=>{
                       return     <li key ={index}><NavLink to={car}>{car}</NavLink></li>
                    })}
                <li><NavLink to="/">Existing Inventory</NavLink></li>
                <li><NavLink to="/">Used Inventory</NavLink></li>
                <li><NavLink to="/">Cybertruck</NavLink></li>
                <li><NavLink to="/">Roadster</NavLink></li>
                <li><NavLink to="/">Semi</NavLink></li>
                <li><NavLink to="/">Charging</NavLink></li>
                <li><NavLink to="/">Power</NavLink></li>
                <li><NavLink to="/">Utilities</NavLink></li>
                <li><NavLink to="/">Trade-in</NavLink></li>
                <li><NavLink to="/">Test Drive</NavLink></li>
            </BurgerNav>
               
            
            
            
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index: 1;
    
   

`

const Menu = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex: 1;
     
    a{
        font-weight:600;
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px){
        display:none

    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
   
    @media(max-width: 768px){
      width:100%;
      justify-content:flex-end
    }
    a{
        font-weight:600;
        text-transform: uppercase;
        flex-wrap: no-wrap;
        margin-right:10px;
       
        
    }

    
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width:300px;
    z-index:20;
    list-style:none;
    text-align:left;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
        li{
            padding: 15px 0;
            border-bottom: 1px solid rgb(0,0,0,.2);
        }
        a{
            font-weight: 600
        }
        
`

export default Header


