let url="http:/"+"/localhost:8080/test.json";
let data;
fetch(url)
.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

return response.json(); })
  .then((text) =>
      data=text
     )
  
  .catch((error) => 
      console.log(error))
      
      
      
console.log(url)
let b={
    a:1
}
console.log(JSON.stringify(b))

const asyncPostCall = async () => {
            try {
                const response = await fetch(url, {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({
             // your expected POST request payload goes here
                     title: "My post title",
                     body: "My post content."
                    })
                 });
                 const data = await response.json();
              // enter you logic when the fetch is successful
                 console.log(data);
               } catch(error) {
             // enter your logic for when there is an error (ex. error toast)

                  console.log(error)
                 } 
            }

asyncPostCall()