import ItemProduct from "../features/product/ItemProduct";

const Shop = () => {
  return (
    <div className="container xl:max-w-screen-xl pl-4 pr-4 md:pl-0 md:pr-0 ">
      <div className="">
        <div className="grid grid-cols-5 gap-5 mb-10 mt-5 items-start">
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        
          <ItemProduct />        

        </div>
      </div>
    </div>
  );
};

export default Shop;
