import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { createCategoryStart, updateCategoryStart } from "../../../Redux/Actions/CategoryAction";

const initialState = {
  category_name: ''
}

const AddEditCategories = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [submit , setSubmit] = useState();
  const history = useHistory();
  const [editMode, setEditMode] = useState(false);
  var { category_name } = formValue;
  const dispatch = useDispatch();
  var { id } = useParams();

  const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleCategory = categories ? categories.find((item) => item.id === Number(id)) : null;
      setFormValue({ ...singleCategory });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
      setSubmit(true);
      if(category_name) {
        if(!editMode) {
          dispatch(createCategoryStart(formValue))
          history.push('/categories')
        } 
        else {
          setEditMode(false);
          dispatch(updateCategoryStart(formValue))
          history.push('/categories')
        }
      }
}

  return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h4>Category</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="section-body">
              <div className="row">
                <div className="col-18 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <center><strong>{!editMode ? "Add Category" : "Update Category"}</strong></center>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="category_name"
                          value={category_name || ""}
                          name="category_name"
                          onChange={onInputChange}
                        />
                      <label style={{
                        color: "red",
                        marginLeft: "2%",
                        display: "flex",
                        fontFamily : 'bold',
                        fontSize: '15px'
                      }}>
                       {submit && !category_name && <small className="p-invalid">Category Name required.</small>}
                      </label>
                      </div>
                      <button type="submit" className="btn btn-primary">{!editMode ? "Add" : "Update"}</button>{" "}
                      <Link to={'/categories'} className="btn btn-info"> Back </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
  )
}

export default AddEditCategories;