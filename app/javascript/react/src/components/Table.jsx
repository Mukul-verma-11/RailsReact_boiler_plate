import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../assets/stylesheets/Table.css";
import { MdTipsAndUpdates } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import UpdateModal from "./UpdateModal";
import "../../../../assets/stylesheets/DeleteModal.css";
import { FaWindowClose } from "react-icons/fa";
import working_man from "./working_man.json";
import Lottie from "lottie-react";

const Table = ({ data, isDataDeleted, workers, updateTableData }) => {
  const [dataa, setDataa] = useState([]);
  const [modalDisplay, setModalDisplay] = useState("none");
  const [dataToParent, setDataToParent] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setDataa(data);
  }, [data]);

  const handleUpdateModal = (update) => {
    // setModalDisplay("block");
    updateTableData(update);
  };

  const handleModal = () => {
    setModalDisplay("none");
  };

  const sortTable = () => {
    if (sortOrder != "asc") {
      const sortData = data.sort((a, b) => {
        if (a.task.toLowerCase() > b.task.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      setSortOrder("asc");
    } else {
      const sortData = data.sort((a, b) => {
        if (a.task.toLowerCase() > b.task.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
      setSortOrder("desc");
    }

    console.log(sortData);

    setDataa(...sortData);
  };

  const handleDelete = async (id) => {
    console.log(id);
    setDataToParent(dataToParent + 1);

    await axios.delete(`todos/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
          .content,
      },
      data: {
        id: id,
      },
    });

    toast("Task Deleted !!!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    isDataDeleted(dataToParent);
  };

  return (
    <div>
      {modalDisplay == "none" ? (
        ""
      ) : (
        <div className="modalContainer">
          <div className="boxy" style={{ display: modalDisplay }}>
            <div className="close_button">
              <FaWindowClose onClick={handleModal} />
            </div>
            <form action="" className="delete_modal">
              <label htmlFor="" className="update_label">
                ENTER THE TASK{" "}
              </label>
              <input className="update_input" type="text" />
              <button className="update_button">UPDATE</button>
            </form>
          </div>
        </div>
      )}

      {data.length > 0 ? (
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.No</th>
              
              <th
                className="th_title"
                style={{ cursor: "pointer" }}
                onClick={sortTable}
              >
                Title
              </th>
              <th className="">
                <div className="column_mid">Description</div>
              </th>
              <th className="assign">Assigned-To</th>
              <th className="update_column">Update</th>
              <th className="">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length != 0
              ? data.map((post, index) => (
                  <tr key={post.id}>
                    <td className="serial_column">{index + 1}</td>
                   
                    <td className="task_column">{post.title}</td>
                    <td className="task_column" id="descr">
                      {post.description}
                    </td>

                    <td className="serial_column">{post.worker}</td>

                    <td className="update_column">
                      <button
                        onClick={() =>
                          handleUpdateModal({
                            context_of_form: "update_form",
                            id: post.id,
                            worker: post.worker_id,
                            title: post.title,
                            description: post.description,
                          })
                        }
                      >
                        <MdTipsAndUpdates />
                      </button>
                    </td>
                    <td className="delete_column_td">
                      <div className="delete_icon">
                        <button>
                          <RiDeleteBin5Line
                            onClick={() => handleDelete(post.id)}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : "Empty list"}
          </tbody>
        </table>
      ) : (
        <Lottie className="animation" animationData={working_man} />
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Table;
