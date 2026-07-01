// const products = document.getElementById("products");

// async function getProducts() {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products?limit=20");
//         const data = await response.json();

//         data.forEach((item) => {
//             products.innerHTML += `
//                 <div class="card">
//                     <h3>${item.title}</h3>
//                     <p><strong>Price:</strong> $${item.price}</p>
//                     <p><strong>Category:</strong> ${item.category}</p>
//                 </div>
//             `;
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// getProducts();




let task()=>{
    let data= await fetch("")
    let res= await data.json()
    res.map((e)=>{
        let {id,title,category,image,description,price}=e
    })
}