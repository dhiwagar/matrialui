import {
  AppBar,
  Avatar,
  Badge,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import Box from "@mui/material/Box";
import ContactlessIcon from "@mui/icons-material/Contactless";
import { useState } from "react";

export const Navbar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 9px",
    borderRadius: 8,
    width: "40%",
  }));
  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar ledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          DHIWGAR
        </Typography>
        <ContactlessIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></ContactlessIcon>
        <Search>
          <Input placeholder="Search"></Input>
        </Search>

        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white"></MailIcon>
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon></NotificationsIcon>
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            onClick={(e) => setopen(true)}
          ></Avatar>
        </Icon>
        <UserBox onClick={(e) => setopen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          ></Avatar>
          <Typography variant="span"> DHIWGAR</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
