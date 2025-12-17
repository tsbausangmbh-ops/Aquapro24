import { useEffect } from "react";
import { useLocation } from "wouter";

export default function TerminPage() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    setLocation("/kontakt");
  }, [setLocation]);

  return null;
}
