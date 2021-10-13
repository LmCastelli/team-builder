import React from 'react'

export default function TeamMemberForm(props) {

    const {values, update, submit} = props

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        
        update(name, value);
    }

    const onSubmit = e => {
        e.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Submit your team info</h2>
            <div className="form stuff">
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        maxLength="15"
                        placeholder="Enter name!"
                    />
                </label>

                <label>Email
                    <input 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        maxLength="30"
                        placeholder="Enter email"
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Choose your role --</option>
                        <option value="Finance">Finance</option>
                        <option value="Paper Salesman">Paper Salesman</option>
                        <option value="HR">HR</option>
                        <option value ="Customer Service">Customer Service</option>
                    </select>
                </label>

                <div className="submit">
                    <button>submit</button>
                </div>

            </div>
        </form>

    )
}