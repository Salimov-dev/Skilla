import { Box, styled } from "@mui/material";
import Dropdown from "../../common/form/dropdown/dropdown";
import Search from "./components/search";
import ClearFiltersButton from "../../common/form/dropdown/components/clear-filters-btn";

const SearchAndFilters = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const FiltersSearchBar = ({
  refLink,
  filterParams,
  setFilterParams,
  searchQuery,
  setSearchQuery,
}) => {
  const handleClearFilters = () => {
    setFilterParams("");
  };

  const handleChange = (target) => {
    setFilterParams((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const isFilterParamsEmpty = (obj) => {
    for (let key in obj) {
      if (obj[key] !== "") {
        return false;
      }
    }
    return true;
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
    <SearchAndFilters>
      <Search
        searchQuery={searchQuery}
        onSearchQuery={setSearchQuery}
        refLink={refLink}
        onClearFilters={handleClearFilters}
      />
      <Box display="flex">
        {!isFilterParamsEmpty(filterParams) && (
          <ClearFiltersButton onClearFilters={handleClearFilters} />
        )}
        <Dropdown
          options={optionsCalls}
          onChange={handleChange}
          name="inOut"
          currentValue={filterParams.inOut}
          onClearFilters={handleClearFilters}
          filterParamsItem="inOut"
        />
      </Box>
    </SearchAndFilters>
  );
};

export default FiltersSearchBar;
