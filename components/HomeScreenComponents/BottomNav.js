import Foundation from "@expo/vector-icons/Foundation";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
function BottomNav() {
  return (
    <View className="bg-neutral-950 h-[53px]  border-t border-neutral-500">
      <View className="flex-row items-center mt-2 justify-around">
        <View className="items-center flex-1">
          <Foundation name="home" size={25} color="white" />
          <Text className="text-white text-xs tracking-tighter">Home</Text>
        </View>
        <View className="items-center flex-1">
          <Feather name="youtube" size={25} color="white" />
          <Text className="text-white text-xs tracking-tighter">Shorts</Text>
        </View>
        <View className="items-center flex-1 mt-[-7px]">
          <Feather name="plus-circle" size={38} color="white" />
        </View>
        <View className="items-center flex-1">
          <MaterialCommunityIcons
            name="youtube-subscription"
            size={25}
            color="white"
          />
          <Text className="text-white text-xs tracking-tighter">
            Subscriptions
          </Text>
        </View>
        <View className="items-center flex-1">
          <Ionicons name="person-circle-outline" size={25} color="white" />
          <Text className="text-white text-xs tracking-tighter">You</Text>
        </View>
      </View>
    </View>
  );
}

export default BottomNav;
