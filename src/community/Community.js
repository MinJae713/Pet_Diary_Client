import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import Screen from "./Screen";
import NoteDetail from "../components/community/NoteDetail";
import NoteProvider from "../components/community/contexts/NoteProvider";
import propTypes from "prop-types";
const Stack = createStackNavigator();

const Community = ({ route }) => {
  let client = route.params.client;
  return (
    <NavigationContainer independent={true}>
      <NoteProvider user={client}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "커뮤니티" }}
          />
          <Stack.Screen
            name="Screen"
            component={Screen}
            options={{ title: "게시판" }}
            initialParams={{
              user: client,
            }}
          />
          <Stack.Screen
            name="NoteDetail"
            component={NoteDetail}
            options={{ title: "글 내용" }}
          />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
};

Community.propTypes = {
  route: propTypes.object.isRequired,
};

export default Community;
