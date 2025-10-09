import CartItem from "./cartitem";
export default function Cart() {
    return (<div className="container mt-4">
        <div className="cart-header text-center">
            <h2>Your Cart</h2>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <div className="card mb-3">
                    <div className="card-body">
                        <CartItem name='IPhone' photo='http://picsum.photos/100?random=1' description='apple smartphone' price='100000' quantity='1' />
                        <CartItem name='Macbook air' photo='http://picsum.photos/100?random=2' description='apple laptop' price='125000' quantity='1' />
                        <CartItem name='Airpods' photo='http://picsum.photos/100?random=3' description='apple earbuds' price='25001' quantity='1' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
