console.log(3)

document.querySelector('button').addEventListener('click',getfetch)


function getfetch(){
    const choice=document.querySelector('input').value
    console.log(choice)
    const url=`https://api.nasa.gov/planetary/apod?api_key=22bglQGsog0SQOaxTYKZFLqdYUUdPTfDNrSjThSv&date=${choice}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.querySelector('img').src=data.hdurl
        document.querySelector('h3').innerText=data.explanation
})
    ;}