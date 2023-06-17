import React, { useMemo, useRef, useState } from "react";
import { Box, IconButton, InputBase, styled, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import Header from "../header/header";
import CallsListTable from "../table/table";
import { useSelector } from "react-redux";
import { getCallsList, getCallsStatus } from "../../../store/calls-list.store";
import Search from "../search/search";
import Dropdown from "../../common/form/dropdown/dropdown";
import Loader from "../../common/loader";

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
  const [filterParams, setFilterParams] = useState({
    inOut: "",
  });
  const calls = useSelector(getCallsList());
  const isCallsLoading = useSelector(getCallsStatus());
  const inputSearchField = useRef(null);
  let editedSearchQuery = searchQuery.replace(/[^\d]/g, "");

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

  const handleClearFilters = () => {
    setFilterParams("");
  };

  const handleChange = (target) => {
    setFilterParams((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const optionsCalls = [
    {
      id: 1,
      label: "Все звонки",
      name: "inOut",
      inOut: "-1",
    },
    {
      id: 2,
      label: "Входящие звонки",
      name: "inOut",
      inOut: "1",
    },
    {
      id: 3,
      label: "Исходящие звонки",
      name: "inOut",
      inOut: "0",
    },
  ];

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content sx={{ paddingBottom: "546px" }}>
        <Header onSearchFieldFocus={handleSearchFieldFocus} />
        {!isCallsLoading ? (
          <MainStyled>
            <Container>
              <Box sx={{ height: "50px" }}>Баланс и выбор дат</Box>

              <SearchAndFilters>
                <Search
                  searchQuery={editedSearchQuery}
                  onSearchQuery={setSearchQuery}
                  refLink={inputSearchField}
                  onClearFilters={handleClearFilters}
                />
                <Box>
                  <Dropdown
                    options={optionsCalls}
                    onChange={handleChange}
                    name="inOut"
                    currentValue={filterParams.inOut}
                    defaultLabel="Звонки"
                    onClearFilters={handleClearFilters}
                  />
                </Box>
              </SearchAndFilters>
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
