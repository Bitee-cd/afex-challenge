"use client";
import React, { useState, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

// ----------------------------------------------------------------------

interface Language {
  value: string;
  label: string;
  icon: string;
}

const LANGS: Language[] = [
  {
    value: "en",
    label: "English",
    icon: "/svg/ic_flag_en.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/svg/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/svg/ic_flag_fr.svg",
  },
];

// ----------------------------------------------------------------------

const LanguagePopover: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(anchorEl && {
            bgcolor: "action.selected",
          }),
        }}
      >
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </IconButton>

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === LANGS[0].value}
            onClick={handleClose}
            className="bg_sec"
            sx={{ typography: "body2", py: 1 }}
          >
            <Box
              component="img"
              alt={option.label}
              src={option.icon}
              sx={{ width: 28, mr: 2 }}
              className="text_p"
            />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
