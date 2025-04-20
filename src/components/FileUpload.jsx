

import React from "react";




const FileUpload = () => {
  return (
    <div className="container-fluid my-5">
      <div className="col-md-8 mx-auto shadow p-5 rounded bg-light">
        <h2 className="text-center mb-4 fw-bold bi bi-folder-fill">
          &nbsp; Upload Your File
        </h2>
        <form>
          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="fromDate" className="form-label">
                From Date
              </label>
              <input type="date" className="form-control" id="fromDate" />
            </div>
            <div className="col-md-6">
              <label htmlFor="toDate" className="form-label">
                To Date
              </label>
              <input type="date" className="form-control" id="toDate" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="personSelect" className="form-label">
                Select Person
              </label>
              <select className="form-select" id="personSelect">
                <option value="">-- Select --</option>
                <option value="John">John</option>
                <option value="Tom">Tom</option>
                <option value="Emily">Emily</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="departmentSelect" className="form-label">
                Department
              </label>
              <select className="form-select" id="departmentSelect">
                <option value="">-- Select --</option>
                <option value="Accounts">Accounts</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="tagsInput" className="form-label">
              Tags <small className="text-muted">(comma separated)</small>
            </label>
            <input
              type="text"
              className="form-control"
              id="tagsInput"
              placeholder="e.g. study, music, travel"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="remarksInput" className="form-label">
              Remarks
            </label>
            <input
              type="text"
              className="form-control"
              id="remarksInput"
              placeholder="Write any notes or remarks"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fileInput" className="form-label">
              Choose File
            </label>
            <input type="file" className="form-control" id="fileInput" />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button type="reset" className="btn btn-outline-danger">
              <i className="bi bi-trash me-2"></i>Clear
            </button>
            <button
              type="submit"
              className="btn btn-warning text-white fw-bold"
            >
              <i className="bi bi-upload me-2"></i>Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
