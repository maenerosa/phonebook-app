import { useState } from "react";
import personService from "../services/personService";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newPerson,
      number: newNumber,
    };

    personService
      .createPerson(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewPerson("");
        setNewNumber("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={addPerson} className="flex flex-col gap-4 bg-blue-400 p-4">
      <div className="flex flex-col">
        <label>Name</label>
        <input
          className="h-8"
          type="text"
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label>Phone Number</label>
        <input
          className="h-8"
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <button className="bg-slate-700 py-2 text-white font-bold" type="submit">
        Add New
      </button>
    </form>
  );
}

export default PersonForm;
