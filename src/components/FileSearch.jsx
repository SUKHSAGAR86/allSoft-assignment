

import React from "react";

const FileSearch = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Search Files</h2>
      <form className="shadow p-4 bg-light rounded">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="startDate" className="form-label">
              From Date
            </label>
            <input type="date" className="form-control" id="startDate" />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="endDate" className="form-label">
              To Date
            </label>
            <input type="date" className="form-control" id="endDate" />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select className="form-select" id="category">
              <option value="">-- Select --</option>
              <option value="Personal">Personal</option>
              <option value="Professional">Professional</option>
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
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary fw-bold px-5">
            <i className="bi bi-search me-2"></i>Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileSearch;
