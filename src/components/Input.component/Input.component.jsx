import TextField from "@mui/material/TextField";

export default function Input({ name, label, type, onChange,value,error }) {
  return (
    <TextField
      onChange={(e) => {
        onChange(e);
      }}
      name={name}
      label={label}
      variant="standard"
      error={error}
      required
      type={type}
      value={value}
    
    />
  );
}
