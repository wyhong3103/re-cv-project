import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

const Form = (props) => {
    return(
        <div className="form">
            <Personal 
                handleChange={props.handleChange}
                info={props.personal}
            ></Personal>
            <Education 
                handleAdd={props.handleAdd}
                handleChange={props.handleChange}
                handleRemove={props.handleRemove}
                info={props.edu}
            ></Education>
            <Experience 
                handleAdd={props.handleAdd}
                handleChange={props.handleChange}
                handleRemove={props.handleRemove}
                info={props.exp}
            ></Experience>
        </div>
    )
};

export default Form;