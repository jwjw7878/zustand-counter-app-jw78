import "./App.css";
import countStore from "./store/countStore";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";

function App() {
  const { count, increase, decrease, reset } = countStore();
  return (
    <>
      <h1>Counter-app</h1>
      <h3>* 초기 값: 1</h3>
      <main>
        <div className="count-area">{count}</div>
        <div className="btn-area">
          <button onClick={increase}>
            <FaPlus />
          </button>
          <button onClick={decrease}>
            <FaMinus />
          </button>
          <button onClick={reset}>
            <FaRotate />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
