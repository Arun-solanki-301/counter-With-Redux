import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "../action/actions.js";
import styles from "./style.js";

function Home() {
  const mystate = useSelector((state) => {
    state;
  });
  const dispatch = useDispatch();
  console.log(
    useSelector((state) => {
      state;
    }),
    mystate,
    "home page"
  );
  return (
    <View>
      <Text style={styles.head}>Counter</Text>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(incNumber())}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <TextInput placeholder="0" style={styles.Input} value={mystate} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={() => dispatch(decNumber())}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
