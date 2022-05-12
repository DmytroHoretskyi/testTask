import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import EditProductModal from "./EditProductModal";
import Modal from '@mui/material/Modal';
import CommentsModal from "../comment/CommentsModal";

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

export default function ProductModal({isOpened, onClose, product}) {
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [openComments, setOpenComments] = useState(false);
    const handleOpenComments = () => setOpenComments(true);
    const handleCloseComments = () => setOpenComments(false);
    const handleBack = () => onClose(true);
    return (
        <div>
            <Modal
                open={isOpened}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image={`${product.imageUrl}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography>
                            Count: {product.count}
                        </Typography>
                        <Typography>
                            width/height: {product.width}/{product.height}
                        </Typography>
                        <Typography>
                            weight: {product.weight}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={handleOpenEdit}>Edit</Button>
                        <Button size="small" variant="outlined" onClick={handleOpenComments}>comments</Button>
                        <Button size="small" variant="outlined" onClick={handleBack}>Back</Button>
                    </CardActions>
                    <EditProductModal isOpened={openEdit} onClose={handleCloseEdit} product={product}/>
                    <CommentsModal isOpened={openComments} onClose={handleCloseComments} productId={product.id}/>
                </Card>
            </Modal>
        </div>
    );
}
