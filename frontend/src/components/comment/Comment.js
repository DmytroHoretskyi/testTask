import React from "react";
import {Card, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import commentsApiService from "../../redux/services/CommentService";
import {useDispatch} from "react-redux";

export default function Comment({comment}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        commentsApiService.deleteComment(dispatch, {id: comment.id, productId: comment.ProductId})
    }
    return (
        <Card>
            <ClearIcon onClick={handleDelete} color='error' fontSize='small' sx={{float: 'right'}}/>
            <Typography sx={{m: 1}}>{comment.description}</Typography>
            <Typography sx={{fontSize: "10px"}}>{comment.createdAt}</Typography>
        </Card>
    )
};
