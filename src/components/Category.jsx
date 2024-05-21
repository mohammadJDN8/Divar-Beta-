import React, { useState } from "react";

function Category() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: [event.target.value] });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم</label>
      <input type="text" name="name" id="" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit">ایجاد</button>
    </form>
  );
}

export default Category;
