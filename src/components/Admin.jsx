import React, { useEffect, useState } from "react";
import FileSearch from "./FileSearch";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const user = localStorage.getItem("login_details");
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    getSearchResults();
  }, [navigate]);

  const logOutHandler = () => {
    localStorage.removeItem("login_details");
    navigate("/");
  };

  const getSearchResults = async () => {
    const API_URL =
      "https://apis.allsoft.co/api/documentManagement//searchDocumentEntry";
    const user_data = JSON.stringify({
      major_head: "",
      minor_head: "",
      from_date: "",
      to_date: "",
      tags: [
        {
          tag_name: "",
        },
        {
          tag_name: "",
        },
      ],
      uploaded_by: "",
      start: 0,
      length: 10,
      filterId: "",
      search: {
        value: "",
      },
    });
    const token = JSON.parse(user)?.token;
    if (token) {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          body: user_data,
        });

        const response = await res.json();
        // console.log(response);
        if (response.status == true) {
          setApiData(response?.data);
        }
      } catch (error) {
        console.log("Error while searching the documnet: " + error);
      }
      return false;
    } else {
      console.log("access token should not be empty!");
    }
  };

  return (
    <div className="container-fluid mx-auto ">
      <div className="container d-flex justify-content-between ">
        <div className="fw-bold text-light fs-1">allsoft</div>
        <div className="mt-2">
          <button className="btn btn-danger " onClick={logOutHandler}>
            Logout
          </button>
        </div>
      </div>
      <div className="text-center ">
        <h1 className="mb-5">Document Managment System</h1>
        {/* <FileSearch /> */}
        <div className="mb-5  ">
          <span
            className="btn btn-primary bi bi-search text-white fw-bold me-2"
            onClick={() => navigate("/search")}
          >
            &nbsp;Search
          </span>
          <span
            className="btn btn-warning bi bi-folder text-white fw-bold ms"
            onClick={() => navigate("/upload")}
          >
            &nbsp;Upload File
          </span>
        </div>
        <div className="container text-center ">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">File Name</th>
                <th scope="col">Major Head </th>
                <th scope="col">File Preview</th>
                <th scope="col">Download File</th>
              </tr>
            </thead>
            <tbody>
              {!apiData
                ? "Data Not Found!"
                : apiData.map((data, index) => {
                    return (
                      <tr key={data.document_id}>
                        <th scope="row"> {index + 1} </th>
                        <td>{data.major_head}</td>
                        <td>{data.upload_time}</td>
                        <td>
                          <img src={data.file_url} alt="Preview" />
                        </td>
                        <td>
                          <a
                            href="#"
                            download={data.file_url}
                            className="bi bi-download"
                          ></a>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
