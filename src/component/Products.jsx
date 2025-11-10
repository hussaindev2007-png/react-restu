 import ProductCard from "./ProductCard";


function Products({ products =[]  ,selectedRating  }) {

 
  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg py-10">
        No matching products
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}
             selectedRating={selectedRating}
         />
        
      ))}

      <div>
        
      </div>
        
    </div>
  );
}


export default Products




