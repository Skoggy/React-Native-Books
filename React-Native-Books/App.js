import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BooksFetch from './BooksFetch';
import SavedBooks from './components/SavedBooks';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
        <BooksFetch />
        <SavedBooks />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
