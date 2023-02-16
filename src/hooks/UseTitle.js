import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Fast Grocer`
  }, [title])
};

export default UseTitle;