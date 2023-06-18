import { styled } from "@mui/material";

const AudioInputStyled = styled(`input`)({
  width: "55%",
  marginRight: "10px",
});

const AudioInput = ({ changeHandler, audioItem }) => {
  return (
    <AudioInputStyled
      type="range"
      onChange={changeHandler}
      value={
        !audioItem.current?.currentTime
          ? 0
          : (audioItem.current?.currentTime / audioItem.current?.duration) * 100
      }
    />
  );
};

export default AudioInput;
