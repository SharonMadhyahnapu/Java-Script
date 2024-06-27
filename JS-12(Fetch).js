// fetch("https://fakestoreapi.com/products")
// .then((res)=>res.json())
// .then((json)=>console.log(json));


function myFetch(endPoint, obj) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        const response = new Response(
          JSON.stringify({
            message: "Success",
            data: JSON.parse(xhr.response),
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        resolve(response);
      };
  
      xhr.onerror = () => {
        reject("This is failing");
      };
  
      xhr.open(obj?.method || "GET", endPoint);
  
      if (!obj?.headers || Object.keys(obj?.headers).length === 0) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }
  
      for (const header in obj?.headers) {
        xhr.setRequestHeader(header, obj?.headers[header]);
      }
  
      xhr.send(obj?.body);
    });
  }
  
  console.log("this is api starting");
  
  myFetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => console.log(res));
  
  console.log("this is api ending");