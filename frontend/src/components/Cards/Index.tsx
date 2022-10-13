import React, { useState, useEffect } from "react";
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

export const Cards = ({ sessions }: any) => {
  const [dimensions, setDimensions] = useState(window.screen.width);
  const isMobile = dimensions < 700;

  useEffect(
    () =>
      function handleResize() {
        setDimensions(window.screen.width);
        window.addEventListener("resize", handleResize);
      },
    []
  );
  return (
    <div>
      <Grid container style={{ height: "100%" }}>
        {sessions.map((element: any) => (
          <Grid
            style={{ display: "flex", justifyContent: "space-evenly" }}
            key={element.id}
            xs={12}
            sm={12}
            md={6}
          >
            <Card
              key={element.id}
              sx={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                maxWidth: "65vw",
                alignItems: "center",
                minWidth: 240,
                overflow: "hidden",
                margin: 1,
                padding: 5,
                borderRadius: "25px",
                boxShadow: "0 2px 7px 1px black",
                position: "relative",
              }}
            >
              <CardHeader
                avatar={<Avatar src={gymAvatar} aria-label="session"></Avatar>}
                titleTypographyProps={{
                  variant: "h5",
                  align: "center",
                  fontFamily: "allesans",
                }}
                subheaderTypographyProps={{
                  variant: "h6",
                  fontFamily: "allesans",
                  textAlign: "left",
                }}
                title={element.title}
                subheader={new Date(element.startTime).toDateString()}
              />
              <CardMedia
                component="img"
                style={{ maxHeight: "20vh", minHeight: "20vh" }}
                image={element.image}
                alt="sessions"
              />
              {isMobile ? (
                <div>
                  <CardContent>
                    <Typography
                      style={{
                        fontFamily: "allesans",
                        fontSize: "16px",
                        textAlign: "center",
                        wordWrap: "break-word",
                      }}
                      variant="body1"
                      color="black"
                    >
                      {element.strapline}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      position: "relative",
                      flexDirection: "column",
                    }}
                    disableSpacing
                  >
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
                </div>
              ) : (
                <div>
                  <CardContent>
                    <Typography
                      style={{
                        fontFamily: "allesans",
                        fontSize: "16px",
                        textAlign: "center",
                        wordWrap: "break-word",
                      }}
                      variant="body1"
                      color="black"
                    >
                      {element.strapline}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", position: "relative" }}
                    disableSpacing
                  >
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
                </div>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
