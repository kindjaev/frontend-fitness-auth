import React from 'react'
import {
  Drawer,
  ListItemButton,
  Box,
  Stack, 
} from "@mui/material";
import {Link} from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';

function DrawerComponent ({openDrawer, setOpenDrawer, handleLogout}) {

  const drawerStyle = {
    color: "var(--white)",
    textDecoration: "none",
  }

  const {user} = useAuthContext()

  return (
    <Drawer open={openDrawer}
    onClose={() => setOpenDrawer(false)}
    anchor="right"
   >
    <Box sx={{
          p: 6,
          height: 1,
          backgroundColor: "var(--darkRed)",
          fontSize: "20px",
          width: 200, 
        }} style={drawerStyle}>
        
        <ListItemButton onClick={() => setOpenDrawer(false)} >
          <Link to="/" style={drawerStyle} >Home</Link>
         </ListItemButton>
         <ListItemButton>
          <a href="#exercises" style={drawerStyle}>Exercises</a>
         </ListItemButton>
        {user 
        ? <ListItemButton onClick={handleLogout}>Log out</ListItemButton>
        : <Stack>
              <ListItemButton to="/login" style={drawerStyle}>Login</ListItemButton>
              <ListItemButton to="/signup" style={drawerStyle}>Signup</ListItemButton>
          </Stack>
        }
    </Box>
  </Drawer>
  )
}

export default DrawerComponent