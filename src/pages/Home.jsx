import React, {useState} from 'react'
import {Box} from "@mui/material"
import HerroBanner from '../components/HerroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'
import { createTheme } from '@mui/material/styles';


function Home() {
  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])
  // costume theme 
  const themes = createTheme({
    palette: {
      btn: {
        main: 'var(--red)',
        light: "var(--yellow)",
        dark: 'var(--red)',
        contrastText: 'var(--white)',
      },
    },
  });
  return (
    <Box>
      <HerroBanner themes={themes}/>
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} themes={themes}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home