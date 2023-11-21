import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export default function ImgMediaCard({ product, basketFav, setBasketFav }) {
    return (
        <Grid item xs={8}>
            <Card >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={e => {
                            setBasketFav({
                                basket: [...basketFav.basket, product], favorites: [...basketFav.favorites]
                            })
                        }}
                    >Add to Card
                    </Button>
                    <IconButton
                        aria-label="favorite"
                        onClick={(e) => {
                            if (basketFav.favorites?.find((elem) => elem.id == product.id)
                            ) {

                                let arr = [...basketFav.favorites];
                                arr = basketFav.favorites?.filter((elem) => elem.id != product.id
                                );

                                setBasketFav({
                                    basket: [...basketFav.basket],
                                    favorites: [...arr]
                                });

                            }
                            else {
                                setBasketFav({
                                    basket: [...basketFav.basket],
                                    favorites: [...basketFav?.favorites, product]
                                });
                            }
                        }}

                    >
                        <FavoriteIcon color="error" />

                    </IconButton>
                </CardActions>
            </Card>
        </Grid >
    );
}