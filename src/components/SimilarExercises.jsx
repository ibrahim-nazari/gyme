import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ exerciseMuscles, exerciseEquipments }) => {
  return (
    <Box
      sx={{ mt: { lg: "100px", xs: "0px" }, mb: { lg: "50px", xs: "10px" } }}
    >
      <Typography mt="20px" mb="10px" variant="h3">
        Exercises that target the same muscle group
      </Typography>{" "}
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exerciseMuscles.length ? (
          <HorizontalScrollbar data={exerciseMuscles} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography mt="20px" mb="10px" variant="h3">
        Exercises that use the same equipment
      </Typography>{" "}
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exerciseMuscles.length ? (
          <HorizontalScrollbar data={exerciseEquipments} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
