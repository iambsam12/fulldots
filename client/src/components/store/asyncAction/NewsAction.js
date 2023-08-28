import axios from "axios";
import {
  SET_LOADER,
  CLOSE_LOADER,
  CREATE_ERRORS,
  REDIRECT_TRUE,
  SET_MESSAGE,
  REMOVE_ERRORS,
  SET_NEWS,
  SET_UPDATE_ERRORS,
  NEWS_REQUEST,
  SET_NEW,
  UPDATE_IMAGE_ERRORS,
  SET_DETAILS,
} from "../types/Types";

export const newsCreate = (postData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const {
        data: { msg },
      } = await axios.post("/api/news", postData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REMOVE_ERRORS });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: msg });
    } catch (error) {
      console.log(error.response);
      const errors = error.response.data;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: CREATE_ERRORS, payload: errors });
    }
  };
};

export const fetchNews = () => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const {
        data: { response },
      } = await axios.get("/api/news", config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_NEWS, payload: { response } });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
    }
  };
};

export const fetchNew = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { news },
      } = await axios.get(`/api/news/${id}`);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_NEW, payload: news });
      dispatch({ type: NEWS_REQUEST });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      console.log(error.message);
    }
  };
};

export const updateNews = (editData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post("/api/newsupdate", editData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: data.msg });
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_UPDATE_ERRORS, payload: errors });
      console.log(error.response);
    }
  };
};

export const updateImageNews = (updateData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { msg },
      } = await axios.post("/api/updatenImage", updateData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: msg });
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: UPDATE_IMAGE_ERRORS, payload: errors });
    }
  };
};

export const newsDetails = (slug) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { news },
      } = await axios.get(`/api/news-details/${slug}`);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_DETAILS, payload: news });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      console.log(error);
    }
  };
};
