import React from 'react'
import {useNavigate} from "react-router-dom"
import {Box, Stack, Typography} from "@mui/material"

function NotFound() {
    const navigate = useNavigate()

    const redirectHome = () => {
        setTimeout(() => {
            navigate("/")
        }, 5000)
    }
    redirectHome()

  return (
    <Box p="20px">
        <Stack height="75vh" justifyContent="center" alignItems="center">
            <Typography variant='h3' >This page doesn't exist......</Typography>
            <Typography variant='h8' mt="20px">You will be redirected to the Home Page in 5 sec</Typography>
        </Stack>
    </Box>
  )
}

export default NotFound