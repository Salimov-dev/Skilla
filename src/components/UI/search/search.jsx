import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputBase, styled, Box } from "@mui/material";
import { theme } from "../../../theme";

const SearchStyled = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Search = ({ searchQuery, onSearchQuery, refLink, clearInput }) => {
  const formatPhoneNumber = (value) => {
    if (!value) return value;

    let phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumber == 7) {
      onSearchQuery("");
    }

    if (phoneNumberLength <= 1) {
      return `+7 ${phoneNumber.replace("7", "")}`;
    } else if (phoneNumberLength <= 4) {
      return `+7 (${phoneNumber.slice(1)}`;
    } else if (phoneNumberLength <= 7) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    } else if (phoneNumberLength <= 9) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7)}`;
    } else {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    }
  };

  return (
    <SearchStyled>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          width: 400,
          height: 40,
          fontSize: 14,
          cursor: "pointer",
          margin: 0,
          padding: searchQuery ? "0 12px" : "0",
          borderRadius: searchQuery ? "48px" : "0",
          border: searchQuery ? "1px solid #002CFB" : "0",
          background: searchQuery ? "#FFFFFF" : "0",
          "& > svg:hover": {
            color: theme.palette.UI.accent.main,
          },
          "& > svg": {
            marginRight: "12px",
          },
          "&.Mui-focused": {
            padding: "0 12px",
            borderRadius: "48px",
            border: "1px solid #002CFB",
            background: "#FFFFFF",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        }}
        type="search"
        startAdornment={
          <SearchOutlinedIcon
            sx={{ color: "rgba(173, 191, 223, 1)", width: "20px" }}
          />
        }
        placeholder="Поиск по звонкам"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => onSearchQuery(e.target.value)}
        value={formatPhoneNumber(searchQuery)}
        inputRef={refLink}
        inputProps={{ maxLength: 18 }}
      />
    </SearchStyled>
  );
};

export default Search;
