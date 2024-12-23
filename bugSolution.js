```javascript
// bug.js
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const BugComponent = () => {
  const [data, setData] = useState(Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` })));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item, index) => (index === 0 ? { ...item, text: `Item ${Math.random()}` } : item))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      // Missing or incorrect keyExtractor
    />
  );
};

export default BugComponent;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

```

```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const BugComponent = () => {
  const [data, setData] = useState(Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` })));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item, index) => (index === 0 ? { ...item, text: `Item ${Math.random()}` } : item))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id} // Correct keyExtractor
    />
  );
};

export default BugComponent;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
```