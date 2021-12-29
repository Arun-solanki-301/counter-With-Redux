import React from "react";
import { Provider } from "react-redux";

import store from "./MyAssets/store";
import Home from "./Components/Home";
import About from "./Components/about";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
      {/* <About /> */}
    </Provider>
  );
};

export default App;
