import React from "react";
import { useHistory } from "react-router-dom";
import { userDetail } from "./Data";
import Dropdown from 'react-bootstrap/Dropdown';

const UserDropdown = () => {
  const userData = userDetail;
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem("ADMIN");
    history.push("/");
  };

  return (
    <>
     <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic" >
      <img
            style={{ height: '40px' , width:'40px'}}
            alt="image"
            src={userData.userImg}
            className="rounded-circle mr-1"
          />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => history.push("/change-password")}>Change Password</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push("/reset-password")}>Reset Password</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
};

export default UserDropdown;
