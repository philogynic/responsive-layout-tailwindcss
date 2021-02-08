import Anwar from "./anwar";
import Navbar from "./navbar";

export default function Container(props) {
  const { children, ...customMeta } = props;
  return (
    <div className="bg-gray-100">
      <Anwar />
      <Navbar />
      {children}
    </div>
  );
}
