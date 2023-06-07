import React, {useState} from 'react'

function AddEmployee() {

const [data,setData] = useState({
name: '',
email: '',
password:'',
address:'',
image:''

})

const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new formdata();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("image", data.image);
    axios.post('http://localhost:8081/create', formdata)
    .then( res => console.log(res))
    .catch(err => console.log(err));
}

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
    <h2>Add Employee</h2>
    <form class="row g-3 w-50" onSubmit={handleSubmit}>
       <div class="col-12">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder='Nome' autoComplete='off'/>
       </div>
        <div class="col-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder='Email' autoComplete='off'
            onChange={e => setData({...data, email: e.target.value})}/>
        </div>
        <div class="col-12">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder='Senha'
              onChange={e => setData({...data, password: e.target.value})}/>
        </div>
        {/* <div class="col-12">
            <label for="inputSalary" class="form-label">Salary</label>
            <input type="text" class="form-control" id="inputSalary" placeholder="Enter Salary" autoComplete='off'/>
        </div>*/}
        <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="address" autoComplete='off'
              onChange={e => setData({...data, address: e.target.value})}/>
        </div>
        <div class="col-12 mb-3">
            <label class="form-label" for="inputGroupFile01">Imagem</label>
            <input type="file" class="form-control" id="inputGroupFile01"
            onChange={e => setData({...data, image: e.target.files[0]})}/>     
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Criar</button>
        </div>
    </form>
</div>

  )
}

export default AddEmployee