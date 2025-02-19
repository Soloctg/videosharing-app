
import './App.css';

import React from "react";

import Grid from "@mui/material/Grid";
//import youtube from "./api/youtube";


function App() {
  return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    {/* {Search} */}
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
}

export default App;
