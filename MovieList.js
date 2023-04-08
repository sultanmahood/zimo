import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';

const MovieList = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      {movies.map((movie) => (
        <View key={movie.id}>
          <Text>{movie.title}</Text>
          <Text>{movie.releaseYear}</Text>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { fetchMovies })(MovieList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
