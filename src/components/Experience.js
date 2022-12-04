import deleteSvg from '../assets/delete.svg'
import addSvg from '../assets/add.svg'

const Experience = (props) => {
    return(
        <div className="exp section">
            <h2 className="section-title">
                Experience
            </h2>
            {
                props.info.map( (item, index) => {
                    return(
                        <div key={index} className="section-child">
                            <label>
                                Company
                                <input 
                                    value={item.company} 
                                    onChange={
                                        (e) => {
                                            props.handleChange(2, "company", e.target.value, index)
                                        }
                                    }
                                />
                            </label>
                            <label>
                                Position
                                <input 
                                    value={item.title} 
                                    onChange={
                                        (e) => {
                                            props.handleChange(2, "title", e.target.value, index)
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
                                                props.handleChange(2, "fdate", e.target.value, index)
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
                                                props.handleChange(2, "tdate", e.target.value, index)
                                            }
                                        }
                                    />
                                </label>
                            </div>
                            <label>
                                Description
                                <textarea 
                                    value={item.desc} 
                                    onChange={
                                        (e) => {
                                            props.handleChange(2, "desc", e.target.value, index)
                                        }
                                    }
                                ></textarea>
                            </label>
                            <div className="btn">
                                <button 
                                    className="remove-btn" 
                                    onClick={
                                        () => {
                                            props.handleRemove(2, index)
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
                            props.handleAdd(2)
                        }
                    }
                >
                    <img src={addSvg} alt="add.svg" />
                </button>
            </div>
        </div>
    )
}

export default Experience;