import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const user = JSON.parse(localStorage.getItem("login_details"));
  const [person, setPerson] = useState("");
  const [department, setDepartment] = useState("");
  const [tags, setTags] = useState("study, music, travel");
  const [remarks, setRemarks] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }
    // else if (file.type != "application/pdf") {
    //   alert("only pdf and image file accepted!" + file.type);
    //   return false;
    // }

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const upload_time = `${day}-${month}-${year}`;
    const data = {
      major_head: department,
      minor_head: person,
      document_date: upload_time,
      document_remarks: remarks,
      tags: tags.split(",").map((tag) => tag.trim()),
      user_id: user?.user_id,
    };

    const formdata = new FormData();
    formdata.append("file", file); // actual file, not just file.name
    formdata.append("data", JSON.stringify(data)); // stringify your JSON data

    console.log(" form data ssss : " + formdata);
    const API_URL =
      "https://apis.allsoft.co/api/documentManagement/saveDocumentEntry";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          token: user?.token,
        },
        body: formdata,
      });

      const response = await res.json();
      console.log("Upload Response:", response);
      if (response.statu == true) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleClear = () => {
    setPerson("");
    setDepartment("");
    setTags("");
    setRemarks("");
    setFile(null);
   
  };

  return (
    <div className="container-fluid my-5">
      <div className="col-md-8 mx-auto shadow p-5 rounded bg-light">
        <h2 className="text-center mb-4 fw-bold bi bi-folder-fill">
          &nbsp; Upload Your File
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="personSelect" className="form-label">
                Select Person
              </label>
              <select
                className="form-select"
                id="personSelect"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
              >
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
              <select
                className="form-select"
                id="departmentSelect"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
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
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Write any notes or remarks"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fileInput" className="form-label">
              Choose File
            </label>
            <input
              type="file"
              className="form-control"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button
              type="reset"
              className="btn btn-outline-danger"
              onClick={handleClear}
            >
              <i className="bi bi-trash me-2"></i>Clear
            </button>
            <button
              type="submit"
              className="btn btn-warning text-white fw-bold"
              onClick={handleSubmit}
            >
              <i className="bi bi-upload me-2"></i>Upload
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
    </div>
  );
};

export default FileUpload;
