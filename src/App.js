
import './App.css';

import React from "react";

import Grid from "@mui/material/Grid";
import youtube from "./api/youtube";
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { useState } from "react";



function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
	                <SearchBar onSubmit={handleSubmit} />
                </Grid>

                <Grid item xs={8}>
	                <VideoDetail video={selectedVideo} />
                </Grid>

                <Grid item xs={4}>
	                <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                </Grid>


            </Grid>
        </Grid>
      </Grid>
  );

	async function handleSubmit(searchTerm) {
		const { data: { items: videos } } = await youtube.get("search", {
			params: {
				part: "snippet",
				maxResults: 5,
				key: "AIzaSyDVtGGEZDHUj3Mmma8IQYYuYK-pMT1YN30",
				q: searchTerm,
			}
		});
		setVideos(videos);
		setSelectedVideo(videos[0]);
	}
}

export default App;
