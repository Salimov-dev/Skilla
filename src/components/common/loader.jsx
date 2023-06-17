import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
};

export default Loader;
