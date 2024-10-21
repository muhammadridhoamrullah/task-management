import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default async function createTask() {
  const submitHandler = async (formData: FormData) => {
    "use server";

    const title = formData.get("title");
    const category = formData.get("category");

    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Gagal");
    }
    revalidatePath("/");
    return redirect("/");
  };

  return (
    <>
      <form action={submitHandler}>
        <div className="flex flex-col justify-center items-center">
          <div className="mt-5">Create Task</div>
          <input
            type="text"
            name="title"
            placeholder="Type here"
            className="mt-5 input input-bordered w-full max-w-xs"
          />

          <label className="mt-5 form-control w-full max-w-xs">
            <select name="category" className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option value="backend">Backend</option>
              <option value="frontend">Frontend</option>
              <option value="mobile">Mobile</option>
            </select>
          </label>

          <button type="submit" className="mt-5 btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
