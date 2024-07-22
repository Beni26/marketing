import CheckoutForm from "../features/Checkout/CheckoutForm";
import UseCheckOrder from "../hooks/UseCheckOrder";

const Checkout = () => {
  return (
    <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0 mt-10">
      <UseCheckOrder>
        <div className="grid grid-cols-5 gap-10">
          <CheckoutForm />
        </div>
      </UseCheckOrder>
    </div>
  );
};
export default Checkout;
