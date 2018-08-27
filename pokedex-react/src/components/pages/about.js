import React from 'react';

const About = () => (
    <section className="about">
        <h1>About</h1>
        <div className="left-content">
          <p>This is a small Pokedex App that allows users to navigate and filter through pokemon of different generations type.</p>
          <p>I have built this app with a focus to learn and practice using React JS. Styling and other front-end facets are a secondary priorirty, particularly design.</p>
          <p>Future plans for the project:</p>
          <ul>
            <li>Add functionality to allow users to find pokemon to counter specific pokemon types in battle through each generation.</li>
            <li>Refactor components into smaller reusable chunks (look at common component compositions in react projects/consider atomic design pattern)</li>
            <li>Build styling using individual scss files for each react component.</li>
            <li>Remove bootstrap grid system and use a bespoke <i>grid-layout</i> grid system (Nice to have - not essential).</li>
            <li>Rethink design and styling scheme (Nice to have - not essential).</li>
          </ul>
        </div>
    </section>
);

export default About;