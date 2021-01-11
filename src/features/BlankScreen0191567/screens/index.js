import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_5: "", TextInput_3: "" }
  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Password"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Email"
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <Button
        title="Submit"
        color="#aaacb1"
        style={styles.Button_9}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    overflow: "scroll",
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    borderColor: "#5c5c5c",
    borderStyle: "dashed",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  TextInput_5: {
    width: 200,
    height: 0,
    marginTop: "50%",
    marginBottom: "0%",
    alignSelf: "center",
    fontFamily: "Merriweather-Bold",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  TextInput_3: {
    width: 200,
    height: 0,
    marginTop: "30%",
    marginBottom: "0%",
    alignSelf: "center",
    fontFamily: "Merriweather-Bold",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Button_9: {
    width: 50,
    marginTop: "70%",
    marginBottom: "0%",
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
    borderColor: "#5f5d5d",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
