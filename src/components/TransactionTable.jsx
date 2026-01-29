export default function TransactionTable({ data }) {
  return (
    <table border="1" cellPadding="6">
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Total</th>
          <th>Status</th>
          <th>Tanggal</th>
        </tr>
      </thead>
      <tbody>
        {data.map(t=>(
          <tr key={t.id}>
            <td>{t.invoice_number}</td>
            <td>{t.total_amount}</td>
            <td>{t.status}</td>
            <td>{t.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
