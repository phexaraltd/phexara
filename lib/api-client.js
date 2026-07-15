const API_URL = process.env.CPANEL_API_URL;
const API_KEY = process.env.CPANEL_API_KEY;

export async function callApi(action, params = {}) {
  if (!API_URL || !API_KEY) {
    throw new Error("Missing CPANEL_API_URL or CPANEL_API_KEY environment variable(s).");
  }
  const qs = new URLSearchParams({ action, ...params }).toString();
  const res = await fetch(`${API_URL}?${qs}`, {
    headers: { "X-API-Key": API_KEY },
  });
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}