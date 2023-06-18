import { useMemo, useState } from "react";
// libraries
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux";
// components
import Balance from "./components/balance";
import FilterByDate from "./components/filter-by-date/filter-by-date";
import FiltersSearchBar from "./components/filters-search-bar";
import CallsListTable from "./table/table";
import Loader from "../../common/loader";
// other
import { getCallsList, getCallsStatus } from "../../../store/calls-list.store";

const Container = styled(Box)`
  minwidth: 1440px;
  display: flex;
  flex-direction: column;
`;

const MainStyled = styled(Box)`
  width: 1440px;
  margin: 0 auto;
`;

const Main = ({ refLink }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, setFilterParams] = useState({
    inOut: "",
    dateRange: "",
  });
  const calls = useSelector(getCallsList());
  const isCallsLoading = useSelector(getCallsStatus());
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

  {
    return !isCallsLoading ? (
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
            refLink={refLink}
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
    );
  }
};

export default Main;
