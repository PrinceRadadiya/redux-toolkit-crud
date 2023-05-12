import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Button";
import TextFild from "../../Component/TextFild";
import { addusers } from "../../redux_toolkit/Action/Action";
import { v4 as uuidv4 } from "uuid";

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    email: "",
  });

  const handleadduser = () => {
    setvalues({ name: "", email: "" });
    dispatch(
      addusers({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );

    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFild
        lable="Name"
        value={values.name}
        onChange={(e) => setvalues({ ...values, name: e.target.value })}
        inputprops={{ type: "text", placeholder: "prince radadiya" }}
      />
      <br />
      <TextFild
        lable="Email"
        value={values.email}
        onChange={(e) => setvalues({ ...values, email: e.target.value })}
        inputprops={{ type: "email", placeholder: "prince@gmail.com" }}
      />
      <Button onClick={handleadduser}>Submit</Button>
    </div>
  );
};

export default Adduser;
