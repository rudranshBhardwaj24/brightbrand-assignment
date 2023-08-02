import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseOperationCount } from "./utils/totalCountSlice";

function App() {
  const [selectedOperation, setSelectedOperation] = useState("+");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(null);
  const operation = useSelector((store) => store.totalOperation.operationCount);
  const dispatch = useDispatch();

  const handleSum = () => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
      dispatch(increaseOperationCount());
      setSelectedOperation("+");
    } else {
      setResult(null);
    }
  };

  const handleSubtract = () => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 - num2);
      setSelectedOperation("-");
      dispatch(increaseOperationCount());
    } else {
      setResult(null);
    }
  };

  const handleDivide = () => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    if (num2 !== 0 && !isNaN(num1) && !isNaN(num2)) {
      setResult(num1 / num2);
      setSelectedOperation("/");
      dispatch(increaseOperationCount());
    } else {
      setResult("Cannot divide by zero");
    }
  };

  const handleMultiply = () => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 * num2);
      setSelectedOperation("*");
      dispatch(increaseOperationCount());
    } else {
      setResult(null);
    }
  };

  const handleReset = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult(null);
    setSelectedOperation("+");
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="border-4 border-black p-8 rounded-xl">
          <div className="flex gap-16 flex-col">
            <h1 className="text-white bg-gray-600 p-4 rounded-md w-48">
              Total Operations: {operation}
            </h1>
            <div className="flex gap-20 justify-center">
              <input
                type="number"
                placeholder="Input 1"
                onChange={(e) => setFirstNumber(e.target.value)}
                value={firstNumber}
                className="text-white bg-gray-600 p-4 rounded-md text-center"
              />
              <div className="font-bold border border-black rounded-full w-10 h-10 flex items-center justify-center bg-blue-600 text-2xl text-white">
                {selectedOperation}
              </div>
              <input
                type="number"
                placeholder="Input 2"
                onChange={(e) => setSecondNumber(e.target.value)}
                value={secondNumber}
                className="text-white bg-gray-600 p-4 rounded-md text-center"
              />
            </div>
            <div className="flex gap-20 justify-center ">
              <button
                onClick={handleSum}
                className=" font-bold border border-black rounded-full w-10 h-10 flex items-center justify-center bg-blue-600 text-2xl text-white"
              >
                +
              </button>
              <button
                onClick={handleSubtract}
                className=" font-bold border border-black rounded-full w-10 h-10 flex items-center justify-center  bg-blue-600 text-2xl text-white"
              >
                -
              </button>
              <button
                onClick={handleDivide}
                className="font-bold border border-black rounded-full w-10 h-10 flex items-center justify-center  bg-blue-600 text-2xl text-white"
              >
                /
              </button>
              <button
                onClick={handleMultiply}
                className="font-bold border border-black rounded-full w-10 h-10 flex items-center justify-center  bg-blue-600 text-2xl text-white"
              >
                *
              </button>
            </div>
            <div className="flex gap-60 justify-center">
              <button
                onClick={handleReset}
                className="flex justify-start p-4 bg-blue-600 text-white rounded-lg h-20 items-center"
              >
                Reset
              </button>
              {result !== null && (
                <h1
                  className={
                    result === null
                      ? "hidden"
                      : "text-white text-2xl bg-gray-600 p-4  rounded-lg justify-center text-center items-center flex-wrap"
                  }
                >
                  Result: {result}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
