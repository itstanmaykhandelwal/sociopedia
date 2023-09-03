import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react';
import Form from './Form';

const Login = () => {
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
    return (
        <Box>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    Sociopedia
                </Typography>
            </Box>
            <Box
                width={isNonMobileScreen ? "50%" : "93%"} 
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant='h5' sx={{mb:"1.5rem"}}>
                    Welcome To Sociopedia, The Social Media for Sociopaths!
                </Typography>
                <Form/>
            </Box>
        </Box>
    )
}

export default Login