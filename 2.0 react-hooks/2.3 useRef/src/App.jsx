import React from "react";
import RefAsCounter from "./RefAsCounter";
import RefAsInput from "./RefAsInput";
import RefAsDOMInteraction from "./RefAsDOMInteraction";

function App() {
  return (
    <>
      <div>
        <RefAsDOMInteraction />
      </div>
      {/* <div>
        <RefAsInput />
      </div>
      <div>
        <RefAsCounter />
      </div> */}
    </>
  );
}

export default App;
