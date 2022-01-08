// /src/api/index.js
import axios from "axios";

export async function registerUser(username, email, password) {
  try {
    const data = { username: username, email: email, password: password };
    const response = await axios.post(`/user/register`, data);
    if (response.status === 201) {
      console.log("회원가입 성공");
    } else {
      // 로그인 실패
    }
  } catch (error) {}
}

export async function getParks(guId, keyword, sort, page, size) {
  try {
    const response = await axios.get(
      `/parks/search?guId=${guId}&keyword=${keyword}&sort=${sort}&page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {}
}

export async function getParkDetail(parkId) {
  try {
    const response = await axios.get(`/parks/detail/${parkId}`);

    return response.data;
  } catch (error) {}
}

export async function getReviews(parkId) {
  const response = await axios.get(`/parks/${parkId}/reviews`);
  return response.data;
}

export async function postReviews(parkId, score, content) {
  try {
    const data = { park_id: parkId, score: score, content: content };
    const response = await axios.post(`/parks/${parkId}/reviews`, data);
    return response.data;
  } catch (error) {}
}

export async function updateReview(parkId, reviewId, score, content) {
  try {
    const data = { park_id: parkId, score: score, content: content };
    const response = await axios.put(
      `/parks/${parkId}/reviews/${reviewId}`,
      data
    );
    return response.data;
  } catch (error) {}
}

export async function deleteReview(parkId, reviewId) {
  try {
    await axios.delete(`/parks/${parkId}/reviews/${reviewId}`);
  } catch (error) {}
}

export async function onlyUserReview() {
  try {
    const response = await axios.get(`/parks/user-reviews`);
    return response.data;
  } catch (error) {}
}

export async function uploadUserImage(image, filename) {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("profile_image", image, filename);
    const response = await axios.post("/user/upload-image", formData, config);
    return response;
  } catch (error) {
    return error.response;
  }
}