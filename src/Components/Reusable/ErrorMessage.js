import React from 'react';
import Typography from "@material-ui/core/Typography";
import CONSTANTS from '../../Utils/Constants';

const ErrorMessage = () => {
    return (
        <Typography variant="subtitle1" className="errorLabel">{CONSTANTS.VALIDATE_MESSAGE}</Typography>
    )
}
export default ErrorMessage;