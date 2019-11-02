import React from 'react'
import {
    ActivityIndicator,
    View
} from 'react-native'
function Loading() {
    return (
        <View style={{flex:1}}>
          <ActivityIndicator color='green' size="large" />
        </View>
    )
}

export default Loading;
