import { useEffect, useState } from "react";
import TableContainer from "./components/TableContainer";
import { fetchJson } from "./data/fetchJson";

const URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchJson(URL);
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer
        data={data}
        head={["S.No.", "Percentage funded", "Amount Pleadged"]}
      />
    </div>
  );
};

export default App;
