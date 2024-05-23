import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';

const DressItem = ({ item }) => {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 7,
              backgroundColor: '#FFFFFF'
            }}
          >
            {item.name}
          </Text>
          <Text style={{ width: 60, color: "gray", fontSize: 15 }}>
            ${item.price}
          </Text>
        </View>

        <Pressable
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Pressable
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              borderColor: "#BEBEBE",
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#088F8F",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              -
            </Text>
          </Pressable>

          <Text
            style={{
              fontSize: 19,
              color: "#088F8F",
              paddingHorizontal: 8,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            0
          </Text>

          <Pressable
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              borderColor: "#BEBEBE",
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#088F8F",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              +
            </Text>
          </Pressable>
        </Pressable>

        <Pressable>
          <Text
            style={{
              borderColor: "gray",
              borderRadius: 4,
              borderWidth: 0.8,
              marginVertical: 10,
              color: "#088F8F",
              textAlign: "center",
              padding: 5,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Add
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});