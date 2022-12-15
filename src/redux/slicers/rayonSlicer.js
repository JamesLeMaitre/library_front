import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
// interface rayonItem {
//         "id": number,
//         "libelle": string,
//         "acronym":string,
//         "used": boolean,
//         "dateCreate": any,
//         "dateUpdate": any
// }

// interface RayonState {
//   data: rayonItem[]
// }

const formatRayons = (data) => {
  const tab = [];
  data?.map((data) =>
    tab.push({
      id: data?.id,
      libelle: data?.libelle,
      acronym: data?.acronym,
      status: data?.used,
      dateCreate: data?.dateCreate,
    })
  );
  return tab;
};

// Define the initial state using that type
const initialState = {
  data: [],
};

export const rayonSlice = createSlice({
  name: 'rayon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRayonItems: (state, action) => {
      state.data = formatRayons(action.payload);
    },
  },
});

export const { setRayonItems } = rayonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectAllRayonItems = (state: RootState) => state.rayons;
export default rayonSlice.reducer;
