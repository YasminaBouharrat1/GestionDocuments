// MemberPage.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTheme,filterDocumentsByTheme } from "../slices/documentSlice";

const Document = () => {
  const dispatch = useDispatch();
  const allDocuments = useSelector((state) => state.document.documents);
  const selectedTheme = useSelector((state) => state.document.selectedTheme);
  const documents = useSelector((state) => state.document.documents);

  const themes = [...new Set(allDocuments.map((doc) => doc.theme))];

  const handleThemeChange = (selectedTheme) => {
    dispatch(setSelectedTheme(selectedTheme));
    dispatch(filterDocumentsByTheme(selectedTheme));
  };
      
  
    return (
      <div>
        <h1>Member Page</h1>
        <label>Select Theme:</label>
        <select onChange={(e) => handleThemeChange(e.target.value)}>
  <option key="default" value="">
    Select a Theme
  </option>
  {themes.map((theme) => (
    <option key={theme} value={theme}>
      {theme}
    </option>
  ))}
</select>


  
        <h2>Documents:</h2>
        <ul>
          {documents.map((document) => (
            <li key={document.code}>{document.nom_document}</li>
          ))}
        </ul>
      </div>
    );
  };
export default Document;
