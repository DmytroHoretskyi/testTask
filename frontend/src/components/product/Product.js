import React, {useState} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import DeleteProductModal from "./DeleteProductModal";
import ProductModal from "./ProductModal";

function Product({products}) {
    const [openDelete, setOpenDelete] = useState(false);
    const [openView, setOpenView] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
    const handleOpenView = () => setOpenView(true);
    const handleCloseView = () => setOpenView(false);
    return (
        <Card sx={{maxWidth: "700px", minWidth: "450px", m: 4}}>
            <CardMedia
                component="img"
                alt="ImageNotFound"
                height="140"
                image={`${products.imageUrl}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {products.name}
                </Typography>
                <Typography>
                    Count: {products.count}
                </Typography>
                <Typography>
                    width/height: {products.width}/{products.height}
                </Typography>
                <Typography>
                    weight: {products.weight}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpenView}>view</Button>
                <Button size="small" onClick={handleOpenDelete}>Delete</Button>
            </CardActions>
            <DeleteProductModal isOpened={openDelete} onClose={handleCloseDelete} id={products.id}/>
            <ProductModal isOpened={openView} onClose={handleCloseView} product={products}/>
        </Card>
    );
}

export default Product;
