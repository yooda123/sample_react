import { useRef, useState } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  // console.log(inputRef);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  return (
    <>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "80%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        playing ? videoRef.current.pause() : videoRef.current.play();
        setPlaying(!playing);
      }}>
        { playing ? 'Stop' : 'Start'}
      </button>
    </>
  )
}

const Case3 = () => {
  const createTimestamp = () => new Date().getTime();
  const [timestamp, setTimestamp] = useState(createTimestamp());
  const ref = useRef(createTimestamp());

  const updateState = () => {
    setTimestamp(createTimestamp());
  }
  const updateRef = () => {
    ref.current = createTimestamp();
    console.log("ref.current --> ", ref.current);
  }

  return (
    <>
      <h3>ユースケース3</h3>
      <p>
        state: {timestamp}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </p>
    </>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
