import { create } from "apisauce";

const spotify = create({
  baseURL: "https://api.spotify.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
  }
});

export const getAuth = () => spotify.get("/v1/me");
export const getUserPlaylists = (user_id) =>
  spotify.get(`/v1/users/${user_id}/playlists`);
export const getPlaylistDetails = (playlist_id) =>
  spotify.get(`/v1/playlists/${playlist_id}`);
export const startOrResumePlay = (data = {}) =>
  spotify.put("/v1/me/player/play", data);
export const pausePlayback = () => spotify.put("/v1/me/player/pause");
export const getPlaybackStatus = () => spotify.get("/v1/me/player");

export const handleResponse = (res) =>
  res.ok ? res.data : Promise.reject(res.data || "error");
