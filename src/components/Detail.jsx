import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h5">
          {" "}
          Exercises keep you strong . {name} {`  `}
          si one ofthe best exercises to garget your {target}. it will help you
          improve your mood and gain energy.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
