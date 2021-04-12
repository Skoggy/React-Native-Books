import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import booksFetch from './pages/booksFetch';
import home from './pages/home';
import SavedBooks from './components/SavedBooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeRouter, Route, Link } from "react-router-native";


const queryClient = new QueryClient();

const Home = () => <Text style={styles.header}>Home</Text>;

const Search = () => <Text style={styles.header}>Search</Text>;

const Saved = () => <Text style={styles.header}>Books To Read</Text>;



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/search" style={styles.navItem}>
              <Text>Search</Text>
            </Link>
            <Link to="/saved" style={styles.navItem}>
              <Text>Books to Read</Text>
            </Link>
            <StatusBar style="auto" />
          </View>
          <Route exact path="/" component={home}></Route>
          <Route path="/search" component={booksFetch}></Route>
        </View>
      </NativeRouter>
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
  header: {
    fontSize: 20,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

});
