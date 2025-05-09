import React,{useState,useEffect} from "react"
import axios from "axios"
import { Link} from "react-router-dom";


const UserList = () =>
{
    const[users,setUser] = useState([]);

    useEffect(()=>
    {
       getUsers();
    },[])

    const getUsers = async() =>
    {
        const response = await axios.get("http://localhost:5050/users")
        setUser(response.data);
    }

    const deleteUser = async(id) =>
    {
        try{
           const response= await axios.delete(`http://localhost:5050/users/${id}`);
           getUsers();

        }
        catch(error)
        {
            console.log(error);
        }
    }
    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <Link to="add" className="button is-success"> Add New</Link>
                <table className="table is-striped is-fullwidth mt-2">
                    <thead>
                        <tr>
                            <th>
                                S. No
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Gender
                            </th>
                            <th>
                                Actions 
                            </th>
                        </tr>
                    </thead>

                    {/* <tbody>{users.map((user,index)=>
                    {
                         <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <Link to={'edit/${user._id'}>Edit</Link>
                                <button onClick={()=> deleteUser(user._id)} className="button is-danger">Delete</button>
                            </td>
                         </tr>
                    } 
                    )} */}
                    
                    {/* </tbody> */}

                    <tbody>
  {users.map((user, index) => (
    <tr key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>
      <Link to={`/edit/${user._id}`} className="button is-info">Edit</Link>

        <button onClick={() => deleteUser(user._id)} className="button is-danger ml-2">Delete</button>
      </td>
    </tr>
  ))}
</tbody>



                </table>
            </div>
        </div>
    )
}

export default UserList;