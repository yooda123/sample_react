const Example = () => {
  // 関数型（純粋関数）
  // POINT fn(決まった引数) -> 決まった戻り値
  // POINT 関数外の状態（データ）は参照・変更しない。
  // POINT 関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。
  // 不変性()
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。
  
  const val1 = 2, val2 =  30;
  const add = (val1, val2) => {
    return val1 + val2;
  }

  return (
    <>
      <h3>純粋関数</h3>
      <p>{add(val1, val2)}</p>
    </>
  );
};

export default Example;
