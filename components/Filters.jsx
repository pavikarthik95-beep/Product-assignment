import React from "react";

const Filters = ({ search, setSearch, category, setCategory, sort, setSort }) => {
  return (
    <div className="container" style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "40%",
          marginRight: "10px"
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      >
        <option value="All">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        <option value="Category C">Category C</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Filters;

