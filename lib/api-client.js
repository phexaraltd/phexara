const API_URL = process.env.CPANEL_API_URL;
const API_KEY = process.env.CPANEL_API_KEY;

// Pass { params } for GET requests (query string), or { body } to send a
// POST with a JSON body — method is picked automatically based on which
// one you give it.
export async function callApi(action, { params = {}, body } = {}) {
  if (!API_URL || !API_KEY) {
    throw new Error("Missing CPANEL_API_URL or CPANEL_API_KEY environment variable(s).");
  }

  const qs = new URLSearchParams({ action, ...params }).toString();
  const options = {
    method: body ? "POST" : "GET",
    headers: { "X-API-Key": API_KEY },
  };
  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${API_URL}?${qs}`, options);
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function uploadImage(file) {
  if (!API_URL || !API_KEY) {
    throw new Error("Missing CPANEL_API_URL or CPANEL_API_KEY environment variable(s).");
  }

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_URL}?action=upload-image`, {
    method: "POST",
    headers: { "X-API-Key": API_KEY },
    body: formData,
  });
  if (!res.ok) {
    throw new Error(`Upload failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}