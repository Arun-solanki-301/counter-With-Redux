import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    main: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#eee",
      padding: 15,
      justifyContent: "space-around",
    },
    head: {
      fontSize: 32,
      textAlign: "center",
      marginVertical: 15,
      marginTop : 50
    },
    Input: {
      borderWidth: 2,
      width: 200,
      textAlign: "center",
      fontSize: 25,
    },
    btn: {
      borderWidth: 1,
      padding: 15,
      backgroundColor: "blue",
      borderRadius: 5,
      width: 50,
      height: 50,
      textAlign: "center",
    },
    btnText: {
      fontSize: 50,
      color: "#fff",
      marginTop: -20,
      marginLeft: -5,
    }, 
    countText : {
      fontSize : 45,
    }
  });
  export default styles;