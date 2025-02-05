"use client";

import { Switch, FormControlLabel } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <FormControlLabel
      control={
        <Switch
          checked={mode === "dark"}
          onChange={toggleTheme}
          color="primary"
        />
      }
      label={mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    />
  );
}
