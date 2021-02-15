export default function StickyNavbar() {
  return (
    <div className="bg-red-200">
      <div className="flex flex-col max-w-4xl mx-auto bg-blue-100">
        <div className="h-16">nav1</div>
      </div>
      <div className="flex flex-col sticky top-0 mx-auto max-w-4xl  bg-blue-100">
        <div className="bg-blue-200 h-14 flex items-center">
          <div className="flex flex-row space-x-4 items-center p-2 overflow-x-auto">
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
            <div className="bg-red-400">option_1</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col space-y-2 p-4">
          <div className="h-64 bg-white rounded-xl">card</div>
          <div className="h-64 bg-white rounded-xl">card</div>
          <div className="h-64 bg-white rounded-xl">card</div>
          <div className="h-64 bg-white rounded-xl">card</div>
          <div className="h-64 bg-white rounded-xl">card</div>
          <div className="h-64 bg-white rounded-xl">card</div>
        </div>
      </div>
    </div>
  );
}
