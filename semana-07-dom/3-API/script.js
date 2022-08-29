"use strict";

const main = document.querySelector("main");
const url = "https://randomuser.me/api/";

async function APIdata(url) {
  let data;

  try {
    data = fetch(url);
  } catch (error) {
    console.error("API ERROR: ", error);
  }

  return data;
}
