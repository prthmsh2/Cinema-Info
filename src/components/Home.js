import hero from "./hero.js.js";

const Home = () => {
  return (
    <>
      <hero text="Welcome to React 201" />
      <p className="text-center mt-5 homepage-sentence">
                <div><h4>Search for any movie in the Search-box</h4></div>
                <div className="homepage-2nd-line">Currently for PCs and Tabs only</div>
                <div className="homepage-2nd-line"></div>
                <h7>● Don't press enter after writing a movie-name in the search-box</h7>
            </p>
            <img src ="https://cdn.onebauer.media/one/media/5d94/d7c8/c11f/b27f/c031/c3fc/mcu-endgame-main.jpg?format=jpg&quality=80&width=1800&ratio=16-9&resize=aspectfill" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" />
            <img src ="https://wallpaperaccess.com/full/567046.png" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" />
            <img src ="https://i.redd.it/34xvr5ptgkr31.png" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" />
            {/* <img src ="" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" /> */}
            <img src ="https://st1.latestly.com/wp-content/uploads/2021/06/6-Krrish.jpg" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" />
            <img src ="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/03/3-idiots-1583232923.jpg" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" />
            <img src ="https://miro.medium.com/max/1400/1*PbkJd5sgTy7i3xtZx31dsQ.png" className="homepage-image rounded mx-auto d-block $thumbnail-padding:100px" alt="" />
      {/* <div className="container"> */}
        {/* <div className="row"> */}
          {/* <div className="col-lg-8 offset-lg-2 my-5"> */}
          {/* <h2>React 201 project:</h2>
              <p className="lead">
                You will be creating a movie browser that's API driven. There's a search function,
                movie detail view, about page, all built into a single page application / progressive web application.
              </p>
              <p className="lead">
                There are tasks I have purposely left out of this project for you to solve on your own. This is
                VERY similar to a take home assignment that a company will give you when you apply to work with
                them.
              </p>
              <p className="lead">
                Just a few bugs that have not been solved yet:
              </p>
              <ul className="lead">
                <li>There is no 404 page</li>
                <li>Sometimes a search result doesn't have an image</li>
                <li>There is no handler if there are no search results</li>
                <li>The search button in the navigation doesn't work</li>
              </ul> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
