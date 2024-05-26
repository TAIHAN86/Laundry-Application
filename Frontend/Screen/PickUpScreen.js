import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>Enter Address</Text>
      <TextInput
        style={{
          padding: 40,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 80,
          borderRadius: 9,
          margin: 10,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Pick Up Date
      </Text>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2024-04-21")}
        endDate={new Date("2024-04-28")}
        initialSelectedDate={new Date("2024-04-21")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Select Time
      </Text>
    </SafeAreaView>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
