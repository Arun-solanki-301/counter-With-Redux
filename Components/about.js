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

class About extends Component{
    render() {
    return(
        <View>
            <Text style = {styles.countText}>{Numbers}</Text>
        </View>
    )
    }       
}

const mapStateToProps=(state)=>{
    return{
      Numbers:state.Number,
      gettech : state.gettech
    }
  }

export default About;

