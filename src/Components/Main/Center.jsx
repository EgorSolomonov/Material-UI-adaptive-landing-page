import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./Center.scss";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import FormatAlignJustifySharpIcon from "@mui/icons-material/FormatAlignJustifySharp";
import CardMedia from "@mui/material/CardMedia";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ImagePost1 from "../../images/posts/post1.jpeg";
import ImagePost2 from "../../images/posts/post2.jpeg";
import ImagePost3 from "../../images/posts/post3.jpeg";
import ImagePost4 from "../../images/posts/post4.jpeg";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/system";
import { useState } from "react";

const CardBox = styled("div")(({ theme }) => ({
  margin: "20px 15px",
  border: "0.5px solid #6D9B34",
  borderRadius: "5px",
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Center = () => {
  const [additionalMenu, setMenu] = useState(false);
  const [openSnackBar, setSnackBarOpen] = useState(false);

  return (
    <>
      <CardBox>
        <CardActionArea>
          <CardMedia
            component="img"
            height={{ xs: "300px", sm: "500" }}
            image={ImagePost1}
            alt="post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique officia sint illo saepe ab consequatur quas quidem quis
              aspernatur, inventore distinctio provident iusto ut iste tempora
              id. Vitae, voluptatum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </CardBox>

      <CardBox>
        <CardActionArea>
          <CardMedia
            component="img"
            height={{ xs: "300px", sm: "500" }}
            image={ImagePost2}
            alt="post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Woman
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique officia sint illo saepe ab consequatur quas quidem quis
              aspernatur, inventore distinctio provident iusto ut iste tempora
              id. Vitae, voluptatum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </CardBox>

      <CardBox>
        <CardActionArea>
          <CardMedia
            component="img"
            height={{ xs: "300px", sm: "500" }}
            image={ImagePost3}
            alt="post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Insta
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique officia sint illo saepe ab consequatur quas quidem quis
              aspernatur, inventore distinctio provident iusto ut iste tempora
              id. Vitae, voluptatum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </CardBox>

      <CardBox>
        <CardActionArea>
          <CardMedia
            component="img"
            height={{ xs: "300px", sm: "500" }}
            image={ImagePost4}
            alt="post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Field
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique officia sint illo saepe ab consequatur quas quidem quis
              aspernatur, inventore distinctio provident iusto ut iste tempora
              id. Vitae, voluptatum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </CardBox>

      <Modal open={additionalMenu} onClose={() => setMenu(false)}>
        <Container
          maxWidth="xs"
          sx={{
            border: "1px solid black",
            height: "60%",
            position: "fixed",
            top: "20%",
            left: "30%",
            bgcolor: "white",
            padding: "20px",
            borderRadius: "10px",
            transition: "1s all ease",
            boxSizing: "border-box",

            "@media (max-width: 800px)": {
              width: "70%",
              left: "20%",
              top: "5%",
              height: "auto",
            },

            "@media (min-width: 1920px)": {
              height: "40%",
            },
          }}
        >
          <TextField
            id="standard-basic"
            label="Some info"
            variant="standard"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="standard-basic"
            label="Some extra info"
            variant="outlined"
            fullWidth
            multiline
            maxRows={4}
            sx={{
              mt: "20px",
            }}
          />

          <FormControl
            sx={{
              mt: "20px",
            }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Visibility
            </InputLabel>
            <Select
              id="demo-simple-select-standard"
              label="Visibility"
              sx={{
                mb: "20px",
              }}
              defaultValue=""
            >
              <MenuItem value="">
                <em>default</em>
              </MenuItem>
              <MenuItem value={10}>Visible</MenuItem>
              <MenuItem value={20}>Invisible</MenuItem>
              <MenuItem value={30}>Visible only for friends</MenuItem>
            </Select>

            <FormLabel id="demo-controlled-radio-buttons-group">
              Who is able to comment
            </FormLabel>
            <RadioGroup name="controlled-radio-buttons-group">
              <FormControlLabel
                value="All"
                control={
                  <Radio
                    sx={{
                      color: "#6D9B34",
                    }}
                  />
                }
                label="All"
              />
              <FormControlLabel
                value="My friends"
                control={
                  <Radio
                    sx={{
                      color: "#6D9B34",
                    }}
                  />
                }
                label="My friends"
              />
              <FormControlLabel
                value="My friends + my friend's friends"
                control={
                  <Radio
                    sx={{
                      color: "#6D9B34",
                    }}
                  />
                }
                label="My friends + my friend's friends"
              />
            </RadioGroup>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "200px",
                mt: "20px",
              }}
            >
              <Button
                color="success"
                sx={{ "&:hover": { color: "#6D9B34" } }}
                variant="outlined"
                onClick={() => setSnackBarOpen(true)}
              >
                Accept
              </Button>

              <Button onClick={() => setMenu(false)} variant="outlined">
                Cancel
              </Button>
            </Box>
          </FormControl>
        </Container>
      </Modal>

      <Fab
        onClick={() => setMenu(!additionalMenu)}
        sx={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          backgroundColor: "#6D9B34",
          "&:hover": {
            bgcolor: "#487413",
          },
        }}
      >
        <FormatAlignJustifySharpIcon
          sx={{
            color: "#103D50",
          }}
        />
      </Fab>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={4000}
          onClose={() => setSnackBarOpen(false)}
        >
          <Alert
            onClose={() => setSnackBarOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Saved successfully!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};
