import React from "react";
import {
  Menu,
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
  Text,
  Checkbox,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";

const Header = ({ items, handleCheck, title, index }) => {
  return (
  

    <View>
      <FlatList
        data={items}
        extraData={items}
        renderItem={(student) => (  <TouchableRipple
                
    onPress={()=>handleCheck(student.index, student.item.selected)}
    >
          <View style={styles.box} key={student.index}>
            <Text>{student.item.name}</Text>
            <Checkbox
              status={student.item.selected ? "checked" : "unchecked"}
              onPress={() => {
                 handleCheck(student.index, student.item.selected);
              }}
            />
          </View>
          </TouchableRipple>
        )}
      />
    </View>
    

  );
};
export default Header;

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#ccc",
    color: "#933",
    borderRadius: 10,
    padding: 10,
  },
  box: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {},
});
