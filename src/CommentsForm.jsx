import { useState } from "react"

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        username: "",
        rating: "",
        comment: ""
    })

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let changes = event.target.value;

        setFormData((currData)=>{
            return {...currData, [fieldName]: changes}
        })
    }

    let formd = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            rating: "",
            comment: ""
        });

    }

    return (
        <div>
            <h4> Give a comment </h4>
            <form onSubmit={formd}>
                <input placeholder="username" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                <br></br>
                <input placeholder="rating" type="number" name="rating" value={formData.rating} onChange={handleInputChange} />
                <br></br>
                <textarea placeholder="comment" type="text" name="comment" value={formData.comment} onChange={handleInputChange} />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}