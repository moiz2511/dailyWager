import React from "react";
import { FlatList, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("testWage1.db");
export default class ViewAllTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction((tx) => {
      console.log("1");
      tx.executeSql(
        "SELECT *  From getTDate",
        [],
        (tx, results) => {
          console.log("2");
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          this.setState({
            FlatListItems: temp,
          });
        },
        (tx, err) => {
          console.log("3");
          console.log(err);
        }
      );
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.2, width: "100%", backgroundColor: "#808080" }}
      />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              key={item[index]}
              style={{ backgroundColor: "white", padding: 20 }}
            >
              <Text>Table: {item[index]}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
