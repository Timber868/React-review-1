import { useState, Fragment } from "react";

import { EXAMPLES } from "../data/data-with-examples";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(props){
    const [ selectedTopic, setSelectedTopic ] = useState(null);

    function handleSelect(selectedButton) {
        //either components, JSX, Props or State
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }


    let tabContent = <p> Please select a topic.</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content"> <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
        <code>
            {EXAMPLES[selectedTopic].code}
        </code>
        </pre>
        </div>}


    return(
        <Section id="examples">
            <Tabs 
            buttonsContainer="menu" //If i wanted to use a component i wouldve put {Section} instead of a string identifier
            buttons={<>
                <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            </>}> 
                {tabContent} 
            </Tabs>
        </Section>
    );
}