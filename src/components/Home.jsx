import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SearchExercises, HeroBanner, Exercises } from ".";
import { fetchData } from "../utils/api";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  useEffect(() => {
    let data = [];
    const fetchExercise = async () => {
      if (bodyPart == "all") {
        data = await fetchData();
      } else {
        data = await fetchData(`bodyPart/${bodyPart}`);
      }
      if (!data.message && !data.error) {
        console.log("data", data);
        setExercises(data);
      }
    };
    fetchExercise();
  }, [bodyPart]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises exercises={exercises} />
    </Box>
  );
};

export default Home;
