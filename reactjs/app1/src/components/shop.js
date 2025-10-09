import Product from "./product";

export default function Shop() {
    return (<>
        <div>
           <Product name='Abc' price='1000' weight='1 kg' description='Good Product' quantity='10' />
           <Product name='xyz' price = '500' weight='2 kg' description='Best Product for mens and womans' quantity='10' />
        </div>
    </>)
}