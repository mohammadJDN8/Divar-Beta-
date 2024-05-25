import React, { useState } from "react";
import styles from "../components/module/Category.module.css";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "../services/Admin";

function Category() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { isLoading, mutate, error, data } = useMutation(addCategory);
  console.log(isLoading, error, data);
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: [event.target.value] });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };
  return (
    <form
      className={styles.form}
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <h3>دسته بندی جدید</h3>
      {!!error && <p>{error.message}</p>}
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
