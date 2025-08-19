import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
export const RNG = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(()=> {
    const storedPeople = localStorage.getItem("people");
    const parsedPeople = JSON.parse(storedPeople);
    setPeople(parsedPeople);


  },[]);


  const addPerson = () => {
    if (name.trim() == "") return;
    setPeople([...people, name.trim()]);
    localStorage.setItem("people", JSON.stringify([...people, name.trim()]));
    setName(""); // Clear the input after adding
    console.log(people);

  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Random Number Generator</h1>
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        type="text"
        placeholder="Enter a name"
        className="mb-4"
      />
      <Button onClick={addPerson}>Add Person</Button>

      {
        people.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">People List:</h2>
            <ul className="pl-5">
              {people.map((person, index) => (
                <li key={index} className="mb-1">{person}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4">No people added yet.</p>
        )
      }
    </>
  );
};
