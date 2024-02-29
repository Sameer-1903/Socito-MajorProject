import React from "react";
import "./Feed.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
const Feed = () => {
  return (
    <div>
      <article className="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-profilepicture">
              <img
              // src={posts.visuals || "/assets/icons/profile-placeholder.svg"}
              src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg"
              alt="post image"
              className="post-card_img"
                
              />
            </div>

            <div className="Post-user-nickname">
              <span>John Doe</span>
            </div>
          </div>
        </header>

        <div className="Post-image">
          <div className="Post-image-bg">
            <img
              alt="Icon Living"
              src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg"
              // src={posts.visuals}
            />
          </div>
        </div>

        <div className="feed-icons">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <SendIcon />
          </div>
          <div className="likes-count">
          {/* <strong> {posts.likes}</strong> */}
          <strong> 100 likes</strong>

        </div>
        <div className="Post-caption">
          hello everyone
          {/* {posts.content} */}
        </div>
        
        <div className="comment-view">
          View all comments...
        </div>
        <hr />
        <div>
        <TextField fullWidth label="Add Comments" id="fullWidth" />
        </div>
        <div className="post-time">
          2days ago
        {/* {multiFormatDateString(post.$createdAt)} */}
        </div>
      </article>


      




      <article className="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-profilepicture">
              <img
              // src={posts.visuals || "/assets/icons/profile-placeholder.svg"}
              src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg"
              alt="post image"
              className="post-card_img"
                
              />
            </div>

            <div className="Post-user-nickname">
              <span>John Doe</span>
            </div>
          </div>
        </header>

        <div className="Post-image">
          <div className="Post-image-bg">
            <img
              alt="Icon Living"
              src="https://cdn.pixabay.com/photo/2023/07/22/08/54/european-shorthair-8142959_640.jpg"
              // src={posts.visuals}
            />
          </div>
        </div>

        <div className="feed-icons">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <SendIcon />
          </div>
          <div className="likes-count">
          {/* <strong> {posts.likes}</strong> */}
          <strong> 100 likes</strong>

        </div>
        <div className="Post-caption">
          hello everyone
          {/* {posts.content} */}
        </div>
        
        <div className="comment-view">
          View all comments...
        </div>
        <hr />
        <div>
        <TextField fullWidth label="Add Comments" id="fullWidth" />
        </div>
        <div className="post-time">
          2days ago
        {/* {multiFormatDateString(post.$createdAt)} */}
        </div>
      </article>
    </div>
  );
};

export default Feed;
