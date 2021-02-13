import React from "react";
import Modal from "react-modal";

const customStyles = {
  // content: {
  //   top: "50%",
  //   left: "50%",
  //   // right: "auto",
  //   // bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-50%, -50%)",
  // },
  overlay: {
    backgroundColor: "lightsteelblue",
    // opacity: 0.4,
  },
};

export default function Mod() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="bg-red-100 rounded-lg p-2" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="bg-green-200 p-4 absolute inset-center border-2 border-gray-500 opacity-100"
      >
        <div className="bg-red-100">
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal and more shiiiiiiiit to it</div>
        </div>
      </Modal>
    </div>
  );
}
