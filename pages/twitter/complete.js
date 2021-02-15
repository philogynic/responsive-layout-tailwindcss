import Modal from "react-modal";
import { useState } from "react";

export default function Complete() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(true);
  function openModal() {
    setSideNavIsOpen(true);
  }

  function closeModal() {
    setSideNavIsOpen(false);
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 bg-green-200 flex justify-between items-center p-2">
        <button onClick={openModal} className="bg-red-400 w-12 h-12"></button>
        <div className="bg-red-400 w-12 h-12 rounded-full"></div>
      </div>

      <Modal
        isOpen={sideNavIsOpen}
        className="top-0 left-0 w-64 h-screen flex flex-col bg-gray-100"
        onRequestClose={closeModal}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold border-b-2">info akun</h1>
          <div>X</div>
        </div>

        <div className="flex flex-col space-y-4 text-lg overflow-y-auto">
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
        </div>
      </Modal>

      <div className="hidden absolute h-screen bg-gray-100 w-64 flex flex-col text-bg-gray-700 p-2 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold border-b-2">info akun</h1>
          <div>X</div>
        </div>

        <div className="flex flex-col space-y-4 text-lg overflow-y-auto">
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
          <div>option 1 hahaha </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 ">
        <div className="absolute bottom-0 right-0 mb-20 mr-6 h-16 w-16 rounded-full bg-blue-500 text-center">
          +
        </div>
        <div className="space-y-2 ">
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
          <div className="h-32 bg-gray-200 w-full">a</div>
        </div>
      </div>
      <div className="bg-red-200 p-2 justify-between space-between flex">
        <div className="bg-gray-800 w-12 h-12"></div>
        <div className="bg-gray-800 w-12 h-12"></div>
        <div className="bg-gray-800 w-12 h-12"></div>
        <div className="bg-gray-800 w-12 h-12"></div>
      </div>
    </div>
  );
}
