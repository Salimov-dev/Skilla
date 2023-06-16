import React, { useMemo, useState } from "react";
import { Box, IconButton, InputBase, styled, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import Header from "../header/header";
import CallsListTable from "../table/table";
import { useSelector } from "react-redux";
import { getCallsList } from "../../../store/calls-list.store";
import Search from "../search/search";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Component = styled(Box)`
  display: flex;
`;

const Content = styled(Box)`
  width: 100%;
`;

const Container = styled(Box)`
  minwidth: 1440px;
  display: flex;
  flex-direction: column;
`;

const MainStyled = styled(Box)`
  width: 1440px;
  margin: 0 auto;
`;

const SearchAndFilters = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const CallsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const calls = useSelector(getCallsList());

  const searchedCalls = useMemo(() => {
    return calls.filter((call) => call.to_number.includes(searchQuery));
  }, [searchQuery, calls]);

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content sx={{ paddingBottom: "546px" }}>
        <Header />

        <MainStyled>
          <Container>
            <Box sx={{ height: "50px" }}>Баланс и выбор дат</Box>

            <SearchAndFilters>
              <Search onSearchQuery={setSearchQuery} />
              <Box>Sorting</Box>
            </SearchAndFilters>

            <CallsListTable calls={searchedCalls} />
          </Container>
        </MainStyled>
      </Content>
    </Component>
  );
};

export default CallsPage;
