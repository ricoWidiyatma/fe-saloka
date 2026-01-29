import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getTransactions } from "../api/transactions.api";
import * as XLSX from "xlsx";

export default function Transactions() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadData = async (p = page) => {
    setLoading(true);
    try {
      const res = await getTransactions(p);
      setData(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(page);
  }, [page]);

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");
    XLSX.writeFile(wb, "transactions.xlsx");
  };

  return (
    <>
      <Navbar />

      <h2>Transactions</h2>

      <button onClick={exportExcel}>Export Excel</button>

      {loading && <p>Loading...</p>}

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID / Invoice</th>
            <th>Total</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t) => (
            <tr key={t.id}>
              <td>{t.invoice ?? t.id}</td>
              <td>{t.total_amount}</td>
              <td>{t.status}</td>
              <td>{t.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span> Page {page} </span>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
}
