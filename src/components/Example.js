import { Profile } from './Profile';

const persons = [
  {name: "Taro", age: 10, hobbies:['aaa', 'bbb']},
  {name: "nako", age: 8, hobbies:['ccc', 'ddd']},
]

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            <Profile {...person}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
