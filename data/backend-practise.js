const backend = new XMLHttpRequest();

backend.addEventListener('load', ()=>{
    console.log(Response);
    
})
backend.open('GET', 'https://supersimplebackend.dev');
backend.send();