import { View, Text } from "react-native";
import React from "react";
import styles from "../Settings.style";
import { TouchableOpacity } from "react-native";

export default function SettingsList({title, text}) {
  return (
    <TouchableOpacity style={styles.settingsListContainer}>
      <View>
        <Text style={styles.settingsListText1}>{title}</Text>
        <Text style={styles.settingsListText2}>
          {text}
        </Text>
      </View>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M9.879 9.00005L6.1665 5.28755L7.227 4.22705L12 9.00005L7.227 13.7731L6.1665 12.7126L9.879 9.00005Z"
          fill="#9D9D9D"
        />
      </svg>
    </TouchableOpacity>
  );
}
