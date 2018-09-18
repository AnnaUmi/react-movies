import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/Pagination';
import paginate from '../utils/paginate';
import ListGroup from './common/ListGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: 'tite', order: 'asc'}
    }
    componentDidMount() {
        const genres = [{_id:"", name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres: genres });
    }
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies: movies
        })
    }
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies
        })
    }
    handlePageChange = page => {
        this.setState({ currentPage: page })
    }
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }
    handleSort = path => {
        const sortColumn = {...this.state,sortColumn};
        if(sortColumn === path) sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({
            sortColumn
        })
    }
    render() {
        const { length: moviesCount } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;

        if (moviesCount === 0) return <p> no movies</p>
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize);
        return (

            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedGenre={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} in the database.</p>

                    <MoviesTable
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        movies={movies}
                        onSort={this.handleSort}
                    />

                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                    />
                </div>
            </div>


        );
    }
}

export default Movies;
