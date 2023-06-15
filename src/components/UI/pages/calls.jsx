import React, { useState } from "react";
import { Avatar, Box, styled, Typography, Checkbox } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import { useSelector } from "react-redux";
import { getCallsList } from "../../../store/calls-list.store";
import Header from "../header/header";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import CallReceivedOutlinedIcon from "@mui/icons-material/CallReceivedOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import dayjs from "dayjs";

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
  const calls = useSelector(getCallsList());
  const [hoveredRow, setHoveredRow] = React.useState(null);
  const timeOfCallsTable = ({ date }) => {
    const time = dayjs(date).format("HH:mm");
    return time;
  };

  const convertToTimeString = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(1, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const columns = [
    {
      field: "in_out",
      headerName: "Тип",
      width: 50,
      sortable: false,
      showColumnVerticalBorder: false,
      renderCell: ({ row: { in_out } }) => {
        return (
          <Box>
            {in_out ? (
              <ArrowOutwardOutlinedIcon
                sx={{ color: theme.palette.UI.green.main }}
              />
            ) : (
              <CallReceivedOutlinedIcon
                sx={{ color: theme.palette.UI.blue.main }}
              />
            )}
          </Box>
        );
      },
    },

    {
      field: "date",
      headerName: "Время",
      width: 89,
      sortable: false,
      renderCell: ({ row: { date } }) => {
        return timeOfCallsTable({ date });
      },
    },
    {
      field: "person_avatar",
      headerName: "Сотрудник",
      width: 95,
      sortable: false,
      renderCell: ({ row: { person_avatar } }) => {
        return (
          <Avatar>
            <img src={person_avatar} alt="" />
          </Avatar>
        );
      },
    },
    {
      field: "from_site",
      headerName: "",
      width: 66,
      sortable: false,
      renderCell: ({ row: { from_site } }) => {
        return from_site ? (
          <LanguageOutlinedIcon
            sx={{ color: theme.palette.UI.icon.main, width: "45px" }}
          />
        ) : null;
      },
    },
    { field: "to_number", headerName: "Звонок", width: 350, sortable: false },
    {
      field: "source",
      headerName: "Источник",
      sortable: false,
      renderCell: ({ row: { source } }) => {
        return (
          <Typography sx={{ color: theme.palette.UI.grey.main }}>
            {source}
          </Typography>
        );
      },
    },
    {
      field: "is_skilla",
      headerName: "Оценка",
      width: 150,
      sortable: false,
      renderCell: ({ row: { is_skilla } }) => {
        return <Typography>Оценка</Typography>;
      },
    },
    {
      field: "time",
      headerName: "Длительность",
      headerAlign: "right",
      align: "right",
      flex: 1,
      padding: "24px",
      sortable: false,
      renderCell: ({ row: { time, id } }) => {
        if (hoveredRow === id) {
          return <Box>Hello audio!</Box>;
        } else
          return (
            <Typography
              sx={{
                paddingRight: "14px",
              }}
            >
              {time ? convertToTimeString(time) : ""}
            </Typography>
          );
      },
    },
  ];

  const onMouseEnterRow = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    setHoveredRow(id);
  };

  const onMouseLeaveRow = (event) => {
    setHoveredRow(null);
  };

  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content sx={{ paddingBottom: "546px" }}>
        <Header />

        <MainStyled>
          <Container>
            <Box>Баланс и выбор дат</Box>
            <Box>Поиск и фильтры</Box>
            <Box
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 5px #E9EDF3",
                borderRadius: "8px",
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-columnHeader": {
                  color: theme.palette.UI.textHeader.main,
                },
                "& .MuiDataGrid-columnHeader:last-child": {
                  paddingRight: "14px",
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "rgba(212, 223, 243, 0.17)",
                  cursor: "pointer",
                },
                "& .MuiDataGrid-cell": {
                  borderColor: "rgba(234, 240, 250, 1)",
                },
                "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                  outline: "none !important",
                },
                "& .MuiDataGrid-columnHeaders": {
                  borderColor: "rgba(234, 240, 250, 1)",
                },
                "& .MuiCheckbox-root": {
                  color: !selectedRows.length
                    ? theme.palette.UI.icon.main
                    : theme.palette.UI.grey.main,
                },
                "& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
              }}
            >
              <DataGrid
                disableColumnMenu
                checkboxSelection
                hideFooter
                rows={calls}
                rowHeight={65}
                columns={columns}
                sx={{ padding: "6px 0px" }}
                onRowSelectionModelChange={(ids) => {
                  setSelectedRows(ids);
                }}
                slotProps={{
                  row: {
                    onMouseEnter: onMouseEnterRow,
                    onMouseLeave: onMouseLeaveRow,
                  },
                }}
              />
            </Box>
          </Container>
        </MainStyled>
      </Content>
    </Component>
  );
};

export default CallsPage;
