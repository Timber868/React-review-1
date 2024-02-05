import { useState } from "react";

import Header from "./components/Header";
import genRandomInt from "./components/GenRandomInt";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

import { CORE_CONCEPTS } from "./data/data-with-examples";
import { EXAMPLES } from "./data/data-with-examples";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState(null);

  function handleSelect(selectedButton) {
    //either components, JSX, Props or State
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  const wordOptions = ["Way", "Time", "No better time"]
  const firstWord = wordOptions[genRandomInt(3)];

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

  return (
    <div>
      <Header/>
      <main>
        <h2>{firstWord} to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
