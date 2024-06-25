import React, { createContext, useContext, useState } from "react";

// Create toggle context
const JobSearchContext = createContext(null);

export default JobSearchContext;

// Create context provider
export const JobSearchProvider = ({ children }) => {
  const [query, setQuery] = useState("software developer");

  const contextData = {
    query: query,
    setQuery: setQuery
  }

  return (
    <JobSearchContext.Provider value={ contextData }>
      {children}
    </JobSearchContext.Provider>
  );
};
