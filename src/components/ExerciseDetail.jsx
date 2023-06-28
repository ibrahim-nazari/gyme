import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, fetchYoutubeData } from "../utils/api";
import Detail from "./Detail";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exerciseMuscles, setExerciseMuscles] = useState([]);
  const [exerciseEquipments, setExerciseEquipments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(`exercise/${id}`);
      setExerciseDetail(exerciseDetailData);
    };

    fetchExerciseData();
  }, [id]);
  useEffect(() => {
    const fetchVideo = async () => {
      const exerciseVideosData = await fetchYoutubeData(
        `search?query=${exerciseDetail.name}`
      );
      setExerciseVideos(exerciseVideosData.contents);
    };
    exerciseDetail?.name && fetchVideo();
  }, [exerciseDetail.name]);
  useEffect(() => {
    const fetchMuscleExerciseData = async () => {
      const exerciseMuscleData = await fetchData(
        `target/${exerciseDetail.target}`
      );
      setExerciseMuscles(exerciseMuscleData);
    };
    exerciseDetail?.target && fetchMuscleExerciseData();
  }, [exerciseDetail.target]);
  useEffect(() => {
    const fetchEquipmentExerciseData = async () => {
      const exerciseEquipmentData = await fetchData(
        `equipment/${exerciseDetail.equipment}`
      );
      setExerciseEquipments(exerciseEquipmentData);
    };
    exerciseDetail?.equipment && fetchEquipmentExerciseData();
  }, [exerciseDetail.equipment]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} />
      <SimilarExercises
        exerciseMuscles={exerciseMuscles}
        exerciseEquipments={exerciseEquipments}
      />
    </Box>
  );
};

export default ExerciseDetail;
