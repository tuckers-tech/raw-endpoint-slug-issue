import { api } from "encore.dev/api";

interface ReturnValue {
  id: string; // the URL to shorten
}

// Get retrieves the original URL for the id.
export const get = api(
  { expose: true, auth: false, method: "GET", path: "/url/:id" },
  async ({ id }: { id: string }): Promise<ReturnValue> => {
    return { id };
  }
);

// Get retrieves the original URL for the id.
export const getUrl2 = api.raw(
  { expose: true, auth: false, method: "GET", path: "/url2/:id" },
  async (req, resp): Promise<void> => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.end("Hello, raw world!");
  }
);

