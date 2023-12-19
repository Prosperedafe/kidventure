import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import { TextInput } from "react-native";
import styles from "./Settings.style";
import Search from "./components/Search";
import Profile from "../../assets/images/profile.png";
import SettingsList from "./components/SettingsList";

export default function Settings() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Settings</Text>
        <Search />

        <View style={styles.profileContainer}>
          <View>
            <Image source={Profile} alt="" />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileText1}>Ciara</Text>
            <Text style={styles.profileText2}>prettyciara@gmail.com</Text>
          </View>
        </View>

        <View style={styles.full}>
          <Text style={styles.settingsListTitle}>Preference</Text>
          <View style={styles.AllSettings}>
          <SettingsList 
          title="Security" 
          text="Setup or change sign in options" 
          />
          <SettingsList 
          title="Notifications" 
          text="Change when and how you receive notifications" 
          />
          <SettingsList 
          title="Settings" 
          text="Manage account settings" 
          />
          <SettingsList 
          title="Connected Accounts" 
          text="Connect social accounts" 
          />
          </View>
        </View>

        <View style={styles.full}>
          <Text style={styles.settingsListTitle}>Help</Text>
          <View style={styles.AllSettings}>
          <SettingsList 
          title="Support" 
          text="Call, chat or open a support ticket" 
          />
          <SettingsList 
          title="FAQs" 
          text="Learn more about Kidventurer" 
          />
          <SettingsList 
          title="Legal" 
          text="Review Kidventurer legal documents" 
          />
          <SettingsList 
          title="Logout" 
          text="Logout of your Kidventurer account" 
          />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
