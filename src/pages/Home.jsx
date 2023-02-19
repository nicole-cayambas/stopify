import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const Home = () => {
  const playlists = [
    {
      name: "Favorites",
      id: 1,
      cover:
        "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/300775139_443367727816235_2052136502589380855_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEq4oCFeax6GjYGD97OokJKN-n1dbjtvEY36fV1uO28Rs8ZmCs7EhvD7zieUW9yJuJsCUUFZHLHivJZZ9p6dRoN&_nc_ohc=K_2Y_IPXGg4AX8iFVQe&_nc_ht=scontent.fmnl9-1.fna&oh=00_AT_tGngYJmdDYIXZ9oIg68m7nhpoEqUBpV5m0hwxJnHSRg&oe=63553562",
      songs: [
        {
          name: "Chinatown",
          album: "Chinatown - Single",
          id: 12093,
          artist: "Bleachers"
        },
        {
          name: "Infinity",
          album: "Four",
          id: 7162,
          artist: "One Direction"
        }
      ]
    },
    {
      name: "80s",
      id: 2,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Bleachers_chinatown.jpg",
      songs: [
        {
          name: "Dancing Queen",
          id: 3421,
          artist: "ABBA"
        },
        {
          name: "Unchained Melody",
          id: 8963
        }
      ]
    },
    {
      name: "High School",
      id: 2,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
      songs: [
        {
          name: "Closer",
          id: 19283,
          artist: "The Chainsmokers"
        }
      ]
    }
  ];

  return (
    <Stack gap={2}>
      <Typography variant="h4">
        Hi <strong>Nicole</strong>!
      </Typography>
      <Stack direction={"row"} gap={3} flexWrap="wrap">
        {playlists?.map((p, i) => (
          <Box key={i}>
            <Card raised sx={{ width: "210px", height: "210px", mb: "0.5rem" }}>
              <CardActionArea onClick={() => console.log(p)}>
                <CardMedia component="img" alt={p.name} image={p.cover} />
              </CardActionArea>
            </Card>
            <Typography variant="h6">{p.name}</Typography>
          </Box>
        ))}
      </Stack>
      <Divider />
      <Typography variant="h5" fontWeight={"bold"}>
        You might like these
      </Typography>
      <Stack direction={"row"} gap={3} flexWrap="wrap">
        {playlists?.map((p, i) => (
          <Box key={i}>
            <Card raised sx={{ width: "210px", height: "210px", mb: "0.5rem" }}>
              <CardActionArea onClick={() => console.log(p)}>
                <CardMedia component="img" alt={p.name} image={p.cover} />
              </CardActionArea>
            </Card>
            <Typography variant="h6">{p.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Home;
