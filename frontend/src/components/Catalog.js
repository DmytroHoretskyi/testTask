import React, {useEffect} from "react";
import {Box, Button} from "@mui/material";
import Product from "./product/Product";
import productsApiService from "../redux/services/productService";
import {useDispatch, useSelector} from "react-redux";

function Catalog() {
    const products = useSelector(
        (state) => state.productReducer.products
    );
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        productsApiService.getAllProducts(dispatch)
    }, [dispatch]);

    const handleSortByName = () => {
        productsApiService.sortProductsByName(dispatch, {products})
    }
    const handleSortByCount = () => {
        productsApiService.sortProductsByCount(dispatch, {products})
    }


    return (
        <Box>
            <Button variant="outlined" color='inherit' onClick={handleSortByName} sx={{m: 2}}>Sort by name</Button>
            <Button variant="outlined" color='inherit' onClick={handleSortByCount} sx={{m: 2}}>Sort by count</Button>
            <Box sx={{display: "flex", flexWrap: 'wrap', maxWidth: '100%'}}>
                {products?.map((product) => {
                    return (
                        <Product products={product} key={product.id}/>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Catalog;
