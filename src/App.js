
import './App.css';

import React from "react";

import Grid from "@mui/material/Grid";
import youtube from "./api/youtube";
import SearchBar from './components/SearchBar';
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

                <Grid xs={8}>
                    {/* {VideoDetail} */}
                </Grid>

                <Grid xs={4}>
                    {/* {VideoList} */}
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
