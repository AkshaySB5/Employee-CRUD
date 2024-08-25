import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
export function App() {
  return (
    <>
      <div className="flex px-3 py-3 h-16 bg-cyan-800 items-center">
        <h1 className="text-3xl font-bold text-slate-300 ">
          {" "}
          👔EMPLOYEE MANAGEMENT{" "}
        </h1>{" "}
        <div className="space-x-4 ml-auto">
          <a
            className="font-semibold text-slate-300 hover:text-slate-700"
            href="/"
          >
            Home{" "}
          </a>{" "}
          <a
            className="font-semibold text-slate-300 hover:text-slate-700"
            href="/"
          >
            Contact{" "}
          </a>{" "}
          <a
            className="font-semibold text-slate-300 hover:text-slate-700"
            href="/"
          >
            Logout{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <div className="container mx-20 my-8">
        <div>
          <button className="bg-cyan-700 font-bold hover:bg-cyan-900 text-slate-300 mx-20 my-10 items-center px-2 py-2 rounded">
            Add Employee{" "}
          </button>{" "}
        </div>{" "}
        <div>
          <table className="shadow rounded">
            <thead className="bg-cyan-700 text-slate-300 ">
              <th className="px-6 py-3 tracking-wide text-slate-300"> Name </th>{" "}
              <th className="px-6 py-3 tracking-wide text-slate-300">
                Mobileno{" "}
              </th>{" "}
              <th className="px-6 py-3 tracking-wide text-slate-300">
                {" "}
                Mailid{" "}
              </th>{" "}
            </thead>
            <tbody>
              <tr className="hover:bg-slate-400">
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  {" "}
                  Nani{" "}
                </td>{" "}
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  8547530187{" "}
                </td>{" "}
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  ss @gmail.com{" "}
                </td>{" "}
              </tr>
              <tr>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  {" "}
                  Vijay{" "}
                </td>{" "}
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  8547300187{" "}
                </td>{" "}
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  goat @gmail.com{" "}
                </td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
