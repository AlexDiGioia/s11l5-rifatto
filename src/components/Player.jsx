import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ProgressBar,
} from "react-bootstrap";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";
import { selectCurrentSong } from "../redux/slices/playerSlice";
import { selectLikedSongs, toggleLike } from "../redux/slices/likedSongsSlice";

const Player = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector(selectCurrentSong);
  const likedSongs = useSelector(selectLikedSongs);
  const isLiked = currentSong && likedSongs.includes(currentSong.id);

  const handleLikeClick = () => {
    if (currentSong) {
      dispatch(toggleLike(currentSong.id));
    }
  };

  if (!currentSong) {
    return (
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className="align-items-center justify-content-center">
          <Col className="text-center text-white">
            No song is currently playing.
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="fixed-bottom bg-container pt-1 ps-7">
      <Row className="align-items-center justify-content-center">
        <Col
          xs={12}
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <Image
            src={currentSong.album.cover_medium || ""}
            alt="Current Track"
            fluid
            className="player-image"
            style={{ maxHeight: "80px" }}
          />
          <div className="ml-2">
            <p className="text-white mb-1" style={{ fontSize: "0.7rem" }}>
              Now Playing: "{currentSong.title}"
            </p>
            <p className="text-white mb-0" style={{ fontSize: "0.7rem" }}>
              Artist: {currentSong.artist ? currentSong.artist.name : ""}
            </p>
            <Button
              variant="link"
              className="fs-5 text-secondary p-0"
              onClick={handleLikeClick}
            >
              {isLiked ? "❤️" : "♡"}
            </Button>
          </div>
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <div className="d-flex justify-content-around w-100 mb-2">
            <a href="#" className="text-center">
              <Image
                src={shuffleIcon}
                alt="Shuffle"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <Image
                src={prevIcon}
                alt="Previous"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <Image
                src={playIcon}
                alt="Play"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <Image
                src={nextIcon}
                alt="Next"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
            <a href="#" className="text-center">
              <Image
                src={repeatIcon}
                alt="Repeat"
                style={{ maxWidth: "16px", height: "auto" }}
              />
            </a>
          </div>
          <ProgressBar now={50} style={{ width: "100%", height: "3px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
