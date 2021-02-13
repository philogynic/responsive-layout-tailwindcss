import { useState } from "react";

export default function Billing() {
  const [showBillingForm, setShowBillingForm] = useState(true);

  const billingFormToggle = () => {
    showBillingForm ? setShowBillingForm(false) : setShowBillingForm(true);
  };

  return (
    <div className="flex flex-col bg-gray-200">
      <div className="absolute h-32 w-full top-0 z-0 bg-gray-800"></div>
      <header className="bg-gray-800 z-10">
        <nav className="container mx-auto px-2 text-gray-100">
          <div className="flex justify-between items-center">
            <div>nav 1 left</div>
            <div>nav 1 right</div>
          </div>
          <div>
            <div className="flex flex-wrap text-gray-400">
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
              <a className="mr-2">link 12345</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1 z-10 mt-4">
        <div className="container flex flex-col mx-auto px-2">
          <div className="h-32 max-w-lg bg-gray-100 rounded-lg">first card</div>
          <div className="flex space-x-2">
            <div className="w-1/4 ">
              <div className="flex flex-col sticky top-0">
                <a className="mr-2 bg-gray-300">link 1</a>
                <a className="mr-2 bg-gray-300">link 2</a>
                <a className="mr-2 bg-gray-300">link 3</a>
                <a className="mr-2 bg-gray-300">link 4</a>
              </div>
            </div>
            <div className="w-3/4 pb-14">
              <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Current Service</h1>
                <p>Fees and bla bla bla are blah hahahah</p>
                <div className="h-64 bg-gray-100 rounded-lg">card1</div>
                <div className="h-32 bg-gray-100 rounded-lg">card1</div>
                <div className="h-32 bg-gray-100 rounded-lg">card1</div>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Current Service</h1>
                <p>Fees and bla bla bla are blah hahahah</p>
                <div className="h-64 bg-gray-100 rounded-lg">card1</div>
                <div className="h-32 bg-gray-100 rounded-lg">card1</div>
                <div className="h-32 bg-gray-100 rounded-lg">card1</div>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Billing details</h1>
                <p>Payment and billing information for this account</p>
                <div className="p-6 space-y-10 flex justify-between flex-col bg-gray-100 rounded-lg">
                  <h2 className="font-semibild text-2xl pb-2 border-b-2 border-gray-200">
                    Payment Information
                  </h2>
                  <div className="flex">
                    <p className="w-1/4">Payment method:</p>
                    <div className="w-3/4 font-bold text-gray-400">
                      No credit card on file
                    </div>
                  </div>
                  <button className="w-max bg-green-700 text-gray-200 font-semibold py-1 px-2 rounded-lg">
                    Add Payment Method
                  </button>
                </div>
                <div
                  className={
                    "p-6 space-y-10 flex justify-between flex-col bg-gray-100 rounded-lg " +
                    (showBillingForm ? "hidden" : "")
                  }
                >
                  <h2 className="font-semibild text-2xl pb-2 border-b-2 border-gray-200">
                    Billing Information
                  </h2>
                  <div className="flex flex-col space-y-4">
                    <div className="flex">
                      <p className="w-1/4">Name:</p>
                      <div className="w-3/4 font-semibold text-gray-700">
                        philogynic
                      </div>
                    </div>
                    <div className="flex">
                      <p className="w-1/4">Email:</p>
                      <div className="w-3/4 font-semibold text-gray-700">
                        bimogame161@gmail.com
                      </div>
                    </div>
                    <div className="flex">
                      <p className="w-1/4">Details:</p>
                      <div className="w-3/4 font-bold text-gray-400">
                        No billing details yet
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={billingFormToggle}
                    className="w-max bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded-lg"
                  >
                    Edit billing information
                  </button>
                </div>
                <div
                  className={
                    "p-6 space-y-10 flex justify-between flex-col bg-gray-100 rounded-lg " +
                    (showBillingForm ? "" : "hidden")
                  }
                >
                  <h2 className="font-semibild text-2xl pb-2 border-b-2 border-gray-200">
                    Billing Information form
                  </h2>
                  <div className="flex flex-col space-y-4">
                    <div className="flex">
                      <p className="w-1/4">Name:</p>
                      <div className="w-3/4">
                        <input
                          className="w-full py-1 px-2 rounded-md bg-white border-2 border-gray-200"
                          value="philogynic"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <p className="w-1/4">Email:</p>
                      <div className="w-3/4">
                        <input
                          className="w-full py-1 px-2 rounded-md bg-white border-2 border-gray-200"
                          value="bimogame161@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <p className="w-1/4">Details:</p>
                      <div className="w-3/4 font-bold text-gray-400">
                        <textarea
                          className="w-full py-1 px-2 rounded-md border-2 border-gray-200"
                          rows="5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-x-4">
                    <button className="w-max bg-green-700 text-gray-100 font-semibold py-1 px-4 rounded-lg">
                      Save
                    </button>
                    <button
                      onClick={billingFormToggle}
                      className="w-max bg-gray-200 text-gray-800 font-semibold py-1 px-4 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 z-10">
        <div className="container mx-auto px-2 text-gray-100">
          <div>footer</div>
        </div>
      </footer>
    </div>
  );
}
