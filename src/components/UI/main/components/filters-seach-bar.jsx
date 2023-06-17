import Search from "../../search/search";
import { Box, styled } from "@mui/material";
import Dropdown from "../../../common/form/dropdown/dropdown";

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
  );
};

export default FiltersSearchBar;
