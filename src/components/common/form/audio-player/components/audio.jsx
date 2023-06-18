const Audio = ({audio, audioItem, timeUpdateHandler, endHandler}) => {
  return (
    <audio
      src={audio}
      ref={audioItem}
      onTimeUpdate={timeUpdateHandler}
      onEnded={endHandler}
    ></audio>
  );
};

export default Audio;
