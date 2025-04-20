
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FileSearch = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("login_details"));

  const handleSearch = async (e) => {
    e.preventDefault();

    const API_URL =
      "https://apis.allsoft.co/api/documentManagement/searchDocumentEntry";

    const payload = {
      start_date: startDate,
      end_date: endDate,
      major_head: category,
      tags: tags.split(",").map((tag) => tag.trim()),
      // user_id: user?.user_id,
      user_id: "",
    };
    console.log(payload);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: user?.token,
        },
        body: JSON.stringify(payload),
      });

      const response = await res.json();
      console.log("Search Response:", response);
      if (response.status === true) {
        console.log(response);
      } else {
        alert("No documents found or an error occurred.");
      }
    } catch (error) {
      console.error("Error while searching the document:", error);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Search Files</h2>

      <form className="shadow p-4 bg-light rounded" onSubmit={handleSearch}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="startDate" className="form-label">
              From Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="endDate" className="form-label">
              To Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Personal">Personal</option>
              <option value="Professional">Professional</option>
              <option value="Company">Company</option>
            </select>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="tags" className="form-label">
              Search Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              placeholder="e.g. finance, HR, tax"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary fw-bold px-5">
            <i className="bi bi-search me-2"></i>Search
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate("/admin")}
          >
            <i className="bi bi-chevron-left"></i>Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileSearch;
