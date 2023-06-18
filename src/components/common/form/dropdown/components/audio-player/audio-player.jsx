import { useRef, useState } from "react";
// libraries
import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
// components
import PlayStopButton from "./components/play-stop-btn";
import DurationTime from "./components/duration-time";
import AudioInput from "./components/audio-input";
import ButtonsBlock from "./components/buttons-block";
// audio
import audio from "../../../../../../assets/audio/audio.mp3";
import Audio from "./components/audio";

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
      <Audio
        audio={audio}
        audioItem={audioItem}
        timeUpdateHandler={timeUpdateHandler}
        endHandler={endHandler}
      />
      <DurationTime time={time} duration={duration} />
      <PlayStopButton
        isPlay={isPlay}
        playHandler={playHandler}
        endHandler={endHandler}
      />
      <AudioInput changeHandler={changeHandler} audioItem={audioItem} />
      <ButtonsBlock isPlay={isPlay} />
    </AudioStyled>
  );
};

export default AudioPlayer;
