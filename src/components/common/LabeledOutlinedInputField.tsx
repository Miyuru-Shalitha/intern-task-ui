import { useId, type ChangeEventHandler } from "react";
import { Stack } from "@mui/material";

export default function LabeldOutlinedInputField({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  const id = useId();

  return (
    <Stack gap={12 / 8}>
      <label
        htmlFor={id}
        style={{
          fontSize: 16,
          fontWeight: 600
        }}
      >
        {label}
      </label>

      <input
        style={{
          border: "1px solid #D8D8D8",
          borderRadius: 5,
          height: 40,
          padding: 8
        }}
        id={id}
        type="email"
        value={value}
        onChange={onChange}
      />
    </Stack>

  );
}