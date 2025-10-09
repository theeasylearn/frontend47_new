import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './player.css';
//functional component
function Player(props) {
    return (<a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 align-items-center">
            <img src={props.photo} className="player-img" />
            <div>
                <h5 className="mb-1 fw-bold">{props.name} {props.special}</h5>
                <small>{props.type}</small>
            </div>
        </div>
    </a>)
}
function Team() {
    return (<div className="container mt-4">
        <h2>England vs India, 5th Test - Live Cricket</h2>
        <p>Series: India tour of England, 2025 | Venue: Kennington</p>
        <h3>ENG</h3>
        <div className="list-group">
            <Player name='K L Rahul' photo='https://www.picsum.photos/100?random=2' type='Right Hand Batter' />
            <Player name='S. Gill' photo='https://www.picsum.photos/100?random=3' type='Right Hand Batter' special='Captain' />
            <Player name='R. Pant' photo='https://www.picsum.photos/100?random=34' type='WK Left Hand Batter' />
        </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Team />)