import React, { useMemo, useRef, useState } from "react";
import { Box, IconButton, InputBase, styled, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import Header from "../header/header";
import CallsListTable from "../table/table";
import { useSelector } from "react-redux";
import { getCallsList, getCallsStatus } from "../../../store/calls-list.store";
import Loader from "../../common/loader";
import FiltersSearchBar from "../main/components/search-and-filters";

import Balance from "../balance/balance";

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

const CallsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, setFilterParams] = useState({
    inOut: "",
  });
  const calls = useSelector(getCallsList());
  const isCallsLoading = useSelector(getCallsStatus());
  const inputSearchField = useRef(null);
  let editedSearchQuery = searchQuery.replace(/[^\d]/g, "");
  // console.log("calls", calls);

  const searchedCalls = useMemo(() => {
    return calls.filter((call) =>
      call.to_number.toLowerCase().includes(editedSearchQuery.toLowerCase())
    );
  }, [searchQuery, calls]);

  const filteredCalls = () => {
    if (typeof filterParams.inOut === "number") {
      const result = searchedCalls.filter(
        (call) => call.in_out === filterParams.inOut
      );
      return result;
    } else {
      return searchedCalls;
    }
  };

  const handleSearchFieldFocus = () => {
    inputSearchField.current.focus();
  };

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content sx={{ paddingBottom: "546px" }}>
        <Header onSearchFieldFocus={handleSearchFieldFocus} />
        {!isCallsLoading ? (
          <MainStyled>
            <Container>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="end"
                gap="50px"
                sx={{ padding: "20px 0px" }}
              >
                <Balance />
                <Box>menu</Box>
              </Box>

              <FiltersSearchBar
                refLink={inputSearchField}
                filterParams={filterParams}
                setFilterParams={setFilterParams}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <CallsListTable calls={filteredCalls()} />
            </Container>
          </MainStyled>
        ) : (
          <Loader />
        )}
      </Content>
    </Component>
  );
};

export default CallsPage;
