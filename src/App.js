import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import './styles/style.css';

const App = () => {
    // 0 = Display Form, 1 = Display CV
    const [mode, setMode] = useState(0);

    const [personal, setPersonal] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",
        desc : ""
    });

    const [edu, setEdu] = useState([
        {
            school : "",
            title : "",
            fdate : "",
            tdate : "",
        }
    ]);

    const [exp, setExp] = useState([
        {
            company : "",
            title : "",
            fdate : "",
            tdate : "",
            desc : ""
        }
    ]);

    //Function for handling the change of state
    const handleChange = (type, key, value, index = -1) => {
        if (type === 0){
            setPersonal((prev) => {
                const temp = prev;
                temp[key] = value;
                return {...temp};
            });
        }else if (type === 1){
            setEdu((prev) => {
                const temp = prev;
                temp[index][key] = value;
                console.log(prev)
                return [...temp];
            });
        }else{
            setExp((prev) => {
                const temp = prev;
                temp[index][key] = value;
                return [...temp];
            });
        }
    }

    //Function for adding new experience/education
    const handleAdd = (type) => {
        if (type===1){
            setEdu(
                prev => {
                    return (
                        [...prev, {
                            school : "",
                            title : "",
                            fdate : "",
                            tdate : "",
                        }]
                    )
                }
            );
        }else{
            setExp(
                prev => {
                    return (
                        [...prev, {
                            company : "",
                            title : "",
                            fdate : "",
                            tdate : "",
                            desc : ""
                        }]
                    )
                }
            );
        }
    }

    //Function for handling removal of an experience/education
    const handleRemove = (type, index) => {
        if (type === 1){
            setEdu(
                prev => {
                    const temp = [];
                    for(let i = 0; i < prev.length; i++){
                        if (i !== index){
                            temp.push(prev[i]);
                        }
                    }
                    return [...temp];
                }
            );
        }else{
            setExp(
                prev => {
                    const temp = [];
                    for(let i = 0; i < prev.length; i++){
                        if (i !== index){
                            temp.push(prev[i]);
                        }
                    }
                    return [...temp];
                }
            );
        }
    }

    //Function for toggling display between showing form / CV
    const toggleDisplay = () => {
        setMode((mode === 1 ? 0 : 1));
    }

    return(
        <div className="main">
            <h1 className="main-title">CV Generator</h1>
            <div className="display-container">
                {
                    mode === 0 ?
                    <Form 
                        handleChange={handleChange} 
                        handleAdd={handleAdd} 
                        handleRemove={handleRemove}
                        personal={personal}
                        edu={edu}
                        exp={exp}
                    ></Form>
                    :
                    <CV 
                        personal={personal} 
                        edu={edu} 
                        exp={exp} 
                    ></CV>
                }
                <div className="btn">
                    <button className="main-btn" onClick={toggleDisplay}>
                        {
                            mode === 0 ?
                            "Submit" :
                            "Back"
                        }
                    </button>
                </div>
            </div>
        </div>
    )

};

export default App;
