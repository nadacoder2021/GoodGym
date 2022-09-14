import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import gymAvatar from "../../images/goodGymAvatar.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { ExpandIcon } from "components/ExpandIcon";
import { RegisterButton } from "components/Navbar/RegisterButton";
import { PeopleIcon } from "./PeopleIcon";
import Grid from "@mui/material/Unstable_Grid2";

export const Cards = ({ sessions }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(false);

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const handleExpandClick = () => {
    // if(expandedId !== true) setExpandedId(expandedId === i ? false : i)
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid container spacing={0} alignItems="center" direction="column">
        {sessions.map((element: any) => (
          <Grid key={element.id} xs={7} md={8}>
            <Card
              key={element.id}
              sx={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "60vw",
                minWidth: 280,
                minHeight: 600,
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
                height="370"
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
                  <PeopleIcon id={element.id} />
                </IconButton>
                <RegisterButton buttonId={element.id}></RegisterButton>
               <ExpandIcon expandId={element.id}/>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
