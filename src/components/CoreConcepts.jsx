import "./CoreConcepts.css"
import { CORE_CONCEPTS } from "../data/data-with-examples"

function CoreConcepts ({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3> {title} </h3>
            <p> {description} </p>
        </li>
    )
}

export default function CoreConceptsBloc (props) {
    return(
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </section>
    )
}