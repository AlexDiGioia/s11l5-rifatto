import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSongsAsync,
  selectSongs,
  selectMusicStatus,
  selectMusicError,
} from "../redux/slices/musicSlice";
import SongCard from "./SongCard";
import { Container } from "react-bootstrap";

const MainSection = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const songs = useSelector(selectSongs);
  const status = useSelector(selectMusicStatus);
  const error = useSelector(selectMusicError);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      dispatch(fetchSongsAsync(searchTerm));
    }
  }, [dispatch, searchTerm]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="ps-7 text-white">
      <h2 className="ps-5">Songs</h2>
      <Container fluid className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </Container>
    </Container>
  );
};

export default MainSection;
