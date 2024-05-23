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
export const getUrl2 = api(
  { expose: true, auth: false, method: "GET", path: "/url2/:id" },
  async ({ id }: { id: string }): Promise<ReturnValue> => {
    return { id };
  }
);

