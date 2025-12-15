import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Movies"],
  // refetchOnReconnect: true,
  // refetchOnFocus: true,
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    })(args, api, extraOptions);

    return result;
  },
  endpoints: () => ({}),
});
