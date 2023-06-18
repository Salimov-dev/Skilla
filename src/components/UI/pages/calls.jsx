import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, IconButton, InputBase, styled, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import Header from "../header/header";
import CallsListTable from "../main/table/table";
import { useSelector } from "react-redux";
import { getCallsList, getCallsStatus } from "../../../store/calls-list.store";
import Loader from "../../common/loader";
import Balance from "../main/components/balance";
import FiltersSearchBar from "../main/filters-search-bar";
import FilterByDate from "../main/components/filter-by-date/filter-by-date";

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
    dateRange: "",
  });
  const calls = useSelector(getCallsList());
  const isCallsLoading = useSelector(getCallsStatus());
  const inputSearchField = useRef(null);
  let editedSearchQuery = searchQuery.replace(/[^\d]/g, "");
  // console.log("calls", calls);
  // console.log("filterParams", filterParams);

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

  const optionsDateRange = [
    {
      id: 1,
      label: "3 дня",
      name: "dateRange",
      dateRange: "3",
    },
    {
      id: 2,
      label: "Неделя",
      name: "dateRange",
      dateRange: "7",
    },
    {
      id: 3,
      label: "Месяц",
      name: "dateRange",
      dateRange: "1",
    },
    {
      id: 4,
      label: "Год",
      name: "dateRange",
      dateRange: "12",
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
              <Box
                display="flex"
                alignItems="center"
                justifyContent="end"
                gap="50px"
                sx={{ padding: "20px 0px" }}
              >
                <Balance />
                <FilterByDate
                  filterParams={filterParams}
                  setFilterParams={setFilterParams}
                  options={optionsDateRange}
                  onChange={handleChange}
                  name="filterByDate"
                  currentValue={filterParams.dateRange}
                />
              </Box>

              <FiltersSearchBar
                refLink={inputSearchField}
                filterParams={filterParams}
                setFilterParams={setFilterParams}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                options={optionsCalls}
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
