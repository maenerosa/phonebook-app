import { useEffect } from "react";
import personService from "../services/personService";
import { FaTrash } from "react-icons/fa";

function PersonList({ persons, setPersons }) {
  useEffect(() => {
    personService
      .getPersons()
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then((_response) => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <ul className="bg-slate-700 text-white p-4">
      {persons.map((person) => (
        <li key={person.id} className="flex items-center">
          • {person.name}
          <FaTrash
            className="hover:cursor-pointer"
            onClick={() => deletePerson(person.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
