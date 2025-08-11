import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData(
            (currData) => {
                currData[fieldName] = newValue;
                return {...currData};
            }
        )
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}> 
            <label htmlFor="fullName"> Full Name</label>
            <input
                placeholder="enter full name"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
            />
            <br/>
            <label htmlFor="username"> Username</label>
            <input
                placeholder="enter user name"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    )

}