import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";

const StyleAvatar = styled(Avatar)(({ theme }) => ({
  cursor: "pointer",
}));

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

export const RightBar = ({ burger }) => {
  return (
    <Container
      sx={{
        position: "sticky",
        top: "60px",

        "@media (max-width: 425px)": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          padding: "20px 20px 20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            "@media (max-width: 1050px)": {
              fontSize: "20px",
            },

            "@media (max-width: 900px)": burger
              ? {
                  fontSize: "18px",
                }
              : { fontSize: "16px" },
          }}
        >
          Friends online
        </Typography>
        <AvatarGroup
          max={4}
          sx={{
            mt: "30px",
          }}
        >
          <StyleAvatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{
              width: 80,
              height: 80,

              "@media (max-width: 1050px)": {
                width: "70px",
                height: "70px",
              },

              "@media (max-width: 900px)": {
                width: "40px",
                height: "40px",
              },
            }}
          />
          <StyleAvatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{
              width: 70,
              height: 70,

              "@media (max-width: 1050px)": {
                width: "60px",
                height: "60px",
              },

              "@media (max-width: 900px)": {
                width: "40px",
                height: "40px",
              },
            }}
          />
          <StyleAvatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{
              width: 60,
              height: 60,

              "@media (max-width: 1050px)": {
                width: "50px",
                height: "50px",
              },

              "@media (max-width: 900px)": {
                width: "40px",
                height: "40px",
              },
            }}
          />
          <StyleAvatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <StyleAvatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>

      <Box
        sx={{
          padding: "20px 20px 20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            "@media (max-width: 1050px)": {
              fontSize: "20px",
            },

            "@media (max-width: 900px)": {
              fontSize: "18px",
            },
          }}
          variant="h5"
        >
          Gallery
        </Typography>

        <ImageList
          sx={{
            width: "100%",
            height: "600px",

            "@media (max-width: 1440px)": {
              height: "520px",
            },

            "@media (max-width: 1050px)": burger
              ? {
                  width: "240px",
                  height: "400px",
                }
              : { width: "230px", ml: "15px" },

            "@media (max-width: 900px)": {
              width: "180px",
              height: "400px",
            },
          }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};
