import React, { useState } from "react";
// libraries
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
// utils
import { timeOfCallsTable } from "../../../utils/time-of-calls-table";
// components
import InOut from "./components/in-out";
import PersonAvatar from "./components/avatar";
import FromSite from "./components/from-site";
import Source from "./components/source";
import DurationAudio from "./components/duraion-audio";
import AudioPlayer from "../../common/audio-player";
// other
import { theme } from "../../../theme";
import { BadlySVG, FineSVG, GreatSVG } from "../../../data/svg-storage";
import dayjs from "dayjs";

const CallsListTable = ({ calls }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      field: "in_out",
      headerName: "Тип",
      width: 50,
      sortable: false,
      showColumnVerticalBorder: false,
      renderCell: ({ row: { in_out } }) => {
        return <InOut status={in_out} />;
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
        return <PersonAvatar src={person_avatar} alt="Аватар" />;
      },
    },
    {
      field: "from_site",
      headerName: "",
      width: 66,
      sortable: false,
      renderCell: ({ row: { from_site } }) => {
        return <FromSite site={from_site} />;
      },
    },
    { field: "to_number", headerName: "Звонок", width: 350, sortable: false },
    {
      field: "source",
      headerName: "Источник",
      sortable: false,
      renderCell: ({ row: { source } }) => {
        return <Source source={source} />;
      },
    },
    {
      field: "grade",
      headerName: "Оценка",
      width: 150,
      sortable: false,
      renderCell: ({ row: { grade } }) => {
        return (
          <Box className="grade">
            {grade === 3 ? (
              <GreatSVG />
            ) : grade === 2 ? (
              <FineSVG />
            ) : grade === 1 ? (
              <BadlySVG />
            ) : (
              ""
            )}
          </Box>
        );
      },
    },
    {
      field: "time",
      headerName: "Длительность",
      headerAlign: "right",
      align: "right",
      flex: 1,
      sortable: false,
      renderCell: ({ row: { time, id } }) => {
        if (hoveredRow === id && time) {
          return <AudioPlayer time={time} />;
        } else return <DurationAudio time={time} />;
      },
    },
  ];

  const transformDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  const dateToday = dayjs().format("YYYY-MM-DD");
  const callsArrayToday = calls.filter(
    (call) => transformDate(call.date) === dateToday
  );

  const dateYesterday = dayjs().add(-1, "day").format("YYYY-MM-DD");
  const callsArrayYesterday = calls.filter(
    (call) => transformDate(call.date) === dateYesterday
  );

  const onMouseEnterRow = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    setHoveredRow(id);
  };

  const onMouseLeaveRow = () => {
    setHoveredRow(null);
  };

  return (
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
          paddingRight: "38px",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: theme.palette.table.hover,
          cursor: "pointer",
        },
        "& .MuiDataGrid-cell": {
          borderColor: theme.palette.table.row,
        },
        "& .MuiDataGrid-cell:last-child": {
          paddingRight: "30px",
        },
        "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
          outline: "none",
        },
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
          outline: "none !important",
        },
        "& .MuiDataGrid-columnHeaders": {
          borderColor: theme.palette.table.row,
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
        disableRowSelectionOnClick
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
  );
};

export default CallsListTable;
