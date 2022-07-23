// import hero from "./hero.js";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const MovieView = () => {
//   const { id } = useParams();
//   const [movieDetails, setMovieDetails] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMovieDetails(data);
//         setIsLoading(false);
//       });
//   }, [id]);

//   function renderMovieDetails() {
//     if (isLoading) {
//       return <hero text="Loading..." />;
//     }
//     if (movieDetails) {
//       // TODO: Deal with a possible missing image
//       const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
//       const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
//       return (
//         <>
//           <hero text={movieDetails.original_title} backdrop={backdropUrl} />
//           <div className="container my-5">
//             <div className="row">
//               <div className="col-md-3">
//                 <img
//                   src={posterPath}
//                   alt="..."
//                   className="img-fluid shadow rounded"
//                 />
//               </div>
//               <div className="col-md-9">
//                 <h2>{movieDetails.original_title}</h2>
//                 <p className="lead">{movieDetails.overview}</p>
//               </div>
//             </div>
//           </div>
//         </>
//       );
//     }
//   }

//   return renderMovieDetails();
// };

// export default MovieView;



import Hero from "./hero.js.js"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

function MovieView (){
    const{ id }= useParams()

    const[movieDetails , setMovieDetails] = useState({})
    // const[ isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=be2b26e96df0b0182ac4e4c0c71dfe7a&language=en-US`)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=be2b26e96df0b0182ac4e4c0c71dfe7a`)
            .then(response=> response.json())
            .then(data=>{
                setMovieDetails(data)
                // setIsLoading(false)
            })
    }, [id])

    // function final (){
    //     if(isLoading){
    //         return <Hero text="Loading..." />
    //     }
    //     if(movieDetails){
    //         return(
    //             <>
    //                 <Hero text={movieDetails.original_title}/>
    //                 <div className="container">
    //                     <div className="row">
    //                         <div className="col-md-3">
    //                             left col
    //                         </div>
    //                         <div className="col-md-3">
    //                             right col
    //                         </div>
    //                     </div>
    //                 </div>
    //             </>    
    //         )    
    //     }
    // }

    // return final
    
    const posterPath =`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    const backdropUrl=`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

    const history = useHistory();
    const routeChange = () =>{ 
        let path = `../downloadPage`; 
        history.push(path);
      }

    // const budget = "{movieDetails.budget}"
    // const revenue = "{movieDetails.revenue}"
    // const profitRatio = (budget/revenue)

    return(
        <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                    </div>
                    <div className="col-md-9">
                        <h2>{movieDetails.original_title}</h2>
                        <h3>{movieDetails.tagline}</h3>
                        <p className="lead"> 
                            {movieDetails.overview}
                        </p>
                        <p>
                            Status: {movieDetails.status}
                        </p>
                        <p>
                            Released on: {movieDetails.release_date}
                        </p>
                        <p>
                            Runtime: {movieDetails.runtime} mins
                        </p>
                        <p>
                            Budget was: {movieDetails.budget} $
                        </p>
                        <p>
                            Total Revenue is: {movieDetails.revenue} $
                        </p>
                        {/* <p>
                            Revenue to Budget ratio  is: {profitRatio}
                        </p> */}
                        <button className="download-button" type="button" onClick={routeChange} >
                        <span className="">Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </>    
    )   
}
export default MovieView;