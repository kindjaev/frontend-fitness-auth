import React from 'react'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {fetchData} from "../utils/fetchData"
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Loader from '../components/Loader'
import { useAuthContext } from '../hooks/useAuthContext'

function ExerciseDetail() {
  const [similarEquipment, setSimilarEquipment] = useState([])
  const [similarExercises, setSimilarExercises] = useState([])
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeData, setYoutubeData] = useState([]) 
  const {id} = useParams()
  const {user} = useAuthContext()


  useEffect(() => {
    const url =  `http://localhost:3000/exercise/${id}`

    const exerciseDetailFetch = async () => {
      // GET ALL DATA FROM EXERCISE WITH ID
      const exerciseDetailData = await fetchData(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      console.log(exerciseDetailData)
      // set exercise details 
      setExerciseDetail(exerciseDetailData.exercise)
      // set youtube data
      setYoutubeData(exerciseDetailData.youtubeExercises.contents)
      // find similar exercises by filtering data with target and set it to variable
      const similarMuscleGroupDb = await exerciseDetailData.similarExercises.filter(item => item.target.includes(exerciseDetailData.exercise.target))
      setSimilarExercises(similarMuscleGroupDb)
      // find similar equipment by filtering data with equipment and set it to variable
      const similarEquipmentDb = await exerciseDetailData.similarExercises.filter(item => item.equipment.includes(exerciseDetailData.exercise.equipment))
      setSimilarEquipment(similarEquipmentDb)
    }
    if(user){
      exerciseDetailFetch()
    }
  }, [id, user])

  return (
    <div>
      {user &&
        <Box>
          <Details exerciseDetail={exerciseDetail}/>
          {youtubeData.length ? <ExerciseVideos youtubeData={youtubeData} name={exerciseDetail.name}/> : <Loader />}
          <SimilarExercises similarExercises={similarExercises} similarEquipment={similarEquipment} /> 
        </Box>
      }
    </div>
   
  )
}

export default ExerciseDetail