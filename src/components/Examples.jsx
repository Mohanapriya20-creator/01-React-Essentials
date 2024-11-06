// starts with use is called react hook
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    // react hooks must be called inside a component function or a custom hook
    //it must be called in the top level of the component
    //selectedTopic actually value of the selected tab
    //setSelectedTopic is a function that changes the value of the selected tab
    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent = <p>Please Select a topic</p>

    function handleSelect(selectedTab) {
        setSelectedTopic(selectedTab);
        console.log(selectedTab);
    }
    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>{EXAMPLES[selectedTopic].code}</pre>
            </div>
    }
    return (<Section title="Examples" id="examples">
        {/* <Tabs buttonContainer = "menu" buttons = { */}
        <Tabs buttons={
            <>
                {/* component composition */}
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                {/* <TabButton label ="Components"></TabButton> */}
            </>
        }> {tabContent}</Tabs>



        {/* {!selectedTopic ? <p>Please Select a topic</p> :
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>} */}
    </Section>)
}