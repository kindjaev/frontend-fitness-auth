
import HorizontalScrollBar from './HorizontalScrollBar'
import {Box, Typography, Stack} from "@mui/material"
import Loader from "./Loader"


function SimilarExercises({similarExercises, similarEquipment}) {

  return (
    <Box>
      <Typography variant='h4' my="50px" pl="20px" >Exercises that target the same muscle group</Typography> 
      {similarExercises.length ? <HorizontalScrollBar data={similarExercises} /> : <Loader />}
      <Typography variant='h4' my="50px" pl="20px">Exercises that use the same equipment</Typography> 
      {similarEquipment.length ? <HorizontalScrollBar data={similarEquipment} /> : <Loader />}
    </Box>
  )
}

export default SimilarExercises

