import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
function StateExample()
{
    //create state variable
    let [count,setCount] = useState(0);
    return (<div className='container'>
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <p>You have Invited {count} friends</p>
                        <button disabled={count==3} onClick={() => setCount(count+1)} className='btn btn-primary'>Invite Friend</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<StateExample />)