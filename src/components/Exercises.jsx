import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../utils/api";
import ExerciseCard from "./ExerciseCard";
const exercisePerPage = 9;
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, val) => {
    setCurrentPage(val);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    let data = [];
    const fetchExercise = async () => {
      if (bodyPart == "all") {
        data = await fetchData();
      } else {
        data = await fetchData(`bodyPart/${bodyPart}`);
      }
      if (!data.message && !data.error) {
        setExercises(data);
      }
    };
    fetchExercise();
  }, [bodyPart]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
