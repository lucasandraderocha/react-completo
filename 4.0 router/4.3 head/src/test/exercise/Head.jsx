import { useEffect } from "react";

const Head = props => {
  useEffect(() => {
    document.title = `Ranek | ${props.id}`;
  }, [props]);
  return <></>;
};

export default Head;
