import streams from "../APIs/streams";

export const signIn = (user) => {
  return {
    type: "SIGN_IN",
    payload: user,
  };
};

export const signOut = (isSignedIn) => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const { data } = await streams.post("/streams", formValues);
  dispatch({ type: "CREATE_STREAM", payload: data });
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streams.get("/streams");

  dispatch({ type: "FETCH_STREAMS", payload: data });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const { data } = await streams.get(`/streams/${streamId}`);
  dispatch({ type: "FETCH_STREAM", payload: data });
};

export const editSteam = (streamId, formValues) => async (dispatch) => {
  const { data } = await streams.put(`/streams/${streamId}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: data });
};

export const deleteStream = (streamId) => async (dispatch) => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({ type: "DELETE_STREAM", payload: streamId });
};
