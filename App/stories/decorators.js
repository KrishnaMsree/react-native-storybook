import React from "react";

import { View } from "react-native";

export const BufferView = (storyFn) => (
    <View style={{ flex:1, marginVertical:20, marginHorizontal:10 }} >
        {storyFn()}
    </View>
)