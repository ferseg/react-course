import React from 'react';
import Person from './Person/Person'

// Use as many functional components as possible
// List of persons
const persons = (props) => 
    props.persons.map((person, index) => 
          <Person 
            key={person.id}
            click={() => props.clicked(index)}
            name={person.name} 
            years={person.age}
            changed={(event) => props.changed(event, index)} />    
);

export default persons;