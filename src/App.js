import { useEffect, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };


  useEffect(() => {
    console.log("컴포넌트 업데이트");
  }, []);

  return (

    <div className="App">
      <h1>Simple Counter</h1>
        <section>
          <input value={text} onChange={handleSetText}/>
        </section>
        <section>
          <Viewer count={count}/>
          {count % 2 ===0 && <Even />}
        </section>
        <section>
          <Controller handleSetCount={handleSetCount}/>
        </section>
    </div>
  );
};

export default App;