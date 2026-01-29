const remove = async (id) => {
  if (!window.confirm("Yakin hapus?")) return;
  await deleteCategory(id);
  load();
};