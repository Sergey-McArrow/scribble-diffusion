const API_HOST = process.env.REPLICATE_API_HOST || "https://api.replicate.com";

export default async function handler(req, res) {
  const response = await fetch(`${API_HOST}/v1/predictions/${req.query.id}`, {
		headers: {
			Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
			'Content-Type': 'application/json',
		},
	})
	console.log('responseID', response)
  if (response.status !== 200) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.end(JSON.stringify(prediction));
}
