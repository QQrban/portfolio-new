import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import EmailSent from './EmailSent';

const FormText = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#7E74F1',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid white',
                color: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_tpa69it',
                'template_9ym63ci',
                form.current,
                '2aKuc3rWl9BduUNyZ'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setOpen(true);
        form.current.reset();
    };

    return (
        <Box className='contact-page-form' onSubmit={sendEmail} component="form" ref={form} autoComplete="off">
            <CssTextField
                type="text"
                id="outlined-basic"
                label="Name"
                name="user_name"
            />
            <CssTextField
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="user_email"
                required
            />
            <CssTextField
                multiline
                rows={6}
                className="input-text"
                type="textarea"
                id="outlined-basic"
                label="Message"
                name="message"
                variant="outlined"
                required
            />
            <EmailSent open={open} setOpen={setOpen} />
            <Button
                type="submit"
                sx={{
                    bgcolor: '#7E74F1',
                }}
                variant="contained"
            >
                Send message
            </Button>
        </Box>
    );
};

export default FormText;
