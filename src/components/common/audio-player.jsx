import React, { useRef, useState } from "react";
// libraries
import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
// UI
import DurationAudioInSeconds from "../UI/table/components/duraion-audio";
// icons
import { AudioPlaySVG, AudioStopSVG } from "../../data/svg-storage";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ClearIcon from "@mui/icons-material/Clear";
// other
import audio from "../../assets/audio/audio.mp3";
import { theme } from "../../theme";

const AudioStyled = styled(Box)`
  width: 100%;
  height: 48px;
  border-radius: 48px;
  background-color: #eaf0fa;
  padding: 0 22px;
  color: #122945;
  display: flex;
  align-items: center;
  justify-content: start,
  position: absolute;
  gap: 10px
`;

const AudioTime = styled(Box)`
  width: 36px;
  text-align: center;
  background-color: theme.palette.UI.accent.main;
`;

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

const AudioInput = styled(`input`)({
  width: "55%",
  marginRight: "10px",
});

const AudioPlayer = ({ time }) => {
  const [isPlay, setIsplay] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState();
  const audioItem = useRef();

  const playHandler = () => {
    setIsplay(isPlay ? false : true);
    isPlay ? audioItem.current.pause() : audioItem.current.play();
  };

  const changeHandler = (event) => {
    setPercentage(event.target.value);
    audioItem.current.currentTime =
      (audioItem.current?.duration / 100) * event.target.value;
  };

  const endHandler = () => {
    setIsplay(isPlay ? false : true);
    audioItem.current.load();
  };

  const timeUpdateHandler = () => {
    let date = new Date(audioItem.current.currentTime * 1000);
    const time = dayjs(date).format("mm:ss");
    setDuration(time);
  };

  return (
    <AudioStyled>
      <audio
        src={audio}
        ref={audioItem}
        onTimeUpdate={timeUpdateHandler}
        onEnded={endHandler}
      ></audio>

      <AudioTime>
        {duration || <DurationAudioInSeconds time={time} />}
      </AudioTime>

      {isPlay ? (
        <AudioStop onClick={playHandler}>
          <AudioStopSVG />
        </AudioStop>
      ) : (
        <AudioPlay onClick={playHandler}>
          <AudioPlaySVG />
        </AudioPlay>
      )}

      <AudioInput
        type="range"
        onChange={changeHandler}
        value={
          !audioItem.current?.currentTime
            ? 0
            : (audioItem.current?.currentTime / audioItem.current?.duration) *
              100
        }
      />

      <Box sx={{ display: "flex", gap: "22px" }}>
        <FileDownloadIcon
          sx={{
            color: theme.palette.UI.icon.main,
            "&:hover": { color: theme.palette.UI.accent.main },
          }}
        />

        {isPlay && (
          <ClearIcon
            sx={{
              color: theme.palette.UI.icon.main,
              "&:hover": { color: theme.palette.UI.accent.main },
            }}
          />
        )}
      </Box>
    </AudioStyled>
  );
};

export default AudioPlayer;
