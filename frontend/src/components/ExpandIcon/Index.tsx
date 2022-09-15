import React, {useState} from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";


export const ExpandIcon = ({ expandId }: any) =>{

    const [expanded, setExpanded] = useState(false);
    const [expandedId , setExpandedId] = useState(0)
   
  
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
    const handleExpandClick = (expandId: number) => {
        setExpandedId(expandId)
        if(expandedId !== 0)
      setExpanded(!expanded);
    };
  
return(
    <div>
        <ExpandMore
                  expand={expanded}
                  onClick={() => handleExpandClick(expandId)}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>More information</Typography>
                  <Typography paragraph>Details of the Event</Typography>
                  <Typography paragraph>
                    What, Where, How and When of the event
                  </Typography>
                </CardContent>
              </Collapse>
    </div>
)

}