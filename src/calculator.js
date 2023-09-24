import React, { useState } from 'react';

function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Invalid operator');
        break;
    }
  };

  return (
    <div className="calculator">
      <input
        type="number"
        className="input-field"
        placeholder="Enter number 1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <div className="operator-buttons">
        <button onClick={() => setOperator('+')}>+</button>
        <button onClick={() => setOperator('-')}>-</button>
        <button onClick={() => setOperator('*')}>*</button>
        <button onClick={() => setOperator('/')}>/</button>
      </div>
      <input
        type="number"
        className="input-field"
        placeholder="Enter number 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button className="calculate-button" onClick={calculate}>=</button>
      <div className="result">
        Result: <span className="result-value">{result}</span>
      </div>
    </div>
  );
}

export default Calculator;
