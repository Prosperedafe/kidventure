import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "../components/Navigators/MyTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Home";
import Settings from "./Settings";
import Profile from "./Profile";
import Community from "./Community";
import { StyleSheet, Text, View } from "react-native";
import Tracking from "./Tracking";
import Alerts from "./Alerts";
import { COLORS, FONT } from "../constants/theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={({ route }) => ({
          // tabBarLabel: getTabBarLabel(route),
          // tabBarIcon: getTabBarIcon(route),
          headerShown: false,
        })}
      >
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarLabel: getTabBarLabel(route),
          // tabBarIcon: getTabBarIcon(route),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            ...styles.container,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.primary : "transparent",
                    ...styles.top,
                  }}
                ></View>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M17.8735 22.75H6.2935C3.5535 22.75 1.3335 20.52 1.3335 17.78V10.37C1.3335 9.00997 2.1735 7.29997 3.2535 6.45997L8.6435 2.25997C10.2635 0.999974 12.8535 0.939974 14.5335 2.11997L20.7135 6.44997C21.9035 7.27997 22.8335 9.05997 22.8335 10.51V17.79C22.8335 20.52 20.6135 22.75 17.8735 22.75ZM9.5635 3.43997L4.1735 7.63997C3.4635 8.19997 2.8335 9.46997 2.8335 10.37V17.78C2.8335 19.69 4.3835 21.25 6.2935 21.25H17.8735C19.7835 21.25 21.3335 19.7 21.3335 17.79V10.51C21.3335 9.54997 20.6435 8.21997 19.8535 7.67997L13.6735 3.34997C12.5335 2.54997 10.6535 2.58997 9.5635 3.43997Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                  <path
                    d="M12.0835 18.75C11.6735 18.75 11.3335 18.41 11.3335 18V15C11.3335 14.59 11.6735 14.25 12.0835 14.25C12.4935 14.25 12.8335 14.59 12.8335 15V18C12.8335 18.41 12.4935 18.75 12.0835 18.75Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                </svg>
                <Text
                  style={{
                    color: focused ? `#0F0D00` : `#9D9D9D`,
                    ...styles.tabText,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.primary : "transparent",
                    ...styles.top,
                  }}
                ></View>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.3702 12.78C12.3002 12.77 12.2102 12.77 12.1302 12.78C10.3702 12.72 8.97021 11.28 8.97021 9.50998C8.97021 7.69998 10.4302 6.22998 12.2502 6.22998C14.0602 6.22998 15.5302 7.69998 15.5302 9.50998C15.5202 11.28 14.1302 12.72 12.3702 12.78Z"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9898 19.3801C17.2098 21.0101 14.8498 22.0001 12.2498 22.0001C9.64977 22.0001 7.28977 21.0101 5.50977 19.3801C5.60977 18.4401 6.20977 17.5201 7.27977 16.8001C10.0198 14.9801 14.4998 14.9801 17.2198 16.8001C18.2898 17.5201 18.8898 18.4401 18.9898 19.3801Z"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.25 22C17.7728 22 22.25 17.5228 22.25 12C22.25 6.47715 17.7728 2 12.25 2C6.72715 2 2.25 6.47715 2.25 12C2.25 17.5228 6.72715 22 12.25 22Z"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Text
                  style={{
                    color: focused ? `#0F0D00` : `#9D9D9D`,
                    ...styles.tabText,
                  }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.primary : "transparent",
                    ...styles.top,
                  }}
                ></View>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M18.4171 7.16C18.3571 7.15 18.2871 7.15 18.2271 7.16C16.8471 7.11 15.7471 5.98 15.7471 4.58C15.7471 3.15 16.8971 2 18.3271 2C19.7571 2 20.9071 3.16 20.9071 4.58C20.8971 5.98 19.7971 7.11 18.4171 7.16Z"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.3869 14.4399C18.7569 14.6699 20.2669 14.4299 21.3269 13.7199C22.7369 12.7799 22.7369 11.2399 21.3269 10.2999C20.2569 9.58992 18.7269 9.34991 17.3569 9.58991"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.38697 7.16C6.44697 7.15 6.51697 7.15 6.57697 7.16C7.95697 7.11 9.05697 5.98 9.05697 4.58C9.05697 3.15 7.90697 2 6.47697 2C5.04697 2 3.89697 3.16 3.89697 4.58C3.90697 5.98 5.00697 7.11 6.38697 7.16Z"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.41693 14.4399C6.04693 14.6699 4.53693 14.4299 3.47693 13.7199C2.06693 12.7799 2.06693 11.2399 3.47693 10.2999C4.54693 9.58992 6.07693 9.34991 7.44693 9.58991"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.4171 14.63C12.3571 14.62 12.2871 14.62 12.2271 14.63C10.8471 14.58 9.74707 13.45 9.74707 12.05C9.74707 10.62 10.8971 9.46997 12.3271 9.46997C13.7571 9.46997 14.9071 10.63 14.9071 12.05C14.8971 13.45 13.7971 14.59 12.4171 14.63Z"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3272 17.7799C13.7372 16.7199 11.1072 16.7199 9.50721 17.7799C8.09721 18.7199 8.09721 20.2599 9.50721 21.1999C11.1072 22.2699 13.7272 22.2699 15.3272 21.1999"
                    stroke={focused ? `#0F0D00` : `#9D9D9D`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Text
                  style={{
                    color: focused ? `#0F0D00` : `#9D9D9D`,
                    ...styles.tabText,
                  }}
                >
                  Community
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tracking"
          component={Tracking}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.primary : "transparent",
                    ...styles.top,
                  }}
                ></View>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.5835 22.75C6.6535 22.75 1.8335 17.93 1.8335 12C1.8335 6.07 6.6535 1.25 12.5835 1.25C18.5135 1.25 23.3335 6.07 23.3335 12C23.3335 17.93 18.5135 22.75 12.5835 22.75ZM12.5835 2.75C7.4835 2.75 3.3335 6.9 3.3335 12C3.3335 17.1 7.4835 21.25 12.5835 21.25C17.6835 21.25 21.8335 17.1 21.8335 12C21.8335 6.9 17.6835 2.75 12.5835 2.75Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                  <path
                    d="M16.2936 15.93C16.1636 15.93 16.0336 15.9 15.9136 15.82L12.8136 13.97C12.0436 13.51 11.4736 12.5 11.4736 11.61V7.51001C11.4736 7.10001 11.8136 6.76001 12.2236 6.76001C12.6336 6.76001 12.9736 7.10001 12.9736 7.51001V11.61C12.9736 11.97 13.2736 12.5 13.5836 12.68L16.6836 14.53C17.0436 14.74 17.1536 15.2 16.9436 15.56C16.7936 15.8 16.5436 15.93 16.2936 15.93Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                </svg>
                <Text
                  style={{
                    color: focused ? `#0F0D00` : `#9D9D9D`,
                    ...styles.tabText,
                  }}
                >
                  Tracking
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.primary : "transparent",
                    ...styles.top,
                  }}
                ></View>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.75 15.75C10.68 15.75 9 14.07 9 12C9 9.93 10.68 8.25 12.75 8.25C14.82 8.25 16.5 9.93 16.5 12C16.5 14.07 14.82 15.75 12.75 15.75ZM12.75 9.75C11.51 9.75 10.5 10.76 10.5 12C10.5 13.24 11.51 14.25 12.75 14.25C13.99 14.25 15 13.24 15 12C15 10.76 13.99 9.75 12.75 9.75Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                  <path
                    d="M15.96 22.19C15.75 22.19 15.54 22.16 15.33 22.11C14.71 21.94 14.19 21.55 13.86 21L13.74 20.8C13.15 19.78 12.34 19.78 11.75 20.8L11.64 20.99C11.31 21.55 10.79 21.95 10.17 22.11C9.54 22.28 8.89 22.19 8.34 21.86L6.62 20.87C6.01 20.52 5.57 19.95 5.38 19.26C5.2 18.57 5.29 17.86 5.64 17.25C5.93 16.74 6.01 16.28 5.84 15.99C5.67 15.7 5.24 15.53 4.65 15.53C3.19 15.53 2 14.34 2 12.88V11.12C2 9.66004 3.19 8.47004 4.65 8.47004C5.24 8.47004 5.67 8.30004 5.84 8.01004C6.01 7.72004 5.94 7.26004 5.64 6.75004C5.29 6.14004 5.2 5.42004 5.38 4.74004C5.56 4.05004 6 3.48004 6.62 3.13004L8.35 2.14004C9.48 1.47004 10.97 1.86004 11.65 3.01004L11.77 3.21004C12.36 4.23004 13.17 4.23004 13.76 3.21004L13.87 3.02004C14.55 1.86004 16.04 1.47004 17.18 2.15004L18.9 3.14004C19.51 3.49004 19.95 4.06004 20.14 4.75004C20.32 5.44004 20.23 6.15004 19.88 6.76004C19.59 7.27004 19.51 7.73004 19.68 8.02004C19.85 8.31004 20.28 8.48004 20.87 8.48004C22.33 8.48004 23.52 9.67004 23.52 11.13V12.89C23.52 14.35 22.33 15.54 20.87 15.54C20.28 15.54 19.85 15.71 19.68 16C19.51 16.29 19.58 16.75 19.88 17.26C20.23 17.87 20.33 18.59 20.14 19.27C19.96 19.96 19.52 20.53 18.9 20.88L17.17 21.87C16.79 22.08 16.38 22.19 15.96 22.19ZM12.75 18.49C13.64 18.49 14.47 19.05 15.04 20.04L15.15 20.23C15.27 20.44 15.47 20.59 15.71 20.65C15.95 20.71 16.19 20.68 16.39 20.56L18.12 19.56C18.38 19.41 18.58 19.16 18.66 18.86C18.74 18.56 18.7 18.25 18.55 17.99C17.98 17.01 17.91 16 18.35 15.23C18.79 14.46 19.7 14.02 20.84 14.02C21.48 14.02 21.99 13.51 21.99 12.87V11.11C21.99 10.48 21.48 9.96004 20.84 9.96004C19.7 9.96004 18.79 9.52004 18.35 8.75004C17.91 7.98004 17.98 6.97004 18.55 5.99004C18.7 5.73004 18.74 5.42004 18.66 5.12004C18.58 4.82004 18.39 4.58004 18.13 4.42004L16.4 3.43004C15.97 3.17004 15.4 3.32004 15.14 3.76004L15.03 3.95004C14.46 4.94004 13.63 5.50004 12.74 5.50004C11.85 5.50004 11.02 4.94004 10.45 3.95004L10.34 3.75004C10.09 3.33004 9.53 3.18004 9.1 3.43004L7.37 4.43004C7.11 4.58004 6.91 4.83004 6.83 5.13004C6.75 5.43004 6.79 5.74004 6.94 6.00004C7.51 6.98004 7.58 7.99004 7.14 8.76004C6.7 9.53004 5.79 9.97004 4.65 9.97004C4.01 9.97004 3.5 10.48 3.5 11.12V12.88C3.5 13.51 4.01 14.03 4.65 14.03C5.79 14.03 6.7 14.47 7.14 15.24C7.58 16.01 7.51 17.02 6.94 18C6.79 18.26 6.75 18.57 6.83 18.87C6.91 19.17 7.1 19.41 7.36 19.57L9.09 20.56C9.3 20.69 9.55 20.72 9.78 20.66C10.02 20.6 10.22 20.44 10.35 20.23L10.46 20.04C11.03 19.06 11.86 18.49 12.75 18.49Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                </svg>
                <Text
                  style={{
                    color: focused ? `#0F0D00` : `#9D9D9D`,
                    ...styles.tabText,
                  }}
                >
                  Settings
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Alerts"
          component={Alerts}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.primary : "transparent",
                    ...styles.top,
                  }}
                ></View>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9173 3C13.9173 2.44772 13.4696 2 12.9173 2C12.3651 2 11.9173 2.44772 11.9173 3V3.57087C8.52522 4.05593 5.91734 6.97223 5.91734 10.4989L5.91734 14.4993C5.91734 14.4993 5.91735 14.4991 5.91734 14.4993C5.91725 14.5012 5.91657 14.5146 5.91223 14.5409C5.90702 14.5724 5.89778 14.6152 5.88253 14.6703C5.8516 14.782 5.80238 14.9211 5.73361 15.0855C5.59575 15.4151 5.40139 15.7947 5.18643 16.1776C4.78229 16.8975 4.57857 17.7554 4.73151 18.5712C4.89279 19.4316 5.44659 20.1819 6.39241 20.542C7.23731 20.8637 8.36197 21.1579 9.84721 21.333C9.88254 21.3637 9.92433 21.3987 9.97234 21.4371C10.1226 21.5574 10.3373 21.7132 10.6087 21.8682C11.1473 22.176 11.9436 22.5 12.9173 22.5C13.8911 22.5 14.6874 22.176 15.226 21.8682C15.4973 21.7132 15.7121 21.5574 15.8624 21.4371C15.9104 21.3987 15.9521 21.3637 15.9875 21.333C17.4727 21.1579 18.5974 20.8637 19.4423 20.542C20.3881 20.1819 20.9419 19.4316 21.1032 18.5712C21.2561 17.7554 21.0524 16.8975 20.6483 16.1776C20.4333 15.7947 20.2389 15.4151 20.1011 15.0855C20.0323 14.9211 19.9831 14.782 19.9522 14.6703C19.9369 14.6152 19.9277 14.5724 19.9225 14.5409C19.9181 14.5146 19.9175 14.5015 19.9174 14.4996C19.9173 14.4994 19.9174 14.4996 19.9174 14.4996L19.9173 14.4911V10.4994C19.9173 6.9728 17.3095 4.05601 13.9173 3.57088V3ZM7.91734 10.4989C7.91734 7.73772 10.1557 5.5 12.9173 5.5C15.6789 5.5 17.9173 7.73809 17.9173 10.4994V14.5C17.9173 14.9629 18.0908 15.4623 18.2559 15.8571C18.4353 16.2861 18.6704 16.74 18.9043 17.1566C19.1316 17.5616 19.1858 17.9444 19.1374 18.2027C19.0973 18.4166 18.9905 18.574 18.7306 18.6729C17.6557 19.0822 15.8413 19.5 12.9173 19.5C9.99342 19.5 8.17895 19.0822 7.10409 18.6729C6.84423 18.574 6.73735 18.4166 6.69727 18.2027C6.64884 17.9444 6.70306 17.5616 6.93043 17.1566C7.16428 16.74 7.39937 16.2861 7.57876 15.8571C7.74389 15.4623 7.91734 14.9629 7.91734 14.5V10.4989Z"
                    fill={focused ? `#0F0D00` : `#9D9D9D`}
                  />
                </svg>
                <Text
                  style={{
                    color: focused ? `#0F0D00` : `#9D9D9D`,
                    ...styles.tabText,
                  }}
                >
                  Alerts
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 4,
    paddingTop: 4,
    paddingHorizontal: 16,
  },
  tabContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "",
    gap: 4,
  },
  top: {
    height: 4,
    width: "100%",
    borderRadius: "4px",
  },
  tabText: {
    fontSize: 8,
    fontFamily: FONT.DosisSemiBold,
  },
});
