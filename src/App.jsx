import { useState } from "react";

import Header from "./components/Header";
import genRandomInt from "./components/GenRandomInt";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    //either components, JSX, Props or State
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  const wordOptions = ["Way", "Time", "No better time"]
  const firstWord = wordOptions[genRandomInt(3)];

  return (
    <div>
      <Header/>
      <main>
        <h2>{firstWord} to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
