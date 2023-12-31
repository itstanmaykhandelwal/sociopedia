import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from 'scenes/navbar'
import UserWidget from 'scenes/widgets/UserWidget';

const Home = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const {_id, picturePath} = useSelector((state) => state.user);
    return (
        <Box>
            <Navbar/>
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex":"block"}
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                   <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "26%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >

                </Box>
                {isNonMobileScreens && (
                    <Box flexBasis="26%"></Box>
                )}
            </Box>
        </Box>
    )
}

export default Home