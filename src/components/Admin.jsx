import React from "react";
import FileSearch from "./FileSearch";

const Admin = () => {
  return (
    <div className="container-fluid mx-auto ">
      <div className="fw-bold text-light fs-1">allsoft</div>
      <div className="text-center">
        <h1 className="my-5 ">Document Managment System</h1>
        <FileSearch />
        <div className="container text-center ">
          <table class="table table-hover ">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">File Name</th>
                <th scope="col">File Type</th>
                <th scope="col">File Preview</th>
                <th scope="col">Download File</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Assisment</td>
                <td>pdf</td>
                <td>
                  <img src="" alt="Preview" />
                </td>
                <td>
                  <a href="#" className="bi bi-download"></a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Assisment</td>
                <td>pdf</td>
                <td>
                  <img src="" alt="Preview" />
                </td>
                <td>
                  <a href="#" className="bi bi-download"></a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Assisment</td>
                <td>pdf</td>
                <td>
                  {" "}
                  <img src="" alt="Preview" />
                </td>
                <td>
                  <a href="#" className="bi bi-download"></a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Assisment</td>
                <td>pdf</td>
                <td>
                  <img src="" alt="Preview" />
                </td>
                <td>
                  <a href="#" className="bi bi-download"></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
