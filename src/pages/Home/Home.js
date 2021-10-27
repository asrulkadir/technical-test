import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.scss";
import { useHistory } from 'react-router';

const Home = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [search, setSearch] = useState(false);
    const [user, setUser] =useState("");
    const history = useHistory();

    const path = "https://gorest.co.in/public/v1/users";

    useEffect(() => {
        axios.get(search ? `${path}?name=${user}` : `${path}`)
        .then(res => {
            const result = res.data;
            setDataUsers(result.data)
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });
    }, [search, user]);

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handleSubmit = () => {
        setSearch(true);
    }

    const handleDelete = (e) => {
        const index = e.target.closest("tr").getAttribute("data-key");
        if(window.confirm("Delete User?")) {
            axios.delete(`https://gorest.co.in/public/v1/users/${index}`, {
            headers: { "Authorization": `Bearer 18588b7d696c49ea7e0d024889cecc0587751399fed533385f22a7b46bf62df8`}
            })
            .then(() => {
                alert("Delete User Success");
                window.location = "/";
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className="home-wrapper">
            <input type="text" value={user} onChange={handleUser} placeholder="Search user..." />
            <button onClick={handleSubmit}>search</button>
            <h3 className="add-user-button" onClick={() => history.push("/add-user")} >Add User</h3>
            <table>
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    {
                        dataUsers.map((dataUser, index) => {
                            return (
                                <tr key={index} data-key={dataUser.id} >
                                    <td>{index + 1}</td>
                                    <td>{dataUser.name}</td>
                                    <td>{dataUser.email}</td>
                                    <td>{dataUser.gender}</td>
                                    <td>{dataUser.status}</td>
                                    <td><span onClick={() => history.push({
                                        pathname: "/edit-user",
                                        state: dataUser.id
                                    })}>Edit</span> | <span onClick={handleDelete}>Delete</span></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home;
