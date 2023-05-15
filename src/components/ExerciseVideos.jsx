import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function ExerciseVideos({ youtubeData, name }) {
  return (
    <Box p="20px" my="50px">
      <Typography variant="h4">
        Watch{" "}
        <span style={{ textTransform: "capitalize", color: "#ff2526" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        gap="50px"
        justifyContent="center"
        mt="50px"
      >
        {youtubeData.slice(0, 4).map((item, i) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={i}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Stack alignItems="center" justifyContent="center">
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="video-img"
              />
              <PlayCircleOutlineIcon
                fontSize="large"
                color="disabled"
                className="icon"
                sx={{
                  position: "absolute",
                  zIndex: "modal",
                  fontSize: "100px",
                }}
              />
            </Stack>
            <Box>
              <Typography fontSize="small" maxWidth="360px" color="black">
                {item.video.title}
              </Typography>
              <Typography fontSize="small" maxWidth="360px" color="grey">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
