import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);

        this.setState({
            movies: movies
        })

    }
    render() {
        const { length: moviesCount } = this.state.movies;

        if (!moviesCount) return <p> no movies</p>
        return (
            <React.Fragment>
                <p>Showing {moviesCount} in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.movies.map(movie => {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-warning">Delete</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </React.Fragment>

        );
    }
}

export default Movies;