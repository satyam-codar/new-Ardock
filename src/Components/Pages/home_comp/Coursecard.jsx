import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import "./Home_com.css"
function MultiActionAreaCard(props) {
    return (
        <Card className='maincard' >
            <CardActionArea className='maincard1' >
                <CardMedia
                    className='cardmedia'
                    component="img"
                    // height="240"
                    image={props.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                        {props.heading}
                        {/* Lizard house */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='para'>
                        {props.description}
                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div className="firstbut">
                    <Stack direction="row" spacing={2}>
                        <Link to={props.nav}>
                            <Button color="secondary" className='cardbutton'>
                                Read more
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </CardActions>
        </Card>
    );
}

export default MultiActionAreaCard;