export default function Kanban() {
  return (
    <div className="bg-red-100 h-screen flex">
      <div className="bg-green-100 w-64 flex flex-col flex-shrink-0 overflow-auto">
        <div className="text-4xl">Logo</div>
        <div className="mt-5 flex flex-col">
          <div>
            <div className="text-2xl">Menu A</div>
            <div className="flex flex-col space-y-5">
              <div>Menu A (1)</div>
              <div>Menu A (2)</div>
              <div>Menu A (3)</div>
              <div>Menu A (1)</div>
              <div>Menu A (2)</div>
              <div>Menu A (3)</div>
              <div>Menu A (1)</div>
              <div>Menu A (2)</div>
              <div>Menu A (3)</div>
              <div>Menu A (1)</div>
              <div>Menu A (2)</div>
              <div>Menu A (3)</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-2xl">Menu B</div>
            <div>
              <div>Menu B (1)</div>
              <div>Menu B (2)</div>
              <div>Menu B (3)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex justify-between items-center bg-blue-100">
          <div>top navbar left section</div>
          <div>top navbar right section</div>
        </div>
        <div className="bg-blue-200">
          <div>second navbar</div>
        </div>
        <div className="flex-1 overflow-x-auto">
          <main className="flex space-x-2">
            <div className="w-80 flex-shrink-0 bg-red-200 flex flex-col space-y-4 overflow-y-auto">
              <div className="text-3xl">first scrol</div>
              <div className="flex-1 overflow-y-auto">
                <div className="h-64 border-2 border-gray-900">card</div>
                <div className="h-64 border-2 border-gray-900">card</div>
                <div className="h-64 border-2 border-gray-900">card</div>
                <div className="h-64 border-2 border-gray-900">card</div>
                <div className="h-64 border-2 border-gray-900">card</div>
                <div className="h-64 border-2 border-gray-900">card</div>
              </div>
            </div>
            <div className="w-64 flex-shrink-0 bg-red-200">
              second scrollable
            </div>
            <div className="w-96 flex-shrink-0 bg-red-200">
              third scrollable
            </div>
            <div className="w-64 flex-shrink-0 bg-red-200">
              fourth scrollable
            </div>
            <div className="w-96 flex-shrink-0 bg-red-200">
              fifth scrollable
            </div>
            <div className="w-96 flex-shrink-0 bg-red-200">
              fifth scrollable
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
