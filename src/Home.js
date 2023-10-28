import React from "react";

function Home(){
    return(
        <div className="container mt-4">
            <div className="row">
               <div className="col-md-4 d-flex">
                <div className="card mb-4 flex-fill">
                    <img src="lip2.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h4 className="card-title">Lipgloss</h4>
                        <p className="card-text" >Shinny and glossy finish </p>
                        <p className="card-text">Rating:⭐⭐⭐⭐⭐</p> 
                    </div>
                </div>
               </div>

               <div className="col-md-4 d-flex">
                <div className="card mb-4 flex-fill">
                    <img src="lip1.jpeg" className="card-img-top"/>
                    <div className="card-body">
                        <h4 className="card-title">Matte Lipstick</h4>
                        <p className="card-text" >Transfer proof </p>
                        <p className="card-text">Rating:⭐⭐⭐⭐</p> 
                    </div>
                </div>
               </div>

               <div id="img" className="col-md-4 d-flex">
                <div className="card mb-4 flex-fill">
                    <img src="lip3.jpeg" className="card-img-top"/>
                    <div className="card-body">
                        <h4 className="card-title">Lip Liner</h4>
                        <p className="card-text" >Defines your lip </p>
                        <p className="card-text">Rating:⭐⭐⭐</p> 
                    </div>
                </div>
               </div>

               

            </div>

        </div>
    );
}

export default Home;