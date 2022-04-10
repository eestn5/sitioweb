import React from 'react';
export const SearchContext = React.createContext("");
export const SearchProvider = ({ children }) => {
  const [value, setValue] = React.useState("");
  const [results, setFResults] = React.useState([{}]);
  return (
    <SearchContext.Provider value={{
      value,
      setValue,
      setFResults,
      results
    }}>
      {children}
    </SearchContext.Provider>
  )
}