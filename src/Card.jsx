import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card shadow-2xl transition border-3 rounded-4  duration-500 ease-in-out hover:border-red-700 transform hover:-translate-y-1 hover:scale-110" style={{width: 18+'rem'}}>
  <img src={props.imgsrc} className="card-img-top" alt="image not found"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://Rajaraj.com" target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}

export default Card
