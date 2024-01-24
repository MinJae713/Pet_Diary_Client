import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./authenticate/Login";
import Membership from "./authenticate/Join";
import MainTab from "./navigator/MainTab";
import useCachedResources from "./useCachedResources";

const Stack = createStackNavigator();

const App = () => {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Membership"
            component={Membership}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return null;
  }
};

export default App;
