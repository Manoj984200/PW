async function handleApi() {

   try {

      const response = await fetch("https://jsonplaceholder.typicode.com/users"); // copy this url of API and paste in browser to see the data in it
// below line is used to convert the fetched data in array so that other functions of array can be applied 
      const data = await response.json();

      const table = document.getElementById("collection");

      data.map((item) => {

         table.innerHTML += `  <!-- the symbol after += is not ' this symbol is on ~ key check on keyboard-->
         <tr>
           <td>${item.id}</td> <!--// $ is used to print value of variable --> 
           <td>${item.name}</td>
           <td>${item.username}</td>
           <td>${item.email}</td>
         </tr>`;

      });

   } catch(error) {

      console.log(error);

   }

}

handleApi();