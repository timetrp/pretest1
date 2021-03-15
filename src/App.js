import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const checkPrime = (x) => {
  if (x < 2) return false;

  let isPrime = true;
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return isPrime;
};

const checkFibo = (x) => {
  let sum = 1;
  let prev = 1;

  if (sum === x) {
    return true;
  }

  while (sum < x) {
    let temp = sum;
    sum = sum + prev;
    prev = temp;
    if (x === sum) return true;
  }

  return false;
};
function App() {
  const [inputVal, setInputVal] = useState();
  const [mode, setMode] = useState("prime");
  const [checkStatus, setCheckStatus] = useState();

  useEffect(() => {
    if (mode === "prime") {
      setCheckStatus(checkPrime(inputVal));
    } else {
      setCheckStatus(checkFibo(inputVal));
    }
  }, [inputVal, mode]);
  const handleBlur = (e) => {
    const { value } = e.target;

    if (value) {
      setInputVal(Math.round(value));
    } else if (value < 0) {
      setInputVal(1);
    }
  };

  const handleSelect = (e) => {
    setMode(e.target.value);
  };
  return (
    <div className="App">
      <div id="col1" className="col">
        <input
          type="number"
          min="0"
          onChange={handleBlur}
          value={inputVal}
        ></input>
      </div>
      <div id="col2" className="col">
        <select onChange={handleSelect} value={mode}>
          <option value="prime">isPrime</option>
          <option value="fibo">isFibonacci</option>
        </select>
      </div>

      <div id="col3" className="col">
        {checkStatus ? "true" : "false"}
      </div>
    </div>
  );
}

export default App;
