import React, { useCallback, useEffect, useMemo, useState } from "react";

const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  // const [result,setResult]=useState(0);
  // useEffect(()=>{
  //     const double=(counterOne)=>{
  //         for(let i=0;i<2000000000;i++){}
  //         setResult(counterOne*2)
  //     }
  //     double(counterOne)
  // },[counterOne])

  const delay = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) {}
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={() => setCounterOne(counterOne + 1)}>
        counterOne--{counterOne}
      </button>
      {delay ? "even" : "odd"}
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        counterTwo--{counterTwo}
      </button>
    </div>
  );
};

export default Memo;
