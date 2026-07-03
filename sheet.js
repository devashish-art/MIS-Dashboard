export default async function handler(req, res) {
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqu5ke62_gkjT0mCmhUT3he-vv38hrE5wPDKIMpwPbpPoWKLP3Dwhh-5JwvrhlR8Eu/exec';

  try {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
