import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { useAuthContext } from "../hooks/useAuthContext";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuthContext();

  //conditions for pagination
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const scrollTo = document.querySelector("#scrollTo");

  // Paginate through exercises 
  const paginate = (ev, value) => {
    setCurrentPage(value);
    // window.scrollTo({top: 1200, behavior: "smooth"})
    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    const url = "https://backend-fitness-auth.onrender.com";
  // GET ALL EXERCISES FROM SERVER 
    const fetchAllExercises = async () => {
      let allExercises = [];
      // if body part = all then fetch all exercises
      if (bodyPart === "all") {
        allExercises = await fetchData(url, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      } else {
        // if body part is not al then fetch exercises for specific body part 
        allExercises = await fetchData(`${url}/bodyPart/${bodyPart}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      }
      setExercises(allExercises.exercises);
    };
    if (user) {
      fetchAllExercises();
    }
  }, [bodyPart, user]);

  return (
    <Box id="exercises" p="20px" sx={{ mt: { lg: "100px", xs: "50px" } }}>
      <Typography variant="h4" mb="40px" id="scrollTo">
        Showing Results
      </Typography>
      {!user && (
        <Typography variant="h8" mb="40px">
          To show results you must be logged in....
        </Typography>
      )}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "100px", xs: "50px" } }}
      >
        {exercises &&
          currentExercises.map((exercise, i) => (
            <ExerciseCard key={i} data={exercise} />
          ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            shape="rounded"
            size="large"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            defaultPage={1}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
