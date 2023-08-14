import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import Switch from "@mui/material/Switch";

export const Sidebar = ({ mode, setmode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>

            <ListItemText primary="Homepage" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <ArticleIcon></ArticleIcon>
            </ListItemIcon>

            <ListItemText primary="Pages" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <GroupIcon></GroupIcon>
            </ListItemIcon>

            <ListItemText primary="Groups" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <StorefrontIcon></StorefrontIcon>
            </ListItemIcon>

            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <PersonIcon></PersonIcon>
            </ListItemIcon>

            <ListItemText primary="Friends" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <SettingsIcon></SettingsIcon>
            </ListItemIcon>

            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <AccountBoxIcon></AccountBoxIcon>
            </ListItemIcon>

            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
        <List disablePadding>
          <ListItemButton Component="a" herf="#home">
            <ListItemIcon>
              <ModeNightIcon></ModeNightIcon>
            </ListItemIcon>
            <Switch
              onChange={(e) => setmode(mode === "light" ? "dark" : "light")}
            ></Switch>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};
