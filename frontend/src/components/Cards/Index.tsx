import React from "react";
import gymAvatar from "../../images/goodGymAvatar.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { ExpandIcon } from "components/ExpandIcon/Index";
import { RegisterButton } from "components/RegisterButton/Index";
import { PeopleIcon } from "../PeopleIcon/Index";
import Grid from "@mui/material/Unstable_Grid2";


//spacing={0} alignItems="center" direction="column"
export const Cards = ({ sessions }: any) => {
  return (
    <div>
      <Grid container style={{}}>
        {sessions.map((element: any) => (
          <Grid key={element.id} xs={12} md={6}>
            <Card
              key={element.id}
              sx={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "60vw",
                minWidth: 280,
                maxHeight: 660,
                overflow:"hidden",
                margin: 4,
                padding: 5,
              }}
            >
              <CardHeader
                avatar={<Avatar src={gymAvatar} aria-label="session"></Avatar>}
                titleTypographyProps={{ variant: "h5", align: "center" }}
                subheaderTypographyProps={{
                  variant: "h6",
                }}
                title={element.title}
                subheader={new Date(element.startTime).toDateString()}
              />
              <CardMedia
                component="img"
                style={{maxHeight:286.66}}
                image={element.image}
                alt="sessions"
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {element.strapline}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex" }} disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="people attending">
                  <PeopleIcon id={element.signups.length} />
                </IconButton>
                <RegisterButton buttonId={element.id}></RegisterButton>
                <ExpandIcon expandId={element.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
