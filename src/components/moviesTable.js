import React, { Component } from 'react';
import Like from './common/Like';

class MoviesTable extends Component {
    reiseSort
    render() {
        const { movies, onDelete, onLike, onSort } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => onSort('title')}>Title</th>
                        <th onClick={() => onSort('genre.name')}>Genre</th>
                        <th onClick={() => onSort('numberInStock')}>Stock</th>
                        <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
                        <th ></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {movies.map(movie => {
                        return (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
                                <td><button onClick={() => onDelete(movie)} className="btn btn-warning">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default MoviesTable;
