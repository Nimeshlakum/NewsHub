import React, { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  return (
    <DataContext.Provider value={{ data, setdata }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
