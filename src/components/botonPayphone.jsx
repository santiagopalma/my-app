import React, { useState } from "react";

import Payphone from "./Payphone";
const botonPayphone = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkout, setCheckOut] = useState(false);

  return (
    
    <div className="App">
      {checkout ? (
        <Payphone />
      ) : (
        <button className="btn btn-block btn-outline-primary" data-toggle="modal"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Payphone
        </button>
      )}
    </div>
  );
}

export default botonPayphone
