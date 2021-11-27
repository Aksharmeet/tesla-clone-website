import React from 'react'
import styled from 'styled-components'
import Section from './section'
function home() {
    return (
       
        <Container>
            <Section 
            title = "Model S"
            descritpion = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            arrow = "/images/down-arrow.svg"

            />
            <Section 
            title = "Model Y"
            descritpion = "Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            arrow = "/images/down-arrow.svg"/>
          

            <Section 
            title = "Model 3"
            descritpion = "Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            arrow = "/images/down-arrow.svg"/>

            <Section 
            title = "Model x"
            descritpion = "Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            arrow = "/images/down-arrow.svg"/>
            <Section 
             title = "Lowest Cost Solar Panels in America"
             descritpion = "Money-back gurantee"
             backgroundImg = "solar-panel.jpg"
             leftBtnText = "Order Now"
             rightBtnText = "Learn More"
             arrow = "/images/down-arrow.svg"/>
              <Section 
              title = "Solar for New Roofs"
              descritpion = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
              backgroundImg = "solar-roof.jpg"
              leftBtnText = "Order Now"
              rightBtnText = "Learn More"
              arrow = "/images/down-arrow.svg"/>
              <Section 
               title = "Accessories"
               descritpion = ""
               backgroundImg = "accessories.jpg"
               leftBtnText = "Shop Now"
             />
              
            

          
           
            
            
        </Container>
    

    )
}
const Container = styled.div`
    height: 100vh;

`


export default home
