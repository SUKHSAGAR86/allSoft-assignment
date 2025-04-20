import React from "react";

const useApiHandler = async (url, inputData) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: inputData,
    });
    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error in ApiHandler : " + error);
  }
};

export default useApiHandler;
