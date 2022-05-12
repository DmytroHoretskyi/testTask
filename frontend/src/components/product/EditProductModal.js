import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useState} from "react";
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

export default function EditProductModal({isOpened, onClose, product}) {
    const [modelInput, setModelinput] = useState({
        id: {type: 'number', value: product.id},
        name: {type: 'string', value: product.name},
        count: {type: 'number', value: product.count},
        imageUrl: {type: 'string', value: product.imageUrl},
        weight: {type: 'number', value: product.weight},
        height: {type: 'number', value: product.height},
        width: {type: 'number', value: product.width}
    })
    const [nameError, setNameError] = useState(false)
    const [countError, setCountError] = useState(false)
    const [imageURLError, setImageURLError] = useState(false)
    const [weightError, setWeightError] = useState(false)
    const [widthError, setWidthError] = useState(false)
    const [heightError, setHeightError] = useState(false)
    const dispatch = useDispatch();
    const reg = /^\d+$/;

    const casting = (type, value) => {
        const types = {
            number: Number
        };
        return type === 'string' ? value : types[type](value)
    }

    const handleChange = (event) => {
        const elementId = event.target.id;
        const elementModel = modelInput[elementId]
        const elementValue = casting(elementModel.type, event.target.value);
        const newModalInput = {
            ...modelInput,
            [elementId]: {
                ...modelInput[elementId],
                value: elementValue
            }
        }
        setModelinput(newModalInput)
    }
    const handleSubmit = async () => {
        setNameError(false);
        setCountError(false);
        setImageURLError(false);
        setWeightError(false);
        setHeightError(false);
        setWidthError(false);
        let error = 0;
        if (!modelInput.name.value) {
            setNameError(true);
            error = 1;
        }
        if (!modelInput.count.value || !reg.test(modelInput.count.value)) {
            setCountError(true);
            error = 1;
        }
        if (!modelInput.imageUrl.value) {
            setImageURLError(true);
            error = 1;
        }
        if (!modelInput.weight.value || !reg.test(modelInput.weight.value)) {
            setWeightError(true);
            error = 1;
        }
        if (!modelInput.height.value || !reg.test(modelInput.height.value)) {
            setHeightError(true);
            error = 1;
        }
        if (!modelInput.width.value || !reg.test(modelInput.width.value)) {
            setWidthError(true);
            error = 1;
        }
        if (!error) {
            const newProductMap = Object.entries(modelInput).map((objectMap, index) =>
                [objectMap[0], objectMap[1].value]
            )
            const newProduct = Object.fromEntries(newProductMap)
            await productsApiService.updateProduct(dispatch, {...newProduct})
            onClose(true);
        }
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
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Change product
                    </Typography>
                    <Box>
                        <TextField label='Name'
                                   id='name'
                                   value={modelInput.name.value}
                                   onChange={handleChange}
                                   error={nameError} fullWidth
                                   sx={{mt: 2}}/>
                        <TextField label='Count'
                                   id='count'
                                   value={isNaN(modelInput.count.value) ? 0 : modelInput.count.value}
                                   onChange={handleChange}
                                   error={countError} fullWidth
                                   sx={{mt: 2}}/>
                        <TextField label='Image URL'
                                   id='imageUrl'
                                   value={modelInput.imageUrl.value}
                                   onChange={handleChange}
                                   error={imageURLError}
                                   fullWidth
                                   sx={{mt: 2}}/>
                        <TextField label='weight'
                                   id='weight'
                                   value={isNaN(modelInput.weight.value) ? 0 : modelInput.weight.value}
                                   onChange={handleChange}
                                   error={weightError}
                                   fullWidth
                                   sx={{mt: 2}}/>
                        <TextField label='width'
                                   id='width'
                                   value={isNaN(modelInput.width.value) ? 0 : modelInput.width.value}
                                   onChange={handleChange}
                                   error={widthError}
                                   fullWidth
                                   sx={{mt: 2}}/>
                        <TextField label='height'
                                   id='height'
                                   value={isNaN(modelInput.height.value) ? 0 : modelInput.height.value}
                                   onChange={handleChange}
                                   error={heightError}
                                   fullWidth
                                   sx={{mt: 2}}/>
                    </Box>
                    <Button variant='outlined' onClick={handleSubmit} fullWidth sx={{mt: 3}}>Submit</Button>
                </Box>
            </Modal>
        </div>
    );
}
