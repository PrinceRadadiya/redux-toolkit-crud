import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Component/Button";
import TextFild from "../../Component/TextFild";
import { edituser } from "../../redux_toolkit/Action/Action";

const Edituser = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const updatedata = users.filter((nok) => nok.id === params.id);

  const { name, email } = updatedata[0];
  const [values, setvalues] = useState({
    name,
    email,
  });

  const handleEddituser = () => {
    setvalues({ name: "", email: "" });
    dispatch(
      edituser({
        id: params.id,
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
      <Button onClick={handleEddituser}>Edit</Button>
    </div>
  );
};

export default Edituser;
