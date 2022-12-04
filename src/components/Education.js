import deleteSvg from '../assets/delete.svg'
import addSvg from '../assets/add.svg'

const Education = (props) => {
    return(
        <div className="edu section">
            <h2 className="section-title">
                Education
            </h2>
            {
                props.info.map( (item, index) => {
                    return(
                        <div key={index} className="section-child">
                            <label>
                                School
                                    <input 
                                        value={item.school} 
                                        onChange={
                                            (e) => {
                                                props.handleChange(1, "school", e.target.value, index)
                                            }
                                        }
                                    />
                            </label>
                            <label>
                                Title of Study
                                    <input 
                                        value={item.title} 
                                        onChange={
                                            (e) => {
                                                props.handleChange(1, "title", e.target.value, index)
                                            }
                                        }
                                    />
                            </label>
                            <div className="hori-container">
                                <label>
                                    From
                                    <input 
                                        value={item.fdate} 
                                        onChange={
                                            (e) => {
                                                props.handleChange(1, "fdate", e.target.value, index)
                                            }
                                        }
                                    />
                                </label>
                                <label>
                                    To
                                    <input 
                                        value={item.tdate} 
                                        onChange={
                                            (e) => {
                                                props.handleChange(1, "tdate", e.target.value, index)
                                            }
                                        }
                                    />
                                </label>
                            </div>
                            <div className="btn">
                                <button 
                                    className="remove-btn" 
                                    onClick={
                                        () => {
                                            props.handleRemove(1, index)
                                        }
                                    }
                                >
                                    <img src={deleteSvg} alt="delete.svg" />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="btn">
                <button 
                    className="add-btn" 
                    onClick={
                        () => {
                            props.handleAdd(1)
                        }
                    }
                >
                    <img src={addSvg} alt="add.svg" />
                </button>
            </div>
        </div>
    )
};

export default Education;