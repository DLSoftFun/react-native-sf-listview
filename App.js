/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Dimensions
} from 'react-native';
import SFListView from 'react-native-sf-listview'
var width = Dimensions.get('window').width;

export default class App extends Component<Props> {
    componentDidMount(){
        this.onRefresh()
    }
  render() {
    return (
      <View style={styles.container}>
        <SFListView ref={'listview'} renderItem={this.renderItem} onRefresh={this.onRefresh} onLoad={this.onLoad}/>
      </View>
    );
  }
    renderItem=(item)=>{
        var data = item.item
        var index = item.index
        return (
            <View style={{width:width,height:50,alignItems:'center',justifyContent:'center'}}>
              <Text>{"item"+index}</Text>
            </View>
        )
    }
    onRefresh=()=>{
        setTimeout(()=>{
            this.refs.listview.setRefreshing(false)
            this.refs.listview.setData([1,2,3,4,5,6,7,8,9,10])
        },1000)

    }
    onLoad=()=>{
        this.refs.listview.addData([1,2,3,4,5])
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
