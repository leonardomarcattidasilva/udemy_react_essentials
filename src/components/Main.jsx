import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from './CoreConcept'

const Main = () => {
   return <main>
        <h2>Time to get started!</h2>
         <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
               {
                  CORE_CONCEPTS.map(concept => {
                     return <li key={concept.title}>
                        <CoreConcept {...concept} />
                     </li>}
                  )
               }
            </ul>
         </section>
      </main>
}

export default Main