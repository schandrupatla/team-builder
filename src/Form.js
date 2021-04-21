import React from 'react'

export default function Form(props){
     const {values, update, submit} =props
    // const{username, email, role}= props;

const onChange = evt =>{
    const {name, value} = evt.target
    update(name, value);
}
const onSubmit = evt=>{
    evt.preventDefault();
    submit(evt);
}

//return
return (

<form className='form container'onSubmit={onSubmit} >
 <div className='form-group inputs'>
    <label>Username
        <input
        type="text"
        value={values.username}
         onChange={onChange}
        name="username"
        placeholder="type a username..."
        maxLength="30"
        />
    </label>

    <label>Email
        <input
        type='text'
        value={values.email}
        onChange={onChange}
        name="email"
        placeholder="type an email..."
        />
    </label>
    
    <label>Role
        <select  value={values.role} name="role" onChange={onChange}>
        <option value="">-- Select a Role --</option>
            <option value="Student">Student</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Alumni">Alumni</option>
        </select>
    </label>
    <div className='submit'>
        <button>submit </button>
    </div>
 </div>
</form>

)
}