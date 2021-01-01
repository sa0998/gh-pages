import React from 'react';
import Card from './Card';
import sdata from './sdata';

const Newcard = () => {
    let userselection = "Amazon Prime";
  if( userselection === "Netflix"){
  return(
  <Card 
  imgsrc={sdata[0].imgsrc}
  sname={sdata[0].sname}
  stitle={sdata[0].stitle}
  slink={sdata[0].slink}
  />
  );
  }
  else{
    return(
      <>
      <Card 
      imgsrc={sdata[1].imgsrc}
      sname={sdata[1].sname}
      stitle={sdata[1].stitle}
      slink={sdata[1].slink}
      />
      <Card 
      imgsrc={sdata[2].imgsrc}
      sname={sdata[2].sname}
      stitle={sdata[2].stitle}
      slink={sdata[2].slink}
      />
      </>
      );
  }
  };

  export default Newcard;