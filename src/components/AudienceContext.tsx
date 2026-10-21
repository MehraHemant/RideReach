"use client";

import { createContext, useContext, useState } from "react";

export type Audience = "brand" | "driver";

const AudienceContext = createContext<{
  audience: Audience;
  setAudience: (a: Audience) => void;
}>({ audience: "brand", setAudience: () => {} });

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [audience, setAudience] = useState<Audience>("brand");
  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export const useAudience = () => useContext(AudienceContext);
