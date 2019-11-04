import React from 'react'

const People = ( props ) => {
    return (
    <div>
        {props.data.map((people) => (
        <div key={people.id}>
        <div className="card">
        <div class="card-header">{people.name}</div>
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{people.age}</h6>
            <p className="card-text">{people.gender}</p>
            </div>
        </div>
        <br />
        </div>
        ))}
    </div>
    )
};

export default People