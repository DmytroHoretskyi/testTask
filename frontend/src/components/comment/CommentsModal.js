import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, TextField} from "@mui/material";
import Comment from "./Comment";
import commentsApiService from "../../redux/services/CommentService";
import {useDispatch, useSelector} from "react-redux";

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

export default function CommentsModal({isOpened, onClose, productId}) {
    const comments = useSelector(
        (state) => state.productReducer.comments
    );
    const [description, setDescription] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        commentsApiService.getComments(dispatch, {productId})
    }, [dispatch]);

    const handleClose = () => {
        onClose(true);
    };
    const handleInput = (event) => {
        setDescription(event.target.value);
    };
    const handleSend = async () => {
        await commentsApiService.createNewComment(dispatch, {description, productId: productId})
        setDescription('')
    };

    return (
        <div>
            <Modal
                open={isOpened}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {comments.map((comment) => {
                        return (
                            <Comment comment={comment} key={comment.id}/>
                        )
                    })}
                    <TextField
                        sx={{mt: 2}}
                        fullWidth
                        id="outlined-multiline-static"
                        onChange={handleInput}
                        value={description}
                        label="Comment"
                        multiline
                        rows={4}
                    />
                    <Box sx={{display: "flex", flexDirection: "row", pt: 2}}>
                        <Box sx={{flex: "1 1 auto"}}/>
                        <Button variant="outlined" sx={{mr: 2}} onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="outlined" sx={{mr: 2}} onClick={handleSend}>
                            Send
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
