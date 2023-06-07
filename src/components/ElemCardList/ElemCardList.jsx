import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import s from './style.module.css';

export default function ElemCardList({...product}) {
    const [expanded, setExpanded] = React.useState(false);      // стейт компонент MUI
    const [color, setColor] = React.useState('disabled')        // стейт цвета для лайка
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const handleLike = () => {                                  // изменение цвета лайка по клику
        if (color === "disabled") {
            setColor('error');
        } else {
            setColor('disabled');
        }
    }

    const ExpandMore = styled((props) => {                      // из MUI
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

  return (
    <Card sx={{ maxWidth: 345, borderRadius: '20px' }}>
        <Link to={`/products/${product.id}`} className={s.link}>
            <CardActionArea sx={{display: 'flex', flexDirection: 'column'}}>
                <div className={s.title_container}>
                    <Typography component="div" className={s.title} gutterBottom variant="h5" align="center">
                        {product.title}
                    </Typography>
                </div>
                <img className={s.image} src={product.image} alt={product.description} />
                <CardContent component="div" className={s.price_raiting_container}>
                    <Typography align='left' variant="h4" color="text.secondary">
                        {product.price} $
                    </Typography>
                    <Typography align="right" variant="inherit" color="text.secondary" component="div" className={s.raiting}>
                        <Rating name="read-only"  value={product.rating.rate} precision={0.1} readOnly />
                        {product.rating.rate}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Link>
            
        <CardActions component="div" className={s.like_description_container}>
            <IconButton aria-label="add to favorites" color={color} onClick={handleLike}>
                <FavoriteIcon />
            </IconButton>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>{product.description}</Typography>
            </CardContent>
        </Collapse>
    </Card>
  );
}