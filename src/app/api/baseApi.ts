import { handleErrors } from "@/common/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Movies"],
  refetchOnReconnect: true,
  keepUnusedDataFor: 0,
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    })(args, api, extraOptions);
    if (result.error) handleErrors(result.error);
    return result;
  },
  endpoints: () => ({}),
});
