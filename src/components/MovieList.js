import React from 'react';

/*Create MovieList component*/
/*Include map funtion to display each movie item from array*/
const MovieList = (props) => {
   const FavoriteComponent = props.favoriteComponent;
   return (
      <>
     

         {props.movies.map((movie, index) => (
            <div className='image-container d-flex justify-content-start m-3'>
             <img src={movie.Poster} alt='movie'></img>
             <div onClick={props.handleFavoritesClick} className='overlay d-flex align-items-center justify-content-center'>
               <FavoriteComponent />
             </div>
            </div>
         ))}
         
      </>
   );
};

export default MovieList;