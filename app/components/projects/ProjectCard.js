import {
  Button,
  Card,
  CardMedia,
  Container,
  Dialog,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { calcImageSize } from "@/lib/helpers";
import CloseIcon from "@mui/icons-material/Close";
import FadeContainer from "../transitions/FadeContainer";
import { captrack, golang, alpaca, twitter } from "@/assets/images";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectCard = (props) => {
  const [image, setImage] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    // import(`@/public/images/${props.image}`).then((image) => setImage(image));
    if (props.image === "go.png") {
      setImage(golang);
    } else if (props.image === "captrack.png") {
      setImage(captrack);
    } else if (props.image === "twitter-bot.png") {
      setImage(twitter);
    } else {
      setImage(alpaca);
    }
  }, [props.image]);

  return (
    <React.Fragment>
      <FadeContainer timeout={1500} threshold={0.4}>
        {/* <Card
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          onClick={handleClickOpen}
        >
          <CardHeader
          title={props.title}
          // subheader="September 14, 2016"
        />
          <CardMedia
            className={styles.proj_img}
            component="img"
            image={"images/" + props.image}
            alt={props.title}
          />
          <CardActions>
          <Button href={props.source} target="_blank" rel="nofollow" size="small">
            Source
          </Button>
          <Button href={props.link} target="_blank" rel="nofollow" size="small">
            Link
          </Button>
        </CardActions>
        </Card> */}
        {image && (
          <Image
            onClick={handleClickOpen}
            className={styles.proj_img}
            alt={props.title}
            src={image}
            placeholder="blur"
            height={calcImageSize(image.height, image.width, 400, 300).height}
            width={calcImageSize(image.height, image.width, 400, 300).width}
          />
        )}
      </FadeContainer>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container sx={{ textAlign: "center", m: 1 }} id="dialog-container">
          <Typography mb={4} fontWeight="bold" variant="h4" gutterBottom>
            {props.title}
          </Typography>
          <Container>
            {image && (
              <Image
                className="image-in-modal"
                alt={props.title}
                src={image}
                placeholder="blur"
                height={
                  calcImageSize(image.height, image.width, 400, 300).height
                }
                width={calcImageSize(image.height, image.width, 400, 300).width}
              />
            )}
          </Container>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              href={props.source}
              target="_blank"
              rel="nofollow"
              //   size="small"
              variant="outlined"
            >
              Source
            </Button>
            <Button
              href={props.link}
              target="_blank"
              rel="nofollow"
              //   size="small"
              variant="contained"
            >
              Link
            </Button>
          </Stack>
          <Typography pl={10} pr={10} paragraph mt={2} mb={3}>
            {props.description}
          </Typography>
          <Button
            onClick={handleClose}
            sx={{ mb: 3 }}
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </Container>
      </Dialog>
    </React.Fragment>
  );
};

export default ProjectCard;
