import Container from "../components/container";

export default function Dashboard() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-100 relative z-0">
          <div className="h-30 p-6 text-gray-700 text-4xl font-medium">
            Hi, this is your dashboard
          </div>
          <div className="flex p-6">
            <div className="w-1/4">
              <div className="sticky top-28">
                <p>General</p>
                <p>Login Connections</p>
                <p>Biling</p>
                <p>Invoices</p>
                <p>Tokens</p>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="h-64 border-2 border-gray-300 p-4 rounded">
                a card
              </div>
              <div className="h-64 border-2 border-gray-300 p-4 rounded">
                a card
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-2 h-96">this is footer</div>
        </div>
      </div>
    </Container>
  );
}
