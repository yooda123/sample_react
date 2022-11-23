// POINT propsの流れは一方通行
// POINT propsは読み取り専用

import Bye from "./Bye"
import Hello from "./Hello"

const Example = () => {
  const name = "Tom";

  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export {Example};
