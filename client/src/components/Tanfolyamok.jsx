import React,{useState} from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './Tanfolyamok.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MyForm } from './MyForm';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Tanfolyamok=(props)=>{
  const [expandedId, setExpandedId] = useState(-1);
  const [open, setOpen] = useState(false);
  const [openedTanfolyam, setOpenedTanfolyam] = useState({});

  const onOpenModal = (obj) => {
    setOpen(true);
    setOpenedTanfolyam(obj)
  }
  const onCloseModal = () => setOpen(false);

  const handleExpandClick = (i) => {
    console.log(i)
    setExpandedId(expandedId === i ? -1 : i);
  };
console.log(props.data,props.filter)
  return (
      <div className="row ">
         { props.data? props.data.map((obj,i)=>(
           (obj.agazat_id===props.filter && props.filter!==0) || props.filter===0 ?
             <div key={obj.id} className="col-md-4 col-sm-6 col-12 ">
    <Card className="myCard " sx={{ maxWidth: 360 }}>
      <div className="myCardHeader">
      <CardHeader
      titleTypographyProps={{
        fontSize: 18,
      }}
      subheaderTypographyProps={{
        fontSize: 18,
        fontWeight: "bold",
      }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <i className={obj.icon}></i>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>onOpenModal(
            {"id":obj.id,
            "megnevezes":obj.megnevezes,
            "idotartam":obj.idotartam,
            "mertekegyseg":obj.idotartam_mertekegyseg,
            "szam":obj.szam }
          )}
          title="jelentkez??s a tanfolyamra"
          >
            <MoreVertIcon sx={{fontSize:30,color:"red",fontWeight:"bold"}} />
          </IconButton>
        }
        title={obj.megnevezes}
        subheader={obj.idotartam+" "+obj.idotartam_mertekegyseg}
      />
      </div>
      <CardMedia
        component="img"
        height="194"
        image={"img/tanfolyam/"+obj.foto}
        alt={obj.megnevezes}
      />
      <CardContent>
        <Typography className="myFont" variant="body2" color="text.secondary">
        A szakk??pes??t??s azonos??t?? sz??ma: <b>{obj.szam}</b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expandedId === i}
          onClick={()=>handleExpandClick(i)}
          aria-expanded={expandedId === i}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{fontSize:20,color:"red",fontWeight:"bold"}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>A szakma r??vid le??r??sa:</Typography>
          <Typography className="myFont" paragraph>{obj.leiras}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
       :""  )) : ''}

      <div>
        <Modal open={open} onClose={onCloseModal} center>
              <MyForm tanfolyam={openedTanfolyam}/>
            </Modal>
      </div>
    
    </div>
  );
}
