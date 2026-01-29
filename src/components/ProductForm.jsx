import { useState } from "react";

export default function ProductForm({ categories, onSubmit }) {
  const [form, setForm] = useState({
    name: "", price: "", category_id: "", is_active: true
  });

  return (
    <div>
      <input placeholder="Nama"
        onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Harga"
        onChange={e=>setForm({...form,price:e.target.value})}/>
      <select onChange={e=>setForm({...form,category_id:e.target.value})}>
        <option value="">Pilih kategori</option>
        {categories.map(c=>(
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button onClick={() => onSubmit(form)}>Tambah</button>
    </div>
  );
}
