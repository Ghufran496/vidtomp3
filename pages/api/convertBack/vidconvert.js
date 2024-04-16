export default async function handler(req, res) {
  if (req.method === "GET") {
    return;
  } else {
    const data = req.body;

    const { extractedID } = data;

    if (extractedID === undefined || extractedID === "" || extractedID === null) {
      res.status(401).json({ message: "Please enter a video ID" });
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

        res.status(200).json(fetchResponse);
      } catch (error) {
        res.status(500).json({
          message: fetchResponse.msg,
        });
      }
    }
  }
}
