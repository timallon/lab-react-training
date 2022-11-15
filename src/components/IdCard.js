import React from 'react'; 

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
    return (
        <div className="Id">
            <div>
                <img src = {picture}/>
            </div>
            <div className="PersonalDetails">
                <div>
                    <b>First name: </b> { firstName }
                </div>
                <div>
                    <b>Last name: </b> { lastName }
                </div>
                <div>
                    <b>Gender: </b> { gender }
                </div>
                <div>
                    <b>Height: </b> { height/100 }m
                </div>
                <div>
                    <b>Birth: </b> { birth.toDateString() }
                </div>
            </div>
        </div>
    );
}

export default IdCard;