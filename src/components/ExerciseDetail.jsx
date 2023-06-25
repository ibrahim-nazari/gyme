import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/api";
import Detail from "./Detail";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";

const ExerciseDetail = () => {
  console.log("seee log");
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(`exercise/${id}`);

      setExerciseDetail(exerciseDetailData);
    };

    fetchExerciseData();
  }, [id]);
  console.log("id", id);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
