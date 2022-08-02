import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, View, Text, TouchableHighlight } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Screen = ({ navigation, route }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>{route.name}</Text>
  </View>
);

function Page1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Stack 2"
        onPress={() => navigation.navigate("Stack 2")}
      />
    </View>
  );
}
//hhgg

function Media({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Stack 1"
        onPress={() => navigation.navigate("Stack 1")}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNav = () => (
  <Drawer.Navigator id="drwr">
    <Drawer.Screen
      name="Drawer 1"
      options={({ route }) => ({
        headerTitle: getFocusedRouteNameFromRoute(route),
      })}
    >
      {() => (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
          <BottomTab.Screen name="Bottom Tab 1">
            {() => (
              <TopTab.Navigator>
                <TopTab.Screen name="Top Tab 1" component={Page1} />
                <TopTab.Screen name="Top Tab 2" component={Screen} />
                <TopTab.Screen name="Top Tab 3" component={Screen} />
              </TopTab.Navigator>
            )}
          </BottomTab.Screen>
          <BottomTab.Screen name="Bottom Tab 2" component={Screen} />
          <BottomTab.Screen name="Bottom Tab 3" component={Screen} />
        </BottomTab.Navigator>
      )}
    </Drawer.Screen>
    <Drawer.Screen name="Drawer 2">
      {({ navigation, route }) => (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>{route.name}</Text>
          <Button
            title="Go to Stack 2"
            onPress={() => navigation.navigate("Stack 2")}
          />
        </View>
      )}
    </Drawer.Screen>
    <Drawer.Screen name="Drawer 3" component={Screen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Stack 1"
          component={HomeNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stack 2"
          options={{ presentation: "modal" }}
          component={Media}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
