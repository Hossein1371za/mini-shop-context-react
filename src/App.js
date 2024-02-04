import React from "react";
import { DataProvider } from "./components/context/Context";

import Core from "./Core";

const App = () => {
  return (
    <DataProvider>
      <div className="app">
        <Core />
      </div>
    </DataProvider>
  );
};

export default App;
