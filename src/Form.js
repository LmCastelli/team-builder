import React from 'react'

export default function TeamMemberForm(props) {

    const {values, update, submit} = props

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        
        update(name, value);
    }


    const onSubmit = e => {
        e.preventDeafault();
        submit();
    }


    return (
        <form onSubmit={submit}>
            <h2>Submit your team info</h2>
            <div className="form stuff">
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        maxLength="15"
                        placeholder="Enter your name!"
                    />
                </label>

                <label>Email
                    
                </label>
            </div>
        </form>

    )
}