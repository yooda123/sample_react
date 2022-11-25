import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            // ?? (Null合体演算子)
            // A ?? B
            // A === (null or undefined)  --> B
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            console.log(animalStr.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            return <li key={animal}>{animal ?? "nul, undefinedでした"}{animal === "Dog" && "★"}</li>

            // return <li key={animal}>{animal}{animal === "Dog" ? "★" : ""}</li>

            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }


          }
          )
        }
      </ul>
    </>
  );
};

export default Example;
