import React,{useState,useEffect} from "react"
import axios from "axios"
import { useNavigate,useParams } from "react-router-dom";




const EditUser = () =>
{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[gender,setGender] = useState("Male");
    const navigate = useNavigate();
    const {id}= useParams();

    useEffect(()=>{
        getUserById();
    },[]);

    const getUserById = async () =>
    {
        const response = await axios.get(`http://localhost:5050/users/${id}`);
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)
    }


    //below function will be called on the submission of the user form
    const updateUser = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5050/users/${id}`, {
          name,
          email,
          gender
        });
        alert("User updated successfully! ✅");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    

    return (
      <div>
        <div>
          <form onSubmit={updateUser}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"    
                />
              </div>
            </div>
    
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
    
            <div className="field">
              <label className="label">Gender</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
    
            <div className="field">
              <div className="control"></div>
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
    
}
export default EditUser;
