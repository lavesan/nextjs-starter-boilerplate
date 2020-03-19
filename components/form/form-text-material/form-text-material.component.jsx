import React from 'react';
import TextField from '@material-ui/core/TextField';
// import '@material/react-text-field/dist/text-field.css';

export default ({ label, onChange, error, maskOnChange, errorMessage, ...inputProps }) => {

    const setFieldValue = (e) => {
        if (maskOnChange) {
            onChange(e.target.name, maskOnChange(e.target.value));
        } else {
            onChange(e.target.name, e.target.value);
        }
    }

    return (
        <TextField
            label={label}
            variant="outlined"
            onChange={setFieldValue}
            error={error}
            margin="dense"
            helperText={error ? errorMessage : ''}
            {...inputProps}
            />
    )
}