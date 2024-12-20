import React from "react";
import reactImage from '../assets/react-core-concepts.png'
import './header.css'

const Header = () => {
   const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
   const genRandomInt = (max) => Math.floor(Math.random() * max)
   const description = reactDescriptions[genRandomInt(3)]

   return <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>{description} React concepts you will need for almost any app you are going to build!</p>
      </header>
}

export default Header