
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar/Avatar";
import './SuggestedUsers.css'

const SuggestedUser = () => {
  return (
    <div className="main-card-container">
      <Card sx={{ maxWidth: 345 }} className="suggestion-card">
        <div className="suggestion-card-img">
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </div>
        <CardContent>
          <Typography gutterBottom className="user-name" component="div">
            Somesh Kshirsagar
          </Typography>
        </CardContent>
        <CardActions>
          <button className="follow-btn"> Follow</button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className="suggestion-card">
        <div className="suggestion-card-img">
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </div>
        <CardContent>
          <Typography gutterBottom className="user-name" component="div">
            Sameer Kanade
          </Typography>
        </CardContent>
        <CardActions>
          <button className="follow-btn"> Follow</button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SuggestedUser;
