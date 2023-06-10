import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      initialRouteName="start-workout"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analysis",
          tabBarIcon: ({ color }) => (
            <MaterialIcon
              size={28}
              style={{ marginBottom: -3 }}
              name="chart-timeline-variant"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="start-workout"
        options={{
          title: "Start Workout",
          tabBarIcon: ({ color }) => (
            <View
              id="run-container"
              style={{ backgroundColor: color, borderRadius: 9999, padding: 2 }}
            >
              <MaterialIcon
                size={24}
                style={{ marginBottom: -3 }}
                name="run"
                color={"white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <MaterialIcon
              size={28}
              style={{ marginBottom: -3 }}
              name="history"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
}
