import { useState } from "react";
import "./App.css";
import { FaAddressBook } from "react-icons/fa";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-4xl">Phonebook</h1>

      <PersonList persons={persons} setPersons={setPersons} />
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
