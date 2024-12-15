import { useMemo, useState } from "react";
import "./style.css";

const TableContainer = ({ data, head, width = 900 }) => {
  if (!data?.length) {
    return <p>No data available</p>;
  }

  const [page, setPage] = useState(1);
  const [row, setRows] = useState(5);

  const totalPages = Math.ceil(data.length / row);

  const pageData = useMemo(
    () => data.slice((page - 1) * row, page * row),
    [data, page, row]
  );

  const handleItemsPerPageChange = (e) => {
    setRows(Number(e.target.value));
    setPage(1);
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <table style={{ width }}>
        <caption>
          Table displaying data with pagination and rows per page selection
        </caption>
        <thead>
          <tr>
            {head?.map((name, indx) => (
              <th key={indx} scope="col">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData?.map((user, index) => (
            <tr key={user["s.no"] || index}>
              <td>{user["s.no"]}</td>
              <td>{user["percentage.funded"]}</td>
              <td>{user["amt.pledged"]}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <div
                className="pagination-controls"
                role="navigation"
                aria-label="Pagination Controls"
              >
                <button
                  onClick={goToPreviousPage}
                  disabled={page === 1}
                  aria-label="Go to previous page"
                  aria-disabled={page === 1}
                >
                  &#x2190; {/* Left arrow */}
                </button>
                <span>
                  {page} of {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={page === totalPages}
                  aria-label="Go to next page"
                  aria-disabled={page === totalPages}
                >
                  &#x2192; {/* Right arrow */}
                </button>
                <select
                  value={row}
                  onChange={handleItemsPerPageChange}
                  aria-label="Select number of items per page"
                >
                  <option value={1}>1</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
