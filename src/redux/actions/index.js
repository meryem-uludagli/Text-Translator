import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    const res = await api.get("/getLanguages");
  }
);
