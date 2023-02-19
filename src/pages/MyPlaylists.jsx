import React, { Fragment } from "react";
import PageTitle from "../components/Generic/PageTitle";
// import PlaylistList from "../components/Playlist/PlaylistList";
// import { useGetUserPlaylists } from "../hooks/data/playlist";
import { useStore } from "../hooks/store";
// import { usePageConfig } from "../hooks/usePageConfig";

const MyPlaylists = () => {
  // const { tab, largeIcon } = usePageConfig();
  const [{ user }] = useStore();
  // const { data: myPlaylists } = useGetUserPlaylists(user.id);
  return (
    <Fragment>
      {/* <PageTitle title={tab} icon={largeIcon} mb={2} /> */}
      {/* <PlaylistList list={myPlaylists?.items || []} /> */}
    </Fragment>
  );
};

export default MyPlaylists;
