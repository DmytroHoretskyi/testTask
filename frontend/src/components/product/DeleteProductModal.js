import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button} from "@mui/material";
import productsApiService from "../../redux/services/productService";
import {useDispatch} from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DeleteProductModal({isOpened, onClose, id}) {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await productsApiService.deleteProduct(dispatch, {id})
        onClose(true);
    }

    return (
        <div>
            <Modal
                open={isOpened}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete this product?
                    </Typography>
                    <Box sx={{display: "flex", flexDirection: "row", pt: 2}}>
                        <Box sx={{flex: "1 1 auto"}}/>
                        <Button variant="outlined" sx={{mr: 2}}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="error" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
