import { View, Text, ScrollView, Pressable } from "react-native";
import { categories } from "../../constants";
import { useState } from "react";
function CategoriesScroll() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  return (
    <ScrollView
      className="px-1 mb-2"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((el, i) => (
        <View key={i} className="my-2 mx-1">
          <Pressable
            onPress={() => setActiveCategory(el)}
            className={`rounded-md px-3 py-2 ${
              el === activeCategory ? "bg-white" : "bg-neutral-800"
            }`}
          >
            <Text
              className={
                el === activeCategory ? "text-neutral-950" : "text-white"
              }
            >
              {el}
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

export default CategoriesScroll;
