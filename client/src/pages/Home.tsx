import React from "react";

import Helmet from "../components/Helmet";
import PostList from "../components/home/PostList";
import SuggestionUser from "../components/home/SuggestionUser";

<<<<<<< HEAD
import Story from "../components/Story";
=======

>>>>>>> SM-5-post-details-page

const Home: React.FC = () => {
  return (
    <Helmet title="Socito">
      <div className="home-wrapper">
        <div>
<<<<<<< HEAD
          {/* <div className="story-post-wrapper">
            <Story />
          </div> */}
=======
>>>>>>> SM-5-post-details-page
          <div className="post-wrapper">
            <PostList />
          </div>
        </div>
        <div className="suggestion-wrapper">
          <SuggestionUser />
        </div>
      </div>
    </Helmet>
  );
};
export default Home;
