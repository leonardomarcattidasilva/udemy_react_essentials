import React from "react";

const CoreConcept = ({title, image, description}) => {
   return <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
   </>
}

export default CoreConcept