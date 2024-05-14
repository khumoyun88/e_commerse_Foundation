        let container = document.querySelector(".container")

        



        async function fetchProducts(){
            const response = await fetch("https://fakestoreapi.com/products");
            const products =await response.json();

            return products
        }

        async function init(){
            const products = await fetchProducts()

            render(products)
        }

        function render(products){

            products.forEach(function(product) {
                let img= document.createElement("img")
                img.src = product.image
                container.append(img)

                let p = document.createElement("p")
                p.textContent = product.title
                container.append(p)
                



            });

        }




        init()

