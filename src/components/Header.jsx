import React from "react";

const Header = () => {
   const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

   const genRandomInt = (max) => Math.floor(Math.random() * max)

   return <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>{reactDescriptions[genRandomInt(3)]} React concepts you will need for almost any app you are going to build!</p>
      </header>
}

export default Header