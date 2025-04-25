import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); // Default to first category, "Code"

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === "") return; // Avoid submitting empty tasks

    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText(""); // Clear form after submission
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) =>
            category !== "All" ? (
              <option key={category} value={category}>
                {category}
              </option>
            ) : null
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
