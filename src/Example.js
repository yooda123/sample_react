// 引数で渡ってきたオブジェクトを変更しない！

const Example = () => {
  const num = { val: 10 };
  const double = (num) => {
    // num.val =  num.val * 2;
    // return num;
    const newNum = {...num, val: num.val * 2}
    return newNum;
  }

  const newNum = double(num);
  console.log('newNum: ' , newNum, 'num: ', num);

  console.log(newNum === num);

  return (
    <>
      <h3>不変性（Immutability）</h3>
      
    </>
  );
};

export default Example;
