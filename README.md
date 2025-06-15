# VidToMP3

A web application that allows users to convert YouTube videos to MP3 audio files or download them as MP4 videos.

## Overview

VidToMP3 is a simple yet powerful tool that enables users to extract audio from YouTube videos or download them in video format. The application provides a clean, user-friendly interface where users can paste a YouTube video URL and convert it to their desired format with a single click.

## Features

- Convert YouTube videos to MP3 audio format
- Download YouTube videos in MP4 format
- Simple and intuitive user interface
- Real-time validation of YouTube URLs
- Error handling for invalid links or failed conversions

## Tech Stack

- **Frontend**:
  - React.js 18.2.0
  - Next.js 13.0.2
  - CSS for styling

- **Backend**:
  - Next.js API routes
  - YouTube API integration via RapidAPI

- **External APIs**:
  - YouTube MP3 Converter API (RapidAPI)
  - YouTube Video Download Info API (RapidAPI)

- **Dependencies**:
  - downtube-vic: ^1.0.1
  - @next/font: ^14.1.3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vidtomp3.git
   cd vidtomp3
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory with your RapidAPI keys:
   ```
   API_KEY=your_rapidapi_key
   API_HOST=youtube-mp36.p.rapidapi.com
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Copy the URL of the YouTube video you want to convert
2. Paste the URL into the input field
3. Click "Convert to MP3" to download the audio version
4. Click "Convert to MP4" to download the video

## Building for Production

To create a production build:

```
npm run build
npm run start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 

