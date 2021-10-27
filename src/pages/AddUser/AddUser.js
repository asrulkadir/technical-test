import axios from 'axios';
import React, { useState } from 'react';
import "./AddUser.scss";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");

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

        axios.post(`https://gorest.co.in/public/v1/users`, data,
            {
                headers: { 
                    "Authorization": `Bearer 18588b7d696c49ea7e0d024889cecc0587751399fed533385f22a7b46bf62df8`,
                }
            }
        )
        .then(() => {
            alert("Add User Success");
            setName("")
            setEmail("")
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        })

        e.preventDefault();
    }

    return (
        <div className="add-user">
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
            
                <input type="submit" value="Add User" />
            </form>
        </div>
    )
}

export default AddUser;
