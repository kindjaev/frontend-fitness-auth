import React from 'react'
import {Box, Typography, Stack} from "@mui/material"
import Logo from "../assets/images/Logo-1.png"
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
function Footer() {
  return (
    <Box mt="80px" bgcolor="var(--darkRed)">
      <Stack gap="20px" direction='row' justifyContent='center' alignItems="center" px="40px" py="20px">
        {/* <img src={Logo} alt="logo" width="200px" height="40px" /> */}
        <SportsGymnasticsIcon sx={{color: "var(--white)", fontSize: "2rem"}}/>
        <Typography sx={{color: "var(--white)", fontSize: "2rem"}}>
          Golden Gym
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer