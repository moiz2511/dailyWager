import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Colors from "./constants/Colors";

export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      choosenDate: "",
    };
  }

  handlePicker = (datech) => {
    this.setState({
      isVisible: false,
      choosenDate: moment(datech).format("DD,MM,YYYY"),
    });
    this.props.getChDate(this.state.choosenDate);
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showPicker}>
          <Text style={{ color: Colors.primaryColor, fontWeight: "bold" }}>
            Click to change date
          </Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
});
