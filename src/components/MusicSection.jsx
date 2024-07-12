import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongs } from "../redux/slices/musicSlice";
import SongCard from "./SongCard";
import { Container } from "react-bootstrap";

const MusicSection = ({ artistName, querySelector }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.songs);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
        );
        if (response.ok) {
          let { data } = await response.json();
          dispatch(setSongs({ artistName, songs: data }));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchSongs();
  }, [artistName, dispatch]);

  return (
    <Container
      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
      id={querySelector}
    >
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </Container>
  );
};

export default MusicSection;
