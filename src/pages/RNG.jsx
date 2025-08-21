import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const RNG = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);
  const [groupAmount, setGroupAmount] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedPeople = localStorage.getItem("people");
    const parsedPeople = JSON.parse(storedPeople);
    setPeople(parsedPeople ?? []);
  }, []);

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
  };

  const RandomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    setSelectedPerson(people[randomNum]);
  };
  const GenerateGroups = () => {
    if (groupAmount <= 0) return;

    const shuffled = [...people].sort(() => 0.5 - Math.random());
    const newGroups = Array.from({ length: groupAmount }, () => []);
    shuffled.forEach((person, i) => {
      newGroups[i % groupAmount].push(person);
    });
    setGroups(newGroups);
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
      <Button onClick={AddPerson}>Add Person</Button>

      {people.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">People List:</h2>
          <ul className="pl-5">
            {people.map((person, index) => (
              <li
                key={index}
                className="mb-1 cursor-pointer"
                onClick={() => {
                  RemovePerson(index);
                }}
              >
                {person}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4">No people added yet.</p>
      )}

      {/* random name generator */}
      <Button
        onClick={() => {
          RandomPerson();
        }}
        className="my-5"
      >
        Random name
      </Button>
      <p>Random person: {selectedPerson}</p>
      <p>How many groups?</p>
      <p className="my-2">Groups: {groupAmount}</p>
      <Slider
        onValueChange={(e) => {
          setGroupAmount(e[0]);
        }}
        defaultValue={[0]}
        max={people.length}
        step={1}
      />
      <Button className="my-5" onClick={GenerateGroups}>
        Generate groups
      </Button>

      {groups.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((grp, i) => (
            <Card key={i} className="shadow-md">
              <CardHeader>
                <CardTitle>Group {i + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                {grp.length > 0 ? (
                  <ul>
                    {grp.map((person, j) => (
                      <li key={j}>{person}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No members</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
