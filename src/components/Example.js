
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // 対応案１
  const animalsList = [];
  for (const animal of animals) {
    animalsList.push(<li>{animal}</li>);
  }

  // 対応案２
  const helloAnimals = animals.map((animal) => 
    <li key={animal}>Hello, {animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* 対応案１ */}
        {animalsList}

        {/* 対応案２ */}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
