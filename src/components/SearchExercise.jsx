import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  ThemeProvider,
} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

import { fetchData } from "../utils/fetchData";
import { useAuthContext } from "../hooks/useAuthContext";

function SearchExercise({ setExercises, bodyPart, setBodyPart, themes }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const { user } = useAuthContext();
  
  // FETCH ALL EXERCISES AS FAR AS THERE IS A USER 
  useEffect(() => {
    const fetchExercises = async () => {
      // const url = "http://localhost:3000/";
      const url = "https://backend-fitness-auth.onrender.com";

      // getting data from server
      const bodyPartsData = await fetchData(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      });
      // insert all data into var
      setBodyParts(["all", ...bodyPartsData.exercisesBodyPartsList]);
    };
    // if no user do not get data
    if (user) {
      fetchExercises();
    }
  }, [user]);

  // SUBMIT SEARCH INPUT FORM 
  const handleSearch = async (bodyPartSearch) => {
    // const url = "http://localhost:3000";
    const url = "https://backend-fitness-auth.onrender.com";

    // if there is a body part or search input then get data from server
    if (search || bodyPartSearch) {
      const exerciseData = await fetchData(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      });

      // set data to all if input or body part search equal to all
      if ((search || bodyPartSearch) === "all") {
        setExercises(exerciseData.exercises);
        setSearch("");
      } else {
        // filter data by input or body part search 
        const searchedExercises = exerciseData.exercises.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search || bodyPartSearch) ||
            exercise.target.toLowerCase().includes(search || bodyPartSearch) ||
            exercise.bodyPart
              .toLowerCase()
              .includes(search || bodyPartSearch) ||
            exercise.equipment.toLowerCase().includes(search || bodyPartSearch)
        );
        // insert data into var
        setExercises(searchedExercises);
        setSearch("");
      }
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="40px">
      <Typography sx={{ fontSize: { lg: "50px", xs: "25px" } }}>
        SEARCH FOR YOUR NEEDS
      </Typography>
      <Box position="relative">
        <ThemeProvider theme={themes}>
          <TextField
            size="small"
            sx={{
              input: {
                fontWeight: "500",
              },
              height: 40,
              width: { lg: "1000px", sm: "420px", xs: "250px" },
              backgroundColor: "white",
            }}
            color="btn"
            type="text"
            label="Search Exercises"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          ></TextField>

          <Button
            variant="contained"
            color="btn"
            onClick={() => {
              handleSearch();
              window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
            }}
            sx={{ height: 40 }}
          >
            Search
          </Button>
        </ThemeProvider>
      </Box>

      {user ? (
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollBar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </Box>
      ) : (
        <Typography variant="h8" mb="40px">
          For searching you must be logged in...
        </Typography>
      )}
    </Stack>
  );
}

export default SearchExercise;
