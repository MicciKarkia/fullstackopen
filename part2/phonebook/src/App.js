import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const isFound = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    const addNewNumber = () => {
      const changeNumberObject = { ...isFound[0], number: personObject.number };
      console.log("changedNumber: ", changeNumberObject);
      if (
        window.confirm(
          `${changeNumberObject.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        console.log("isFound is: ", isFound);
        const id = changeNumberObject.id;
        personService.update(id, changeNumberObject).then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== returnedPerson.id ? person : returnedPerson
            )
          );
        });
      }
    };

    const addPersonObject = () => {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    };

    isFound.length ? addNewNumber() : addPersonObject();

    console.log("persons: ", persons);

    setNewName("");
    setNewNumber("");
  };

  const handleSearch = (event) => {
    console.log("Searching for:", event.target.value);
    const searchTerm = event.target.value;
    setSearchResult(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleSearchStop = (event) => {
    console.log("searching stopped");
    setSearchResult(null);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleDeletePerson = (personToDelete) => {
    console.log("delete button pressed", personToDelete);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService.remove(personToDelete.id).then((deletedPerson) => {
        console.log("person deleted", deletedPerson);
        setPersons(
          persons.filter((person) => person.name !== personToDelete.name)
        );
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} handleSearchStop={handleSearchStop} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchResult={searchResult}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
