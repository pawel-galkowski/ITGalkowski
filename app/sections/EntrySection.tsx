import { fullLayoutSectionStyle } from "../styles";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const EntrySection: React.FC = () => {
  return (
    <Box sx={[fullLayoutSectionStyle, { flex: 1 }]}>
      <Box
        sx={{
          gap: 4,
          display: "flex",
          flexDirection: "column",
          pl: 8,
          pr: 4,
          alignItems: "flex-start",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <Typography variant="h2">Master Your Projects with Expert Code</Typography>
        <Typography variant="body1">
          Elevate your projects with expert full-stack JavaScript solutions in Katowice. Unlock
          seamless integration and cutting-edge innovation.
        </Typography>
        <Button variant="contained" color="primary">
          Hire Your Expert
        </Button>
      </Box>
      <Box
        component="img"
        src="/img/top-layout.jpg"
        alt="Top Layout"
        sx={{
          width: "50%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default EntrySection;
