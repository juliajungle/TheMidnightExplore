import React, { useState } from "react";
import MutedContext from "./MutedContext";

const MutedProvider = ({ children }) => {
  const [muted, setMuted] = useState(true);

  const toggleMuted = () => {
    setMuted(!muted);
  };

  return (
    <MutedContext.Provider value={{ muted, toggleMuted }}>
      {children}
    </MutedContext.Provider>
  );
};

export default MutedProvider;
