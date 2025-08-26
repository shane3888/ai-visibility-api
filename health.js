// Vercel serverless function for health check
export default function handler(req, res) {
  // CORS headers for WordPress
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const response = {
    ok: true,
    status: 'AI Visibility API - Vercel Working',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  };
  
  res.status(200).json(response);
}