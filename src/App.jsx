import { Header } from './components/Header/Header';
import { CoreConcepts } from './components/CoreConcepts/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import { TabButton } from './components/TabButton/TabButton';
import { useState } from 'react';

function App() {
  const coreConceptsData = CORE_CONCEPTS;
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }
  
  return (
    <div>
     <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {coreConceptsData.map((conceptItem, index) => {
              return (
                  <CoreConcepts key={index} title={conceptItem.title} description={conceptItem.description} image={conceptItem.image}/>
                  // <CoreConcepts {...conceptItem}/>
              )
            })}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
