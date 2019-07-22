const list = document.querySelector('.list--js');

fetch('https://api.github.com/users/bartoszgoc/repos')
  .then(resp => resp.json())
  .then(resp => {
  const repos = resp;
  for(const repo of repos){
    console.log(repo.name)
  }
})
.catch(error =>{
  console.log(error);
})

console.log('test')