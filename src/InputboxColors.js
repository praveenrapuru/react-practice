import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyInput() {
  const [inputRed, setInputRed] = useState(false);
  const [inputValueRed, setInputValueRed] = useState('');
  const [inputYellow, setInputYellow] = useState(false);
  const [inputValueYellow, setInputValueYellow] = useState('');
  const [inputGreen,setInputGreen] = useState(false);
  const [inputValueGreen, setInputValueGreen] = useState('');

  // Red color
  const mouseEnterRed = () => {
    setInputRed(true);
  };

  const mouseLeaveRed = () => {
    setInputRed(false);
  };

  const changeRed = (event) => {
    setInputValueRed(event.target.value);  
  };
  const inputStyleRed = {
    color: inputRed ? 'red' : 'black',
  };
  // Yellow color 
  const mouseEnterYellow = () => {
    setInputYellow(true);
  };
  const mouseLeaveYellow = () => {
    setInputYellow(false);
  };
  const changeYellow = (event) => {
    setInputValueYellow(event.target.value);
  };
  const inputStyleYellow ={
    color: inputYellow ? 'yellow' : 'black',
  };

  // Green color

  const mouseEnterGreen = () => {
    setInputGreen(true);
  };

  const mouseLeaveGreen = () => {
    setInputGreen(false);
  };

  const changeGreen = (event) => {
    setInputValueGreen(event.target.value);
  };

  const inputStyleGreen = {
    color: inputGreen ? 'green' : 'black',
  };
  return (
    <>
      <input
        type="text"
        value={inputValueRed}
        style={inputStyleRed}
        onMouseEnter={mouseEnterRed}
        onMouseLeave={mouseLeaveRed}
        onChange={changeRed}
      /><br/>
      <input 
        type="text"
        value={inputValueYellow}
        style={inputStyleYellow}
        onMouseEnter={mouseEnterYellow}
        onMouseLeave={mouseLeaveYellow}
        onChange={changeYellow}
      /><br/>
      <input
        type='text'
        value={inputValueGreen} 
        style={inputStyleGreen}
        onMouseEnter={mouseEnterGreen}
        onMouseLeave={mouseLeaveGreen}
        onChange={changeGreen} 
      />  
    </>
  );
};

export default MyInput;