import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Journalism, Media & Communication`;
  }, [title]);
};

export default useTitle;
