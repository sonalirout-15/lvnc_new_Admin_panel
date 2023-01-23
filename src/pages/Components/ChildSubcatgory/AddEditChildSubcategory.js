import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { createChildSubcategoryStart, updateChildSubcategoryStart } from "../../../Redux/Actions/ChildSubcategoryAction";
import { loadSubcategoryStart } from "../../../Redux/Actions/SubcategoryActions";

const initialState = {
  Subcategory_ref_id: '',
  Description :'',
  title : '',
  image : ''
}
const AddEditChildSubcategory = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();
  const [submit , setSubmit] = useState();
  var { Subcategory_ref_id, Description, title, image } = formValue;
  const dispatch = useDispatch();
  var { id } = useParams();
  console.log('ID~~~~~~~~>>>', id);

  const childSubcategory = useSelector((state) => state?.childSubcatgory?.childSubcatgeory?.rows);
  const subcategories = useSelector((state) => state?.subcategory?.subcategories?.categoryData?.rows);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleChildSubcategory = childSubcategory ? childSubcategory.find((item) => item.id === Number(id)) : null;
      setFormValue({ ...singleChildSubcategory });
    } else {
      setEditMode(false);
      setFormValue({ ...formValue });
    }
  }, [id]);

  useEffect(() => {
    dispatch(loadSubcategoryStart())
  }, [])


  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleFileSelect = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
      if(Description && title && image) {
        if(!editMode) {
          const formData = new FormData();
          formData.append("Subcategory_ref_id", Subcategory_ref_id);
          formData.append("Description", Description);
          formData.append("title", title);
          formData.append("image", image);
          dispatch(createChildSubcategoryStart(formData))
          history.push('/childSubcategory')
        } 
        else {
          const formData = new FormData();
          formData.append("id", id);
          formData.append("Subcategory_ref_id", Subcategory_ref_id);
          formData.append("Description", Description);
          formData.append("title", title);
          formData.append("image", image);
          setEditMode(false);
          dispatch(updateChildSubcategoryStart(formData));
          // history.push('/childSubcategory')
        }
      }
}



  return(
         <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h4>Child Subcategory</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="section-body">
              <div className="row">
                <div className="col-30 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <center><strong>{!editMode ? "Add Child Subcategory" : "Update Child Subcategory"}</strong></center>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          value={title || ""}
                          name="title"
                          onChange={onInputChange}
                        />
                      <label style={{
                        color: "red",
                        marginLeft: "2%",
                        display: "flex",
                        fontFamily : 'bold',
                        fontSize: '15px'
                      }}>
                         {submit && !title && <small className="p-invalid">Title required.</small>}
                      </label>
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Description"
                          value={Description || ""}
                          name="Description"
                          onChange={onInputChange} />
                      <label style={{
                        color: "red",
                        marginLeft: "2%",
                        display: "flex",
                        fontFamily : 'bold',
                        fontSize: '15px'
                      }}>
                         {submit && !Description && <small className="p-invalid">Description required.</small>}
                      </label>
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          type="file"
                          className="form-control"
                          accept="/accept/*"
                          id="image"
                          defaultValue={image || ""}
                          name="image"
                          onChange={handleFileSelect} />
                      <label style={{
                        color: "red",
                        marginLeft: "2%",
                        display: "flex",
                        fontFamily : 'bold',
                        fontSize: '15px'
                      }}>
                        {submit && !image && <small className="p-invalid">Image required.</small>}
                      </label>
                      </div>
                      <div className="form-group">
                        <label>Subcategory Id</label>
                        <select
                          className="form-control"
                          id="Subcategory_ref_id"
                          value={Subcategory_ref_id || ""}
                          name="Subcategory_ref_id"
                          onChange={onInputChange}
                        >
                          {subcategories ? subcategories.map(subcatItem => (
                            <option
                              key={subcatItem.subcategory_name}
                              value={subcatItem.id}>
                              {subcatItem.subcategory_name}
                            </option>
                          )) : null}
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">{!editMode ? "Add" : "Update"}</button>{" "}
                      <Link to={'/childSubcategory'} className="btn btn-info"> Back </Link>
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

export default AddEditChildSubcategory;