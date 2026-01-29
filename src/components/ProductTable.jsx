export default function ProductTable({ data, onDelete }) {
  return (
    <table border="1" cellPadding="6">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map(p=>(
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.category?.name}</td>
            <td>{p.price}</td>
            <td>{p.is_active ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={()=>onDelete(p.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
