import React,{useState, useEffect, useContext} from 'react';
import {UserContext} from '../../App';

const Profile = () => {
    const [mypics, setPics] = useState([]);
    const {state, dispatch} = useContext(UserContext);

    console.log(state)
    useEffect(() => {
        fetch('/api/myPosts', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
        .then(res=>res.json())
        .then(result => {
            setPics(result.myPosts)
        })
    },[]);
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img className="profile-pic" src={state?state.pic:""} />
                </div>
                <div>
                    <h4>{state?state.name:'Loading'}</h4>

                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h5>{mypics.length} posts</h5>
                        <h5>{state?state.followers.length:'0'} followers</h5>
                        <h5>{state?state.following.length:'0'} following</h5>
                    </div>
                </div>

            </div>
            
            <div className="gallery">
            {mypics.map(item => 
                <img key={item._id} className="item" src={item.url} />
            )}
            </div>
        </div>

    );
}


export default Profile;