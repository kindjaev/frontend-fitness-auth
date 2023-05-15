import {useState} from 'react'
import {Link} from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Box,
  Stack, 
  Typography,
  Button
} from "@mui/material";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuthContext } from '../hooks/useAuthContext'
import DrawerComponent from './DrawerComponent.jsx'
import { useNavigate } from'react-router-dom'


const linkStyle = {
  textDecoration: "none",
  color: "var(--white)",
  fontSize: "1.2rem",
  letterSpacing: "1.5px"
}

const themes = createTheme({
  palette: {
    logout: {
      main: 'transparent',
      light: "var(--yellow)",
      dark: 'var(--red)',
      contrastText: 'var(--white)',
    },
  },
});


function Nav() {
  const {user, dispatch} = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    dispatch({type: "LOGOUT"})
    navigate("/login")
  }

  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <AppBar position='static' sx={{backgroundColor: 'var(--darkRed)'}}>
      <CssBaseline />
      <Toolbar sx={{justifyContent: {xs: "space-between", md: "space-between"}}}>
        <Stack direction="row" alignItems="center">
            <Link to="/">
             <SportsGymnasticsIcon sx={{color: "var(--white)", fontSize: "2rem", mr: "20px"}}/>
            </Link>

            <Stack direction="row" spacing={2} sx={{display: {xs: "none", md: "flex"}}}>
              <Typography>
                <Link to="/" style={linkStyle} gap="2">Home</Link>
              </Typography>

              <Typography>
                <a href="#exercises" style={linkStyle}>Exercises</a>
              </Typography>
            </Stack>
        </Stack>


        <Box>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
          {user 
            ?
            <ThemeProvider theme={themes}>
             <Button onClick={handleLogout} variant="contained" color="logout">Log out</Button>
            </ThemeProvider>
            : <Stack direction="row" alignItems="center" gap="20px">
                  <Link to="/signup" style={linkStyle}>Signup</Link>
                  <Link to="/login" style={linkStyle}>Login</Link>
              </Stack>
          }
          </Box>
        </Box>

        <Box sx={{display: {xs: "flex", md: "none"}}}>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
            <MenuIcon sx={{fontSize: "2rem", color: "var(--white)"}}/>
          </IconButton>
        </Box>

        <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} handleLogout={handleLogout}/>
      </Toolbar>

    </AppBar>
  )
}

export default Nav