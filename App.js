import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Components/Home";
import store from "./Store";
import { Provider } from "react-redux";
import Changethenumber from './Reducers/updown' 
import UseRed from "./Components/Usereducers";

// const stores = createStore({
//   Changethenumber,
// }
// );

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Provider store={store}>
          <Home />
        </Provider>
      </View>
    </SafeAreaView>
  );
}
