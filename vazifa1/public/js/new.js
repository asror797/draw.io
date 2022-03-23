const Name = document.getElementById('name'),
      surname = document.getElementById('surname'),
      age = document.getElementById('age'),
      job = document.getElementById('job'),
      create = document.getElementById('create')


create.addEventListener('click',()=> {

   let data = {
      name:Name.value,
      surname:surname.value,
      age:age.value,
      job:job.value
   }

   console.log(data);


   fetch('http://localhost:5000/new',{
      method:'POST',
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
   }).then(res => console.log(res))
})

