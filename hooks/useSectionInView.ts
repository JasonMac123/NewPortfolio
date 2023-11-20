import { UseActiveSectionContext } from "@/context/activeSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useSectionInView(sectionName: string, threshold: number) {
  const { setActiveSection, lastClickTime } = UseActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClickTime, sectionName]);

  return { ref };
}
