import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
export const RNG = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);
  const [group, setGroup] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState("");

  useEffect(()=> {
    const storedPeople = localStorage.getItem("people");
    const parsedPeople = JSON.parse(storedPeople);
    setPeople(parsedPeople ?? []);


  },[]);


  const AddPerson = () => {
    if (name.trim() == "") return;
    setPeople([...people, name.trim()]);
    localStorage.setItem("people", JSON.stringify([...people, name.trim()]));
    setName(""); // Clear the input after adding
    console.log(people);
    
  };
  
  const RemovePerson = (index) => {
    const storedPeople = JSON.parse(localStorage.getItem("people"));
    storedPeople.splice(index, 1);
    localStorage.setItem("people", JSON.stringify([...storedPeople]));
    setPeople(storedPeople);
    
  }

  const RandomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    setSelectedPerson(people[randomNum]);
  }

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
      <Button onClick={AddPerson}>Add Person</Button>

      {
        people.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">People List:</h2>
            <ul className="pl-5">
              {people.map((person, index) => (
                <li key={index} className="mb-1 cursor-pointer" onClick={() => {RemovePerson(index)}}>{person}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4">No people added yet.</p>
        )
      }

      {/* random name generator */}
      <Button onClick={()=>{RandomPerson()}} className="my-5">Random name</Button>
      <p>Random person: {selectedPerson}</p>
      <p>How many groups?</p>
      <p className="my-2">Groups: {group}</p>
      <Slider onValueChange={(e)=>{setGroup(e[0])}} defaultValue={[0]} max={people.length} step={1} />
    </>
  );
};
