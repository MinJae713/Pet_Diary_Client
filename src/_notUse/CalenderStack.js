import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarEdit from "../calender/edit/CalenderEdit";
import Calendar from "../calender/retrieve/Calender";

const Stack = createStackNavigator();

const CalenderStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Retrieve">
        <Stack.Screen
          name="Retrieve"
          component={Calendar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Edit"
          component={CalendarEdit}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CalenderStack;
