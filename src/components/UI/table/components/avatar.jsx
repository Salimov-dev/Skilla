import { Avatar } from "@mui/material";

const PersonAvatar = ({ src, alt }) => {
  return (
    <Avatar>
      <img src={src} alt={alt} />
    </Avatar>
  );
};

export default PersonAvatar;
