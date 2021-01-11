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
  state = { TextInput_3: "", TextInput_5: "" }
  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_11}>
        <TextInput
          placeholder="Email"
          style={styles.TextInput_3}
          value={this.state.TextInput_3}
          onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
        />
        <TextInput
          placeholder="Password"
          style={styles.TextInput_5}
          value={this.state.TextInput_5}
          onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
        />
        <Button
          title="Submit"
          color="#aaacb1"
          style={styles.Button_9}
          onPress={() => alert("Pressed!")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    overflow: "visible",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "center",
    borderColor: "#5c5c5c",
    borderStyle: "dashed",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  View_11: {
    width: "020%",
    height: "20%",
    marginTop: 250,
    marginBottom: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  TextInput_3: {
    width: 200,
    height: 0,
    marginTop: 0,
    marginBottom: "5%",
    alignSelf: "flex-start",
    fontFamily: "Merriweather-Bold",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  TextInput_5: {
    width: 200,
    height: 0,
    marginTop: 40,
    marginBottom: "5%",
    alignSelf: "flex-start",
    fontFamily: "Merriweather-Bold",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Button_9: {
    width: 50,
    marginTop: 80,
    marginBottom: "0%",
    paddingTop: 5,
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
