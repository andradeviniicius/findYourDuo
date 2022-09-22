import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface initialState {
  active: boolean;
}

const initialState: initialState = {
  active: false,
};

export const createAdModalSlice = createSlice({
  name: "createAdModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.active = true;
    },
    closeModal: (state) => {
      state.active = false;
    },
  },
});

export const { openModal, closeModal } = createAdModalSlice.actions;
export default createAdModalSlice.reducer;
