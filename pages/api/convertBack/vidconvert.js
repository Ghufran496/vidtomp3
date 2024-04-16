export default async function handler(req, res) {
  if (req.method === "GET") {
    return;
  } else {
    const data = req.body;

    const { extractedID } = data;

    if (
      extractedID === undefined ||
      extractedID === "" ||
      extractedID === null
    ) {
      res.status(401).json({ message: "Please enter a video Link" });
      return;
    } else {
      try {
        const fetchAPI = await fetch(
          `https://youtube-mp36.p.rapidapi.com/dl?id=${extractedID}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": process.env.API_KEY,
              "x-rapidapi-host": process.env.API_HOST,
            },
          }
        );

        const fetchResponse = await fetchAPI.json();

        if (fetchAPI.ok && fetchResponse.status === "ok") {
          res.status(200).json(fetchResponse);
        } else {
          res.status(fetchResponse.status).json({
            message:
              fetchResponse.msg ||
              "An error occurred while fetching the video data.",
          });
        }
      } catch (error) {
        res.status(500).json({
          message: fetchResponse.msg,
        });
      }
    }
  }
}
