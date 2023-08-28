import {
  SET_LOADER,
  CLOSE_LOADER,
  CREATE_ERRORS,
  REDIRECT_TRUE,
  REDIRECT_FALSE,
  SET_MESSAGE,
  REMOVE_MESSAGE,
  REMOVE_ERRORS,
  SET_NEWS,
  SET_NEW,
  NEWS_RESET,
  NEWS_REQUEST,
  SET_UPDATE_ERRORS,
  RESET_UPDATE_ERRORS,
  UPDATE_IMAGE_ERRORS,
  RESET_UPDATE_IMAGE_ERRORS,
  SET_DETAILS,
} from "../types/Types";
const initState = {
  loading: false,
  createErrors: [],
  redirect: false,
  message: "",
  editErrors: [],
  news: [],
  onew: {},
  newsStatus: false,
  updateImageErrors: [],
  details: {},
  banners: [],
  notifications: [],
};

export const NewsReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (action.type === CREATE_ERRORS) {
    return {
      ...state,
      createErrors: action.payload.errors,
    };
  } else if (type === REDIRECT_TRUE) {
    return { ...state, redirect: true };
  } else if (type === REDIRECT_FALSE) {
    return { ...state, redirect: false };
  } else if (type === SET_MESSAGE) {
    return { ...state, message: action.payload };
  } else if (type === REMOVE_MESSAGE) {
    return { ...state, message: "" };
  } else if (type === REMOVE_ERRORS) {
    return { ...state, createErrors: [] };
  }
  if (type === SET_NEWS) {
    return {
      ...state,
      news: payload.response,
    };
  }

  if (type === SET_NEW) {
    return { ...state, onew: payload };
  } else if (type === NEWS_REQUEST) {
    return { ...state, newsStatus: true };
  } else if (type === NEWS_RESET) {
    return { ...state, newsStatus: false };
  }

  if (type === SET_UPDATE_ERRORS) {
    return { ...state, editErrors: payload };
  } else if (type === RESET_UPDATE_ERRORS) {
    return {
      ...state,
      editErrors: [],
    };
  }

  if (type === UPDATE_IMAGE_ERRORS) {
    return {
      ...state,
      updateImageErrors: payload,
    };
  } else if (type === RESET_UPDATE_IMAGE_ERRORS) {
    return {
      ...state,
      updateImageErrors: [],
    };
  } else if (type === SET_DETAILS) {
    return { ...state, details: payload };
  } else {
    return state;
  }
};
