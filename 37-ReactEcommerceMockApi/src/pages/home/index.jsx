import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from "./../../layout/header";
import { getAllProducts } from '../../middleware/api/products';
import Card from './../../components/card';
import Container from '@mui/material/Container';
import Grid from "@mui/material.Grid"
function Home({ basketFav, setBasketFav }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res);
        });

    }, []);


    return (
        <div>
            <Header />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {products &&
                        products.map((prod) => {
                            return <Card key={uuidv4()} product={prod}
                                basketFav={basketFav} setBasketFav={setBasketFav} />;
                        })
                    }
                </Grid>
            </Container>
        </div>
    )


}

export default Home;