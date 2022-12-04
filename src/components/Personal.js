const Personal = (props) => {
    return(
        <div className="personal section">
            <h2 className="section-title">
                Personal Details
            </h2>
            <div className="section-child">
                <div className="hori-container">
                    <label>
                        First Name
                        <input 
                            value={props.info.fname} 
                            onChange={
                                (e) => {
                                    props.handleChange(0, "fname", e.target.value)
                                }
                            }
                        />
                    </label>
                    <label>
                        Last Name
                        <input 
                            value={props.info.lname} 
                            onChange={
                                (e) => {
                                    props.handleChange(0, "lname", e.target.value)
                                }
                            }
                        />
                    </label>
                </div>
                <label>
                    Email 
                    <input 
                        value={props.info.email} 
                        onChange={
                            (e) => {
                                props.handleChange(0, "email", e.target.value)
                            }
                        }
                    />
                </label>
                <label>
                    Phone
                    <input 
                        value={props.info.phone} 
                        onChange={
                            (e) => {
                                props.handleChange(0, "phone", e.target.value)
                            }
                        }
                    />
                </label>
                <label>
                    Description
                    <textarea 
                        value={props.info.desc} 
                        onChange={
                            (e) => {
                                props.handleChange(0, "desc", e.target.value)
                            }
                        }
                    ></textarea>
                </label>
            </div>
        </div>
    )
};

export default Personal;
