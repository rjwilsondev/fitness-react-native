import { StyleSheet, Switch } from "react-native";
import { Text, View } from "../../components/Themed";
import { useAuth } from "../../context/auth";
import { useColorScheme } from "nativewind";

export default function TabOneScreen() {
  const { signOut } = useAuth();
  const { toggleColorScheme, colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === "dark"

  return (
    <View style={styles.container}>

      <Text className="text-blue-500 text-2xl" onPress={signOut}>
        {isDarkMode.toString()}
      </Text>
      <Text className="text-blue-500" >Tab One</Text>

      <Text className="text-blue-500 text-2xl" >test test</Text>
      <Switch value={isDarkMode} onValueChange={() => {
        toggleColorScheme()
      }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
