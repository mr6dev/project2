import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
    count: 9,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies, count: this.state.count - 1 });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>;
    return (
      <div>
        <h4>Showing {this.state.count} in DataBase </h4>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Genre</th>
              <th scope='col'>Stock</th>
              <th scope='col'>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-lg btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
