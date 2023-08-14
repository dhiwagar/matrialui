import React from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import { theme } from "./theme";
import AddIcon from "@mui/icons-material/Add";
import { Typography, colors, styled } from "@mui/material";
export const Practice = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightcoral",
    },
  }));

  return (
    <>
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<SettingsIcon></SettingsIcon>}
        >
          Setting
        </Button>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<AddIcon />}
        >
          Add Name
        </Button>
        <Typography variant="h1" component="p">
          It uses h1 style But it's a p tag
        </Typography>
        <BlueButton>My Bule</BlueButton>
      </div>
    </>
  );
};
