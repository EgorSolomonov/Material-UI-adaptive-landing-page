import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import CottageSharpIcon from "@mui/icons-material/CottageSharp";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import PhotoLibrarySharpIcon from "@mui/icons-material/PhotoLibrarySharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import SearchIcon from "@mui/icons-material/Search";

const NavItemBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  color: "white",
  padding: "20px 10px",
  width: "100%",

  "&:hover": { color: "#96C161" },

  [theme.breakpoints.down("sm")]: {
    padding: "20px 0",
  },
}));

const TextItem = styled("h6")(({ theme }) => ({
  cursor: "pointer",
  fontSize: "24px",
  margin: "0 0 0 8px",

  "@media (max-width: 1080px)": {
    fontSize: "20px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LeftBar = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#6E92A1",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: "60px",
        }}
      >
        <NavItemBox>
          <CottageSharpIcon
            sx={{
              "@media (min-width: 375px) and (max-width: 800px)": {
                fontSize: "38px",
              },

              fontSize: { xs: "28px", sm: "48px", md: "40px", lg: "52px" },
              color: "inherit",
              cursor: "pointer",
            }}
          />
          <TextItem>Home</TextItem>
        </NavItemBox>

        <NavItemBox>
          <ForumSharpIcon
            sx={{
              "@media (min-width: 375px) and (max-width: 800px)": {
                fontSize: "38px",
              },

              fontSize: { xs: "28px", sm: "48px", md: "40px", lg: "52px" },
              color: "inherit",
              cursor: "pointer",
            }}
          />
          <TextItem>Chat</TextItem>
        </NavItemBox>

        <NavItemBox>
          <PeopleAltSharpIcon
            sx={{
              "@media (min-width: 375px) and (max-width: 800px)": {
                fontSize: "38px",
              },

              fontSize: { xs: "28px", sm: "48px", md: "40px", lg: "52px" },
              color: "inherit",
              cursor: "pointer",
            }}
          />
          <TextItem>Friends</TextItem>
        </NavItemBox>

        <NavItemBox>
          <PhotoLibrarySharpIcon
            sx={{
              "@media (min-width: 375px) and (max-width: 800px)": {
                fontSize: "38px",
              },

              fontSize: { xs: "28px", sm: "48px", md: "40px", lg: "52px" },
              color: "inherit",
              cursor: "pointer",
            }}
          />
          <TextItem>Photos</TextItem>
        </NavItemBox>

        <NavItemBox>
          <OndemandVideoSharpIcon
            sx={{
              "@media (min-width: 375px) and (max-width: 800px)": {
                fontSize: "38px",
              },

              fontSize: { xs: "28px", sm: "48px", md: "40px", lg: "52px" },
              color: "inherit",
              cursor: "pointer",
            }}
          />
          <TextItem>Videos</TextItem>
        </NavItemBox>

        <NavItemBox>
          <SearchIcon
            sx={{
              fontSize: { xs: "28px", sm: "48px", md: "40px", lg: "52px" },
              color: "inherit",
              cursor: "pointer",

              "@media (min-width: 375px) and (max-width: 800px)": {
                fontSize: "38px",
              },

              "@media (min-width: 426px)": {
                display: "none",
              },

              "&:hover": {
                color: "#C5E89B",
              },
            }}
          />
        </NavItemBox>
      </Box>
    </Container>
  );
};
