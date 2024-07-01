
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTheme: null,
  documents: [{code_document:1, nom_document:"Boite a merveille", etat_document:"valid",  theme:"culture", login:"hind@vg.com"},
  {code_document:1, nom_document:"slid", etat_document:"valid",theme:"social", login:"hind@vg.com"},
  {code_document:1, nom_document:"PSDf", etat_document:"valid",theme:"culture", login:"hind@vg.com"},
  {code_document:1, nom_document:"comptablePl", etat_document:"valid", theme:"economique", login:"hind@vg.com"}
]
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
    filterDocumentsByTheme: (state, action) => {
      const selectedTheme = action.payload;
      state.documents = initialState.documents.filter(
        (document) => document.theme === selectedTheme
      );
    },
  },
});

export const { setSelectedTheme, filterDocumentsByTheme } = documentSlice.actions;
export default documentSlice.reducer;