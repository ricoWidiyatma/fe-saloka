import { useState, useEffect } from "react";

export default function CategoryForm({ onSubmit, selected }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selected) setName(selected.name);
  }, [selected]);

  return (
    <div>
      <input
        placeholder="Nama kategori"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        onSubmit(name);
        setName("");
      }}>
        {selected ? "Update" : "Tambah"}
      </button>
    </div>
  );
}
