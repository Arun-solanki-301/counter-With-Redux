import React , {Component} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./style.js";
import {connect} from 'react-redux'
import {increaseNumberAction,decreaseNumberAction}  from '../MyAssets/index'
import { SafeAreaView } from "react-native-safe-area-context";

class Home extends Component{
  render() {
    const para = 10;
  return (
    <View>
      <Text style={styles.head}>{this.props.gettech}</Text>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.btn}
          onPress={()=>{this.props.increaseNumber(para)}}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <Text style = {styles.countText}>{this.props.Numbers}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={()=>{this.props.decreaseNumber()}} >-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
}

const mapStateToProps=(state)=>{
  return{
    Numbers:state.Number,
    gettech : state.gettech
  }
}

const mapDispatchToProps=(dispatch)=>{
 
      return{
        increaseNumber:(para)=>{dispatch(increaseNumberAction(para))},
        decreaseNumber:()=>{dispatch(decreaseNumberAction())}
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

