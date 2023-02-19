import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: {
    user: {
      id: "",
      email: "",
      display_name: "",
      country: "",
      images: []
    },
    clientID: "8def00aefe99439c973a5f0be1c8426e",
    clientSecret: "2ad35ba2a1394b87a2a065214870a89b",
    playback: {},
    isAuth: "initial"
  },
  actions: {
    setUserInfo: (data) => ({ setState }) => {
      setState({
        user: data
      });
    },
    setAuth: (isAuth) => ({ setState }) => {
      setState({
        isAuth: isAuth
      });
    },
    setPlayback: (data) => ({ setState }) => {
      setState({
        playback: data
      });
    }
  }
});

export const useStore = createHook(Store);
