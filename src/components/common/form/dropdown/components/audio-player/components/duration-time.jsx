import { styled, Box } from "@mui/material";
import DurationAudioInSeconds from "../../../../../../UI/main/table/components/duraion-audio";

const AudioTime = styled(Box)`
  width: 36px;
  text-align: center;
  background-color: theme.palette.UI.accent.main;
`;
const DurationTime = ({ time, duration }) => {
  return (
    <AudioTime>{duration || <DurationAudioInSeconds time={time} />}</AudioTime>
  );
};

export default DurationTime;
