import React, { useState, useRef, memo } from 'react';
import { Animated, Text, View, Button, ScrollView } from 'react-native';
import longText from '../data/data';

const ListObject = (props) => {
    
    //Object Expand and Collapse feature
    const expandValue = useRef(new Animated.Value(0)).current;
    const [expandState, setExpand] = useState(false);

    const expandAnimation = () => {
        Animated.timing(expandValue, {toValue: 100, duration: 1000, useNativeDriver: false}).start();
        setExpand(true);
    }
    
    const collapseAnimation = () => {
        Animated.timing(expandValue, {toValue: 0, duration: 1000, useNativeDriver: false}).start();
        setExpand(false);
    }

    // Strike the object feature
    const [strikeState, setStrikeState] = useState(0);
    const strikeButtonTitle = ['DONE', 'REDO'];
    const strikeStateList = ['', 'line-through'];


    return (
        <View style={{ margin: props.margin }}>
            <View style={{
               flexDirection: 'row',
               backgroundColor: 'grey',
               borderRadius: 10, 
            }}>

                <Text style={{
                    flex: 1,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    textDecorationLine: strikeStateList[strikeState],
                }}>
                { props.headerText }
                </Text>

                <Button title='EXPAND' style={{
                    flex: 1,
                    backgroundColor: 'blue',
                }}
                onPress={ expandState ? collapseAnimation : expandAnimation }
                />

                <Button title={ strikeButtonTitle[strikeState] } style={{
                    flex: 1,
                    backgroundColor: 'blue',
                }} 
                onPress={ () => strikeState==0 ? setStrikeState(1) : setStrikeState(0) }
                />
            </View>

            <Animated.ScrollView style={{ 
                flex: 1,
                paddingHorizontal: 40,
                backgroundColor: 'grey',
                borderRadius: 10,
                maxHeight: expandValue
             }}>
                <Text>{ props.text }</Text>
            </Animated.ScrollView>
            <Text>Height Value: {expandValue._value.toString()}</Text>
        </View>
    );


}


export default memo(ListObject);
