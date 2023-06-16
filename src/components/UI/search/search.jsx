import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputBase, styled, Box } from "@mui/material";

const SearchStyled = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Search = ({ onSearchQuery }) => {
  return (
    <SearchStyled>
      <SearchOutlinedIcon
        sx={{ color: "rgba(173, 191, 223, 1)", width: "20px" }}
      />
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 14 }}
        placeholder="Поиск по звонкам"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => onSearchQuery(e.target.value)}
      />
    </SearchStyled>
  );
};

export default Search;
