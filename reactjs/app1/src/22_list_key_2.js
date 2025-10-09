import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
function Team(props) 
{

    return (<div className="col-lg-3">
        <div className="card">
            <div className="card-body">
                <div className='row'>
                    <div className='col'>
                        <img src={props.flagUrl} className="img-fluid" />
                    </div>
                    <div className='col'>
                        <p className='fs-6'>{props.name}</p>
                        <p className='fst-bold'>{props.captain}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
function AsiaCup(props) {
    let teams = props.teams;
    return (<div className='container'>
        <div className="row">
           {teams.map((item,index) => {
                return <Team key={index} name={item.name} captain={item.captain} flagUrl={item.flagUrl} />
           })}
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
//create list of object
const list = [
    {
        name: 'Afghanistan',
        captain: 'Not Declared', // Squad yet to be officially announced as of Aug 22, 2025 [19]
        flagUrl: 'https://flagcdn.com/af.svg'
    },
    {
        name: 'Bangladesh',
        captain: 'Not Declared', // Squad yet to be officially announced as of Aug 22, 2025 [19]
        flagUrl: 'https://flagcdn.com/bd.svg'
    },
    {
        name: 'Hong Kong',
        captain: 'Yasim Murtaza', // Confirmed in the official squad announcement [19]
        flagUrl: 'https://flagcdn.com/hk.svg'
    },
    {
        name: 'India',
        captain: 'Suryakumar Yadav', // Confirmed by BCCI on August 19, 2025 [20][21][22]
        flagUrl: 'https://flagcdn.com/in.svg'
    },
    {
        name: 'Oman',
        captain: 'Not Declared', // Squad yet to be officially announced for Asia Cup 2025 [19]
        flagUrl: 'https://flagcdn.com/om.svg'
    },
    {
        name: 'Pakistan',
        captain: 'Not Declared', // Squad yet to be officially announced for Asia Cup 2025 [19]
        flagUrl: 'https://flagcdn.com/pk.svg'
    },
    {
        name: 'Sri Lanka',
        captain: 'Not Declared', // Squad yet to be officially announced for Asia Cup 2025 [19]
        flagUrl: 'https://flagcdn.com/lk.svg'
    },
    {
        name: 'United Arab Emirates',
        captain: 'Not Declared', // Squad yet to be officially announced for Asia Cup 2025 [19]
        flagUrl: 'https://flagcdn.com/ae.svg'
    }
];

root.render(<AsiaCup teams={list} />)