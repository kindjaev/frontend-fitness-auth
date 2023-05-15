import { useState } from "react"
import  {
  Container,
  Button,
  InputLabel,
  Input,
  FormControl,
  Box,
  Stack,
  Typography
} from '@mui/material'
import useLogin from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, loading} = useLogin()

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        // console.log(email, password)
        login(email, password)

    }
  return (
    <Container sx={{height: "63vh"}}>
      <Stack sx={{m: {xs: '100px 0', md: '100px 200px'}}} >
        <FormControl className="login" sx={{marginTop: "20px"}}>  
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" onChange={e => setEmail(e.target.value)} />
        </FormControl>

        <FormControl sx={{marginTop: "20px"}}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </FormControl>
        <Button onClick={handleSubmit} sx={{marginTop: "20px"}}>Log in</Button>
        {error && <Typography>{error}</Typography>}
      </Stack>
    </Container>
  )
}

export default Login