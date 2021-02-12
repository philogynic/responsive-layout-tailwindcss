export default function Intercom() {
  const items = [];
  var k = 0;
  for (k = 0; k < 20; k++) {
    items.push("conversation card");
  }

  const cards = [];
  var p = 0;
  for (p = 0; p < 5; p++) {
    cards.push("card");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-none justify-between w-16 bg-gray-200 p-4">
        <div className="flex flex-col space-y-4">
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
          <a>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-none space-y-4 w-64 bg-gray-100 p-4">
        <div className="flex justify-between items-center mb-16">
          <div className="text-2xl font-semibold">Inbox</div>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="bg-red-200 h-64"></div>
        <div className="bg-red-200 h-64"></div>
      </div>
      <div className="flex flex-auto bg-white rounded-tl-xl border-l shadow-xl">
        <div className="flex flex-col w-1/5">
          <div className="flex-none h-24 bg-red-200">top fixed</div>
          <div className="flex-auto flex flex-col space-y-2 mt-4 overflow-y-auto">
            {items.map((i) => {
              return <div className="h-24 flex-none bg-blue-200 p-2">{i}</div>;
            })}
          </div>
        </div>

        <div className="w-3/5 border-l border-r border-gray-300">center</div>

        <div className="w-1/5 bg-gray-200 flex flex-col overflow-y-auto">
          <div className="h-64 flex-none bg-gray-300">top</div>
          <div className="p-4 flex flex-col space-y-2">
            {cards.map((i) => {
              return (
                <div className="flex-none h-64 bg-white rounded-xl border-2 border-gray-400 flex items-center justify-center">
                  card
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
