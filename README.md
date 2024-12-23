# React Native FlatList Performance Bug

This repository demonstrates a performance issue in React Native's FlatList component when dealing with complex items and frequent data updates.  The bug arises from an improperly implemented `keyExtractor` function, leading to inefficient updates and performance degradation.

## Bug Description

When using FlatList with a large dataset containing complex components and frequent data changes, using an incorrect or missing `keyExtractor` can cause React Native to struggle to update the list efficiently. This results in problems such as slow scrolling, dropped frames, or even app crashes.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the performance of the FlatList.  Scroll rapidly or trigger data updates to see the issues. 

## Solution

The core solution involves implementing a proper `keyExtractor` function that assigns a unique and stable key to each item in the dataset.  This allows React Native to efficiently identify and update only the necessary items.

## Note
This example uses a simplified data structure. In a real-world scenario, you may have to adjust the `keyExtractor` function to suit the specifics of your data.