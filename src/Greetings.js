import React from 'react';

const Greetings = () => {
let greetings = '';
let curDate = new Date();
curDate = curDate.getHours();

let cssStyle = [];
window.check = cssStyle;
if(curDate <= 12){
greetings = "Good Morning";
cssStyle.color = 'green';
}
if(curDate >= 12){
  greetings = "Good After Noon";
  cssStyle.color = 'red';
  cssStyle.fontSize = '40px';
  }
  return(
    <h1>Hello Sohaib <span style={cssStyle}>{`${greetings}`}</span> </h1>
  );
}

export default Greetings;