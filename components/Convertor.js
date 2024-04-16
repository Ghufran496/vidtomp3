"use client";
import React, { useState } from "react";

function extractYouTubeVideoID(url) {
  // Regular expression to match various YouTube URL formats
  const videoIDPattern =
    /(?:youtube\.com\/(?:[^\/\n\s?]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^&\s?]+)/;

  // Match the URL against the pattern
  const match = url.match(videoIDPattern);

  // If a match is found, return the video ID (group 1); otherwise, return null
  if (match && match[1]) {
    return match[1];
  }

  return null;
}

export default function Convertor() {
  const [videoId, setVideoId] = useState("");
  const [success, setSuccess] = useState(false);
  const [songTitle, setSongTitle] = useState("");
  const [songLink, setSongLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check for empty field
    if (videoId.trim() === "") {
      setErrorMessage("Please enter a video link.");
      setSuccess(false);
      return;
    }

    const extractedID = extractYouTubeVideoID(videoId);

    // Perform form submission logic, e.g., using fetch or axios
    // Here's a placeholder example
    try {
      const response = await fetch("/api/convertBack/vidconvert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ extractedID }),
      });

      const data = await response.json();

      // Update the state based on the response
      if (data.status === "ok") {
        setSuccess(true);
        setSongTitle(data.title);
        setSongLink(data.link);
        setErrorMessage("");
        setVideoId("");
      } else {
        setSuccess(false);
        setErrorMessage(
          data.msg || "An error occurred while converting the video."
        );
      }
    } catch (error) {
      setSuccess(false);
      setErrorMessage("An error occurred while converting the video.");
    }
  };

  return (
    <div className="top-container">
      <form onSubmit={handleFormSubmit} id="form">
        <h1>
          <i className="fab fa-youtube"></i>MP3 Converter
        </h1>
        <h4>Enter the video Link</h4>
        <div>
          <input
            type="text"
            name="videoId"
            placeholder="Video Link..."
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
          />
          <button type="submit" id="submit-btn">
            Convert
          </button>
        </div>
      </form>

      <div className="bottom-container">
        {success && (
          <div className="success">
            <p>{songTitle}</p>
            <a href={songLink}>
              <button id="download-btn">DOWNLOAD</button>
            </a>
          </div>
        )}
        {errorMessage && (
          <div className="errors">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
