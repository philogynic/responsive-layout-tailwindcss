export default function Test() {
  return (
    <div className="flex flex-col bg-gray-200 h-screen">
      <div className="bg-gray-500 absolute h-32 w-full top-0 z-0"></div>
      <header className="bg-gray-500 z-10">
        <div className="container mx-auto px-4 ">
          <div>nav 1</div>
          <div className="flex flex-wrap">
            <a className="mr-4 p-2 rounded-lg">Sites</a>
            <a className="mr-4 p-2 rounded-lg">Builds</a>
            <a className="mr-4 p-2 rounded-lg">Plugins</a>
            <a className="mr-4 p-2 rounded-lg">Domains</a>
            <a className="mr-4 p-2 rounded-lg">Members</a>
            <a className="mr-4 p-2 rounded-lg">Audit log</a>
            <a className="mr-4 p-2 rounded-lg">Billing</a>
            <a className="mr-4 p-2 rounded-lg">Team settings</a>
          </div>
        </div>
      </header>
      <div className="container flex-1 mx-auto px-4 space-y-4 pb-4 z-10">
        <div className="h-32 bg-gray-100 rounded-xl ">mid 1</div>
        <div className="h-32 bg-gray-100 rounded-xl ">mid 2</div>
      </div>
      <footer className="bg-gray-500 ">
        <div className="container mx-auto pb-16 px-4">footer</div>
      </footer>
    </div>
  );
}
