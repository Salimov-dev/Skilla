import { styled, Box } from "@mui/material";
import {
  AudioPlaySVG,
  AudioStopSVG,
} from "../../../../../data/svg-storage";

const AudioPlay = styled(Box)`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 3px;
`;

const AudioStop = styled(Box)`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayStopButton = ({ isPlay, playHandler, endHandler }) => {
  return isPlay ? (
    <AudioStop onClick={endHandler}>
      <AudioStopSVG />
    </AudioStop>
  ) : (
    <AudioPlay onClick={playHandler}>
      <AudioPlaySVG />
    </AudioPlay>
  );
};

export default PlayStopButton;
