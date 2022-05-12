import React, {useState} from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import CreateNewProductModal from "./product/CreateNewProductModal";

function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, fontSize: 35}}>
                        MyLittleShop
                    </Typography>
                    <Button variant="outlined" color='inherit' onClick={handleOpen}>Create product</Button>
                </Toolbar>
            </AppBar>
            <CreateNewProductModal isOpened={open} onClose={handleClose}/>
        </Box>
    )
}

export default Header;
