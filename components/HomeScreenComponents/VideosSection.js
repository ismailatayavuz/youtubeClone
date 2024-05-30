import { useEffect } from "react";
import { View, Text, FlatList, LogBox, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { numConverter } from "../../utils/numbers";

function VideosSection({ videos }) {
  const regularVids = videos.slice(0, 25);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <FlatList
      data={regularVids}
      renderItem={(el) => <VideoCard el={el.item} />}
      keyExtractor={(item) => item.videoId}
    />
  );
}

export default VideosSection;

export function VideoCard({ el }) {
  return (
    <View>
      <View>
        <Image
          className="relative h-[244px] w-full mb-3"
          source={el.thumbnail}
        />
        <View className="absolute bottom-5 right-2 bg-neutral-900 px-1 py-[2px] rounded">
          <Text className="text-white text-xs tracking-wider">
            {el.lengthText}
          </Text>
        </View>
      </View>
      <View className="flex-row space-x-4 mb-8 mx-2">
        <Image className="rounded-full h-9 w-9" source={el.channelThumbnail} />
        <View className="flex-1">
          <Text className="text-white text-[16px] leading-[18px] mb-1">
            {el.title.length > 70 ? el.title.slice(0, 70) + "..." : el.title}
          </Text>
          <Text className="text-neutral-400 text-[13px]">
            {el.channelTitle} • {numConverter(el.viewCount)} views •{" "}
            {el.publishedText}
          </Text>
        </View>
        <View className="mr-4 mt-[2px]">
          <Entypo name="dots-three-vertical" size={14} color="white" />
        </View>
      </View>
    </View>
  );
}
