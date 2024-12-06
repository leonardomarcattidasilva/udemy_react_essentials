import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from './CoreConcept'
import TabButton from "./TabButton";

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
         <section id="examples">
            <h2>Examples</h2>
            <menu>
               <TabButton>Components</TabButton>
               <TabButton>JSX</TabButton>
               <TabButton>Props</TabButton>
               <TabButton>State</TabButton>
            </menu>
         </section>
      </main>
}

export default Main