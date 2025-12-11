import type { RequestStatus, ThemeMode } from "@/common/types";
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: "light" as ThemeMode,
    status: "idle" as RequestStatus,
    error: null as string | null,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectAppStatus: (state) => state.status,
    selectAppError: (state) => state.error,
  },
  extraReducers: (builder) => {
    // builder
    //   .addMatcher(isPending, (state, action) => {
    //     if (
    //       todolistsApi.endpoints.getTodolists.matchPending(action) ||
    //       tasksApi.endpoints.getTasks.matchPending(action)
    //     ) {
    //       return
    //     }
    //     state.status = "loading"
    //   })
    //   .addMatcher(isFulfilled, (state) => {
    //     state.status = "succeeded"
    //   })
    //   .addMatcher(isRejected, (state) => {
    //     state.status = "failed"
    //   })
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode;
    }),
    setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
      state.status = action.payload.status;
    }),
    setAppErrorAC: create.reducer<{ error: string | null }>((state, action) => {
      state.error = action.payload.error;
    }),
  }),
});

export const { selectThemeMode, selectAppStatus, selectAppError } = appSlice.selectors;
export const { changeThemeModeAC, setAppStatusAC, setAppErrorAC } = appSlice.actions;
export const appReducer = appSlice.reducer;
