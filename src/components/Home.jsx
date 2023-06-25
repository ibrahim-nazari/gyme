import { Box } from "@mui/material";
import React, { useState } from "react";
import { SearchExercises, HeroBanner, Exercises } from ".";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
