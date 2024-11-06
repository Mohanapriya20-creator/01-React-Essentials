import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>)}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]}></CoreConcepts> */}

        {/* <CoreConcepts
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}>
      </CoreConcepts> */}
        {/* 
      <CoreConcepts title={CORE_CONCEPTS[1].title}
        description={CORE_CONCEPTS[1].description}
        image={CORE_CONCEPTS[1].image}></CoreConcepts>

      <CoreConcepts title={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}
        image={CORE_CONCEPTS[2].image}></CoreConcepts> */}
      </ul>
    </section>)
}