import React, { useEffect, useState } from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import Cards from "./Cards";
import EditIcon from "@mui/icons-material/Edit";

export default function Notes() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [notes, setnotes] = useState(getdata());
  const [editIndex, seteditIndex] = useState(null);

  const addNote = () => {
    if (title.trim() === "") {
      alert("Title Field Required");
    } else if (title.length > 10) {
      alert("Title length must be smaller than 10 characters");
    } else {
      if (editIndex !== null) {
        var updatedtodos = notes.map((note, index) =>
          index === editIndex ? { title, content } : note
        );
        setnotes(updatedtodos);
        seteditIndex(null);
      } else {
        setnotes((prev) => [...prev, { title, content }]);
      }
      settitle("");
      setcontent("");
    }
  };

  function getdata() {
    var storedinfo = JSON.parse(localStorage.getItem("note"));
    return storedinfo || [];
  }
  useEffect(() => {
    var updateditem = localStorage.setItem("note", JSON.stringify(notes));
    console.log(updateditem);
  }, [notes]);

  const deleteNote = (index) => {
    const updateddata = localStorage.setItem("note", JSON.stringify(notes));
    setnotes((prev) => prev.filter((note, i) => i !== index));
    console.log(updateddata);
  };

  const EditNote = (index) => {
    seteditIndex(index);
    settitle(notes[index].title);
    setcontent(notes[index].content);
  };

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
        <Card className="w-50 p-3">
          <input
            type="text"
            placeholder="Title"
            className="fs-3 border-0"
            style={{ outline: "none", boxShadow: "none" }}
            name="title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          ></input>
          <hr />
          <textarea
            className="border-0 "
            rows={4}
            placeholder="Take a Note"
            name="content"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            style={{ outline: "none", boxShadow: "none", resize: "none" }}
          ></textarea>
        </Card>
        <div className="d-flex w-50 justify-content-end me-3">
          <Button
            className="me-3 d-flex justify-content-center align-items-center border-0"
            onClick={addNote}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              zIndex: "1",
              marginTop: "-20px",
              backgroundColor: "#A64D79",
            }}
          >
            {editIndex ? <EditIcon /> : <AddIcon />}
          </Button>
        </div>
      </Container>
      <Container>
        <Row>
          {notes.map((item, index) => (
            <Col key={index} lg={3} className="mb-4">
              <Cards
                data={item}
                onDelete={() => deleteNote(index)}
                onEdit={() => EditNote(index)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
