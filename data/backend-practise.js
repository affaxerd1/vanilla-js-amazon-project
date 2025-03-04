const backend = new XMLHttpRequest();

backend.addEventListener('load', ()=>{
    consolespe.log(Response);
    
})
backend.open('GET', 'https://supersimplebackend.dev');
backend.send();