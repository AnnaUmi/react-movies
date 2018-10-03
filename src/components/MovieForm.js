import React from 'react';

const MovieForm = (props) => {
    const handleSave = () => {
        
        props.history.push("/movies")
    }
    return (
        <div>
        <h1>Movie from</h1>
        <div>Movie id: {props.match.params.id} </div>
        <button className="btn btn primary" onClick={handleSave}>Save</button>
        </div>
        
    );
};

export default MovieForm;