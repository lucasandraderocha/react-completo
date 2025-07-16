import { useState, useRef } from "react";
import FakeModal from "./FakeModal";
const RefAsDOMInteraction = () => {
  const [showModal, setShowModal] = useState(false);
  const inputFocusRef = useRef(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div>
        <p>useRef para interagir com elementos do DOM</p>
        <button onClick={handleShowModal}>Inscrever-se</button>
        {showModal && <FakeModal ref={inputFocusRef} />}
      </div>
    </>
  );
};

export default RefAsDOMInteraction;
