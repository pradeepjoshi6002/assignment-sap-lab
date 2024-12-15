const TableContainer = ({ data, head }) => {
  if (!data?.length) {
    return <p>No data available</p>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        border="1"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            {head?.map((name, indx) => (
              <th key={indx} style={{ padding: "8px", background: "#f4f4f4" }}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user["s.no"]}>
              <td>{user["s.no"]}</td>
              <td>{user["percentage.funded"]}</td>
              <td>{user["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
