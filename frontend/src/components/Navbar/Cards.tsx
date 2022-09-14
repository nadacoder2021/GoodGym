import React, { useState } from "react";
import { use1Session, useSession } from "sessions";
import { styled } from "@mui/material/styles";
import gymAvatar from "../../images/goodGymAvatar.png"
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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RegisterButton } from "components/Navbar/Buttons";
import { SettingsAccessibilityOutlined } from "@mui/icons-material";
import { useRegister, useUnRegister } from "mutations";
import Grid from "@mui/material/Unstable_Grid2";


export const Cards = ({ sessions }: any) => {
    const [expanded, setExpanded] = useState(false);
 
  //Add more props type to IconButtonProps
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  //Style the expanded card and when it is expanded
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

 // HANDLE EXPAND CLICK BUTTON
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {sessions.map((el: any) => (
         <Grid key={el.id} xs={4}>
        <Card
          key={el.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 280,
            minWidth: 280,
            height: 500,
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
            title={el.title}
            subheader={new Date(el.startTime).toDateString()}
          />
          <CardMedia
            component="img"
            height="230"
            image={el.image}
            alt="sessions"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {el.strapline}
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
              <PeopleAltIcon />{session.signups.length}
            </IconButton>
            <RegisterButton el={el.id}></RegisterButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>More information</Typography>
              <Typography paragraph>Details of the Event</Typography>
              <Typography paragraph>
                What, Where, How and When of the event
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>
      
      ))} 
       </Grid>
    </>
  );
};
