import { useEffect } from "react";

const ProductEffect = () => {
  useEffect(() => {
    const handleScroll = e => {
      console.log(e);
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);
  return (
    <>
      <div style={{ height: "110vh" }}>
        <p>Produto</p>
      </div>
    </>
  );
};

export default ProductEffect;
