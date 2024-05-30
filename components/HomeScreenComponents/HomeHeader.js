import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

function HomeHeader() {
  return (
    <View className="flex-row items-center justify-between mt-2 mb-2">
      <View className="flex-row items-center space-x-[-12px]">
        <Image
          source={require("../../assets/youtubeLogo.png")}
          className=" h-6  w-16"
        />
        <Text className="text-white font-semibold text-2xl tracking-tighter">
          YouTube
        </Text>
      </View>
      <View className="flex-row items-center space-x-5 pr-4">
        <Feather name="cast" size={22} color="white" />
        <Feather name="bell" size={22} color="white" />
        <Feather name="search" size={22} color="white" />
      </View>
    </View>
  );
}

export default HomeHeader;
