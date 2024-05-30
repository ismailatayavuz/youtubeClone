import { SafeAreaView, ScrollView } from "react-native";

import HomeHeader from "../components/HomeScreenComponents/HomeHeader";
import CategoriesScroll from "../components/HomeScreenComponents/CategoriesScroll";
import ShortVideosSection from "../components/HomeScreenComponents/ShortVideosSection";
import VideosSection from "../components/HomeScreenComponents/VideosSection";

import { useEffect, useState } from "react";
import { fetchTrendingVideos } from "../youtubeAPI";
import BottomNav from "../components/HomeScreenComponents/BottomNav";

function HomeScreen() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetchTrendingVideos();
    setVideos((el) => (el = data));
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-950">
      <HomeHeader />
      <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
        <CategoriesScroll />
        <ShortVideosSection videos={videos} />
        <VideosSection videos={videos} />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

export default HomeScreen;
