import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cards({ data, onDelete, onEdit }) {
  const { title, content } = data;
  console.log(title, content);

  return (
    <>
      <Container className="pt-5">
        <Card className="p-3">
          <input
            className="fs-5 border-0"
            type="text"
            style={{ outline: "none", boxShadow: "none" }}
            value={title}
            readOnly
          />
          <hr />
          <textarea
            className="border-0"
            rows={3}
            value={content}
            style={{ outline: "none", boxShadow: "none", resize: "none" }}
            readOnly
          />
        </Card>
        <div className="d-flex justify-content-end w-100">
          <Button
            className="me-3 d-flex justify-content-center align-items-center border-0"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              zIndex: "1",
              marginTop: "-20px",
              backgroundColor: "#A64D79",
            }}
          >
            <EditIcon onClick={onEdit} />
          </Button>
          <Button
            className="me-3 d-flex justify-content-center align-items-center border-0"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              zIndex: "1",
              marginTop: "-20px",
              backgroundColor: "#A64D79",
            }}
          >
            <DeleteIcon onClick={onDelete} />
          </Button>
        </div>
      </Container>
    </>
  );
}
