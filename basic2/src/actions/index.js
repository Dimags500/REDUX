import JP from "../apis/JP";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await JP.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: res.data });
  };
};
