import React, { useState, useEffect } from "react";
import "../../../../assets/stylesheets/Content.css";
import axios from "axios";
import Table from "./Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../assets/stylesheets/DeleteModal.css";
import { FaWindowClose } from "react-icons/fa";

const Content = () => {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState();
  const [flag, setFlag] = useState(0);
  const [dataDeleted, setDalaDeleted] = useState(0);
  const [workers, setWorkers] = useState([]);
  const [modalDisplay, setModalDisplay] = useState("none");
  const [postID, setPostID] = useState();
  const [formFor, setFormFor] = useState("enter_form");

  useEffect(() => {
    axios
      .get("/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/workers")
      .then((resp) => setWorkers(resp.data))
      .catch((err) => console.log(err));
  }, [flag, dataDeleted]);

  const handleDeleteDataFromTable = (packet) => {
    const newpacket = packet + 1;
    setDalaDeleted(packet + 1);
    console.log(newpacket);
  };

  const handleUpdateFromTable = (updatedData) => {
    setInput(updatedData.title);
    setDesc(updatedData.description);
    setSelectedWorker(updatedData.worker);
    setPostID(updatedData.id);
    setFormFor(updatedData.context_of_form);
  };

  const handleUpdateFunction = () => {
    console.log("asdasdasdsadasdasdasdasd");

    const authenticityToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    axios({
      method: "put",
      url: `/todos/update/${postID}`,
      data: {
        task: {
          title: input,
          description: desc,
          worker_id: parseInt(selectedWorker),
        },
      },
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": authenticityToken,
      },
    })
      .then((response) => {
        toast("Task Updated Successfully!", { autoClose: 3000 });
        // flag == 0 ? setFlag(1) : setFlag(0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputTask = (e) => {
    setInput(e.currentTarget.value);
  };
  const handleDescInput = (e) => {
    setDesc(e.currentTarget.value);
  };

  const handleSubmit = () => {
    // toast("Task Added Successfully!");
    console.log(modalDisplay);
    setModalDisplay("s");
  };

  const handleModal = () => {
    setModalDisplay("none");
  };

  const handleForm = (e) => {
    e.preventDefault();
    setInput("");
    setDesc("");

    ValidInput = input.charAt(0).toUpperCase() + input.slice(1);
    ValidInput = String(ValidInput.trim());

    if (ValidInput.length < 5 || desc.length < 5) {
      toast.error("Input is too short", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const authenticityToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
      //  debugger;

      if (formFor == "enter_form") {
        console.log("enter form");
        axios({
          method: "post",
          url: "/create",
          data: {
            task: {
              title: ValidInput,
              description: desc,
              worker_id: parseInt(selectedWorker),
            },
          },
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": authenticityToken,
          },
        })
          .then((response) => {
            toast("Task Added Successfully!", { autoClose: 3000 });
            flag == 0 ? setFlag(1) : setFlag(0);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        handleUpdateFunction();
        flag == 0 ? setFlag(1) : setFlag(0);
        setFormFor("enter_form");
      }
    }
  };

  return (
    <div className="content">
      <div className="right_content">
        {/* {modalDisplay == "none" ? (
        ""
      ) : (
        <div style={{marginLeft:'30%'}}  className="modalContainer">
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
      )} */}

        <div>
          <form action="" onSubmit={handleForm} className="box">
            <div className="first">
              <h4></h4>
              <div>
                <input
                  // minLength={3}
                  // required
                  type="text"
                  onChange={handleInputTask}
                  value={input}
                  className="task_input"
                  placeholder=" ENTER TASK...."
                />
              </div>

              <div>
                <textarea
                  // minLength={3}
                  // required

                  type="text"
                  onChange={handleDescInput}
                  value={desc}
                  className="task_desc"
                  placeholder=" ENTER DESCRIPTION...."
                />
              </div>

              <div>
                <label for="cars">ASSIGN THIS TASK TO : </label>

                <select
                  onChange={(e) => setSelectedWorker(e.currentTarget.value)}
                  name="worker"
                  id="worker"
                  className="select"
                >
                  {/* <option> Select Employee </option> */}
                  {workers.map((worker, i) => (
                    <option id={worker.id} value={worker.id}>
                      {worker.name}
                    </option>
                  ))}
                </select>
              </div>

              <button onClick={handleSubmit} className="task_submit">
                SUBMIT
              </button>
            </div>
          </form>
          {/* <ToastContainer /> */}
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
      </div>

      {/* {data.map(post => <li key={post.id} >{post.task}</li>)} */}

      <div className="table_area">
        <Table
          isDataDeleted={handleDeleteDataFromTable}
          workers={workers}
          data={data}
          updateTableData={handleUpdateFromTable}
        />
      </div>
    </div>
  );
};

export default Content;
