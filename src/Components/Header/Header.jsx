import { AppBar, Box, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";

export const Header = ({ burger, setBurger }) => {
  const [searchInputWidth, setSearchInputWidth] = useState(false);
  const [searchInputHidden, setSearchInputHidden] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#27566B",
          maxHeight: "70px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              color: "#6D9B34",
              transition: "0.5s all ease",
              transform: burger ? "none" : "rotate(90deg)",
            }}
            onClick={() => setBurger(!burger)}
          >
            <MenuIcon sx={{ color: "#6D9B34", fontSize: "52px" }} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Material UI
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
          >
            MUI
          </Typography>
          <Box
            sx={{
              display: "flex",
              // width: "40%",
              maxHeight: "40px",
              position: "relative",
              borderRadius: "5px",
              backgroundColor: "#6E92A1",
              alignItems: "center",
              transition: "2s all ease",
              "&:hover": {
                backgroundColor: "white",
              },
              width: searchInputWidth ? "40%" : "0px",
              minWidth: searchInputWidth ? "40%" : "0px",
              visibility: searchInputHidden ? "visible" : "hidden",
            }}
          >
            <IconButton
              sx={{
                ml: searchInputWidth ? "10px" : "20px",
              }}
            >
              <SearchIcon
                sx={{
                  color: searchInputWidth ? "black" : "white",
                }}
              />
            </IconButton>
            <InputBase
              placeholder="Search"
              sx={{
                ml: "10px",
                mt: "3px",
                width: { xs: "100px", sm: "70%" },
              }}
            />
          </Box>
          <SearchIcon
            onClick={() => {
              setSearchInputWidth(!searchInputWidth);
              setSearchInputHidden(!searchInputHidden);
            }}
            sx={{
              ml: "20px",
              color: "white",
              padding: "0 10px",

              "@media (max-width: 425px)": {
                display: "none",
              },

              "&:hover": {
                color: "#C5E89B",
              },
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              minWidth: "100px",
            }}
          >
            <MailIcon
              sx={{
                padding: "0 10px",
                "&:hover": {
                  color: "#C5E89B",
                },
              }}
            />
            <NotificationsIcon
              sx={{
                padding: "0 10px ",
                "&:hover": {
                  color: "#C5E89B",
                },
              }}
            />
          </Box>
          <AccountCircle
            sx={{
              padding: "0 10px ",
              width: "40px",
              height: "40px",
              ml: "20px",
            }}
          />
          <MoreIcon
            sx={{
              display: { xs: "block", sm: "none" },
              "&:hover": {
                color: "#C5E89B",
              },
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
