import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CategoryForm from "../components/CategoryForm";
import CategoryTable from "../components/CategoryTable";
import {
  getCategories, createCategory, updateCategory, deleteCategory
} from "../api/category.api";

export default function Categories() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setData((await getCategories()).data.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (name) => {
    selected
      ? await updateCategory(selected.id, { name })
      : await createCategory({ name });
    setSelected(null);
    load();
  };

  const remove = async (id) => {
    if (!confirmDialog("Yakin hapus?")) return;
    await deleteCategory(id);
    load();
  };

  return (
    <>
      <Navbar />
      <CategoryForm onSubmit={submit} selected={selected} />
      <CategoryTable data={data} onEdit={setSelected} onDelete={remove} />
    </>
  );
}
