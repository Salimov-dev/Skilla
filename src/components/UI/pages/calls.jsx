import React, { useMemo, useState } from "react";
import { Box, IconButton, InputBase, styled, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import Header from "../header/header";
import CallsListTable from "../table/table";
import { useSelector } from "react-redux";
import { getCallsList } from "../../../store/calls-list.store";
import Search from "../search/search";
import Dropdown from "../../common/form/dropdown/dropdown";
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
  const [filterParams, setFilterParams] = useState({
    inOut: "",
    text: "213",
    text2: "gf3",
  });
  // console.log("calls", calls);
  console.log("filterParams", filterParams);

  const handleClearFilters = () => {
    setFilterParams("");
    // const copyData = {}
    // for (const key in da)
  };

  const searchedCalls = useMemo(() => {
    return calls.filter((call) =>
      call.to_number.toLowerCase().includes(searchQuery.toLowerCase())
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

  // console.log("filteredCalls", filteredCalls());

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
        <Header />

        <MainStyled>
          <Container>
            <Box sx={{ height: "50px" }}>Баланс и выбор дат</Box>

            <SearchAndFilters>
              <Search onSearchQuery={setSearchQuery} />
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
      </Content>
    </Component>
  );
};

export default CallsPage;
