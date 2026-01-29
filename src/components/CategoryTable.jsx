export default function CategoryTable({ data, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="6">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>
              <button onClick={() => onEdit(c)}>Edit</button>
              <button onClick={() => onDelete(c.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
