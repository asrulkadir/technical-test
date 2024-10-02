import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "./EditUser.scss";

const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const history = useHistory();
    const index = history.location.state;

    useEffect(() => {
        axios.get(`https://gorest.co.in/public/v1/users/${index}`)
        .then(result => {
            const data = result.data.data;
            setName(data.name);
            setEmail(data.email);
            setGender(data.gender);
        })
        .catch(err => {
            console.log(err);
            alert(err);
        })
    }, [index])

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        const data = {
            "name": name,
            "email": email,
            "gender": gender,
            "status": "active"
        }

        axios.patch(`https://gorest.co.in/public/v1/users/${index}`, data,
            {
                headers: { 
                    "Authorization": `Bearer {process.env.REACT_APP_API_KEY}`,
                }
            }
        )
        .then(() => {
            alert("Update User Success")
            setName("")
            setEmail("")
        })
        .catch((err) => {
            console.log(err)
        })

        e.preventDefault();
    }


    return (
        <div className="update-user">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"
                placeholder="Your name..." autoComplete="off" 
                value={name} onChange={handleChange} required
                />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"
                placeholder="Your email..." autoComplete="off"
                value={email} onChange={handleEmail} required />

                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={gender} onChange={handleGender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            
                <input type="submit" value="Update User" />
            </form>
        </div>
    )
}

export default EditUser;
