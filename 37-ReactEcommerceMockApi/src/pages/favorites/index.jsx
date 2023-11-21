import React from 'react'
import Header from "./../../layout/header"
import { v4 as uuidv4 } from "uuid";
import Container from '@mui/material/Container';
import Grid from "@mui/material.Grid"
import Card from "./../../components/card"
function Favorites({ basketFav, setBasketFav }) {
    return (
        <div>
            <Header />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {
                        basketFav &&
                        basketFav.favorites?.map((prod) => {
                            return <Card key={uuidv4()} />
                        })
                    }
                </Grid>
            </Container>

        </div>
    )
}

export default Favorites

