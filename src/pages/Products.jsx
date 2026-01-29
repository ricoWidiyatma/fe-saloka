import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProducts, createProduct, deleteProduct } from "../api/product.api";
import { getCategories } from "../api/category.api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "", price: "", category_id: "", is_active: true
  });

  const load = async () => {
    setProducts((await getProducts()).data.data);
    setCategories((await getCategories()).data.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async () => {
    await createProduct({
      ...form,
      price: Number(form.price)
    });
    load();
  };

  return (
    <>
      <Navbar />
      <h2>Products</h2>

      <input placeholder="Name"
        onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Price"
        onChange={e=>setForm({...form,price:e.target.value})}/>
      <select onChange={e=>setForm({...form,category_id:e.target.value})}>
        <option>Pilih Category</option>
        {categories.map(c=>(
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button onClick={submit}>Tambah</button>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th><th>Category</th><th>Price</th><th>Status</th><th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p=>(
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category?.name}</td>
              <td>{p.price}</td>
              <td>{p.is_active ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={()=>deleteProduct(p.id).then(load)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
