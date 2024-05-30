import { View, Text, Image, FlatList } from "react-native";
import { useEffect } from "react";
import { LogBox } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

function ShortVideosSection({ videos }) {
  const shortVids = videos.slice(35, 40);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View className="mb-7">
      <View className="flex-row items-center space-x-4 mt-2 mx-5 ">
        <Image
          source={require("../../assets/ytShortsLogo.png")}
          className="h-[32px] w-[26px]"
        />
        <Text className="text-white font-bold text-lg">Shorts</Text>
      </View>

      <View className="mt-2 mx-2">
        <FlatList
          data={shortVids}
          renderItem={(el) => <ShortVideoCard el={el.item} />}
          keyExtractor={(item) => item.videoId}
          numColumns={2}
        />
      </View>
    </View>
  );
}
export default ShortVideosSection;

function ShortVideoCard({ el }) {
  return (
    <View className="mx-1 my-1 h-[293px] w-[200px]">
      <Image
        source={el.thumbnail}
        className="w-[100%] h-[100%]  rounded-md relative opacity-75"
      />
      <Text className="text-white text-[14px] font-bold tracking-tighter absolute bottom-3 left-2 right-1">
        {el.title.length > 45 ? el.title.slice(0, 45) + "..." : el.title}
      </Text>
      <View className="absolute top-3 right-2">
        <Entypo name="dots-three-vertical" size={12} color="white" />
      </View>
    </View>
  );
}
