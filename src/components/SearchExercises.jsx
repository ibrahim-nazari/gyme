import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExcercise = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const allBodyParts = await fetchData(`bodyPartList`);
      setBodyParts(["all", ...allBodyParts]);
    };

    fetchBodyParts();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search && search != "") {
      const exerciseData = await fetchData();
      //console.log("exerciseData ---", exerciseData);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        texAlign="center"
      >
        Awesome Exercises you <br /> Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search exercies"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          onClick={handleSearch}
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          className="search-btn"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExcercise;
