import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";

export default function DateReserve({
  onDateChange,
  onDentistChange,
  DentistId
}: {
  onDateChange: Function,
  onDentistChange: Function,
  DentistId?: string
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [Dentist, setDentist] = useState<string>(DentistId || '');

  const DentistData = [
    {_id:"11", name:"pol", year_of_experience:1, area_of_experience:"abc", medical_fee:12, id:"11"},
  ];

  return(
    <div className="flex flex-col">
      <Select 
        variant="standard" 
        name="location" 
        id="location" 
        value={Dentist}
        onChange={(e) => { setDentist(e.target.value); onDentistChange(e.target.value) }}
        className="h-[2em] w-[200px] mx-10 my-6"
      >
        {DentistData.map((dentist) => (
          <MenuItem key={dentist.id} value={dentist.id}>{dentist.name}</MenuItem>
        ))}
      </Select>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          className="bg-white my-6"
          value={reserveDate}
          onChange={(value) => { setReserveDate(value); onDateChange(value) }}
        />
      </LocalizationProvider>
    </div>
  );
}
