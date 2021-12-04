import React, { useEffect, useState } from 'react';
// import './City.css';
import { Grid, Paper } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Fade from '@mui/material/Fade';
import validation from '../Components/Reusable/validate';
import ErrorMessage from '../Components/Reusable/ErrorMessage';


const data = [
    {
        id: 0,
        name: 'Guitar',
        desc: 'Acoustic - Yamaha',
        price: '$200'
    },
    {
        id: 1,
        name: 'Keyboard',
        desc: '61 keys - KORG',
        price: '$400'
    },
    {
        id: 2,
        name: 'Ukulele',
        desc: '4- string, Yamaha',
        price: '$100'
    },
    {
        id: 3,
        name: 'Drums',
        desc: '12 piece - Tama',
        price: '$200'
    },
]

const Form = () => {

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

    const [productData, setProductData] = useState("");
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [validationError, setValidationError] = useState(false);
    const [deleteID, setDeleteID] = useState("")
    const [updateID, setUpdateID] = useState("")
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = () => {

        // THIS FUNCTION SHOULD MAKE AN API CALL AND ADD THE ENTRY TO BACKEND

        // CHECKING IF THE MANDATORY FIELDS ARE EMPTY USING REUSABLE VALIDATE FUNCTION
        if (validation(name, description, price)) {
            console.log("SUCCESS")
            setProductData([...productData, { id: productData.length, name: name, desc: description, price: price }]);
            setValidationError(false)
        }
        else {
            setValidationError(true)
        }
    }
    useEffect(() => {
        // INITIAL LOAD OF THE PAGE WITH EMPTY DEPENDENCY TO CALL IT ONLY ONCE IN ITS LIFE CYCLE
        getProductDetails();
    }, [])

    const getProductDetails = () => {
        // ONCE API IS READY FROM BACKEND MAKE THIS AS ASYNC CALL AND GET THE DETALS FROM API CALL

        // USE TRY CATCH BLOCK HERE ONCE WE ARE DONE WITH API CALL TO HANDLE EXCEPTIONS
        setProductData(data);
    }

    const updateTableData = (data, id) => {
        // FILLING THE INPUT FIELDS WITH THE SELECTED VALUES 
        console.log("update table", data);
        setName(data.name)
        setDescription(data.desc)
        setPrice(data.price);
        setUpdate(true);
        setUpdateID(id);
    }

    const deleteItem = (id, e) => {
        // THIS SHOULD CALL THE DELETE ASYNC CALL AND DELETE THE DATA FROM BACKEND USING ID 

        // USE TRY CATCH BLOCK HERE ONCE WE ARE DONE WITH API CALL TO HANDLE EXCEPTIONS
        e.stopPropagation();
        handleOpen();
        setDeleteID(id);
    }

    const onYes = () => {
        // ONCLICK OF MODAL YES
        let temp = productData.splice(deleteID, 1)
        console.log("checking", productData, temp);
        setProductData(productData);
        handleClose();
    }

    const onCancelForm = () => {
        // ONCLICK OF MODAL NO
        setName("")
        setDescription("")
        setPrice("");
        setUpdate(false);
    }
    const onUpdateFormData = () => {
        //   ONCE THE BACKEND IS READY, MAKE THIS FUNC AS ASYNC AND
        //   SHOULD MAKE AN ASYNC POST CALL BY PASSING THE MODIFIED DATA AND
        //   ID TO BACKEND TO GET THE MODIFIED RESPONSE AND DISPLAY IN UI 

        // USE TRY CATCH BLOCK HERE ONCE WE ARE DONE WITH API CALL TO HANDLE EXCEPTIONS

        let id = productData[updateID].id;
        productData.splice(updateID, 1, { id: id, name: name, desc: description, price: price });
        setProductData(productData);
        setName("")
        setDescription("")
        setPrice("");
        setUpdate(false);
    }
    return (
        <Box component="form"
            sx={{
                "& .MuiTextField-root": { mt: 2, ml: 3, mb: 2, width: "35ch" }
            }}
            noValidate
            autoComplete="off"
            className="formContainer"
        >
            {validationError ? <ErrorMessage /> : null}
            <Grid container>
                <Grid item xs={12} md={6} sm={6} lg={6}>
                    <Grid container className="inputLabel">
                        <Typography variant="subtitle1" className="label required">Name</Typography>
                        <TextField label="Name" id="prodName" required value={name} onChange={(e) => setName(e.target.value)} type="search" size="small" />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={6}>
                    <Grid container className="inputLabel">
                        <Typography variant="subtitle1" className="label required">Description</Typography>
                        <TextField label="Description" id="prodDesc" value={description} onChange={(e) => setDescription(e.target.value)} type="search" size="small" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} sm={6} lg={6}>
                    <Grid container className="inputLabel">
                        <Typography variant="subtitle1" className="label required">Price</Typography>
                        <TextField label="Price" id="prodPrice" required value={price} onChange={(e) => setPrice(e.target.value)} type="search" size="small" />
                    </Grid>
                </Grid>
            </Grid>
            <div className="radioGroups">
                {update ?
                    <div>
                        <Button className="addbtn" id="updateForm" onClick={onUpdateFormData}>UPDATE</Button>
                        <Button className="addbtn" id="cancelForm" onClick={onCancelForm}> CANCEL </Button>
                    </div>
                    :
                    <Button className="addbtn" id="addProdItem" onClick={onSubmit}> ADD ITEM </Button>
                }
            </div>
            {productData.length ? (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">NAME</TableCell>
                                <TableCell align="center">DESCRIPTION</TableCell>
                                <TableCell align="center">PRICE</TableCell>
                                <TableCell align="center">ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productData.map((row, ind) => (
                                <TableRow
                                    id={`${ind}${row.name}`}
                                    key={`${ind}${row.name}`}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={() => updateTableData(row, ind)}
                                >
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.desc}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center" id={`delete${ind}${row.name}`} onClick={(e) => deleteItem(ind, e)}><DeleteIcon /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : null}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Do you want to delete this item?
                        </Typography>
                        <div>
                            <Button className="btn" id="confirmYes" onClick={onYes}> YES </Button>
                            <Button className="btn" id="confirmNo" onClick={handleClose}> NO </Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
export default Form;
