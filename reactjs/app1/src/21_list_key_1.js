import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
function AsiaCup(props)
{
    let teams = props.teams;
    return (<div className='container'>
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <h5>Asia Cup Team Names</h5>
                        <ul className='list-group'>
                            {teams.map((item,index)=> {
                                return <li  key={index} className='list-group-item'>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
//create list
var list = ['Afghanistan', 'Bangladesh', 'Hong Kong', 'India', 'Oman', 'Pakistan', 'Sri Lanka', 'United Arab Emirates'];
root.render(<AsiaCup teams={list} />)