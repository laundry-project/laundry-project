import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Icon = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        The Technology We Use
      </h2>
      <MDBRow>
        <MDBCol md="2">
          <MDBIcon fab icon="html5" size="5x" className="red-text" />
          <h5 className="font-weight-bold my-4">HTML</h5>
        </MDBCol>
        <MDBCol md="2">
          <MDBIcon fab icon="css3-alt" size="5x" className="blue-text" />
          <h5 className="font-weight-bold my-4">CSS</h5>
        </MDBCol>
        <MDBCol md="2">
          <MDBIcon fab icon="js" size="5x" className="yellow-text" />
          <h5 className="font-weight-bold my-4">JAVASCRIPT</h5>
        </MDBCol>
        <MDBCol md="2">
          <MDBIcon fab icon="react" size="5x" className="blue-text" />
          <h5 className="font-weight-bold my-4">REACT</h5>
        </MDBCol>

        <MDBCol md="2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ro12vttydRIaaIXk7CYa__gVR5UeBg1XJnqyb84vrnTShaqB&s"
            style={{ width: "200px" }}
            alt=""
          />
          <br/>
          <br/>
          <h5 className="font-weight-bold my-4">EXPRESS</h5>
        </MDBCol>

        <MDBCol md="2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
            style={{ width: "100px", marginBottom:"30px" }}
            alt=""
          />
          
          <h5 className="font-weight-bold my-4">GIT</h5>
        </MDBCol>

        <MDBCol md="2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfp4wSS8UwsjT77aQIfPhs9Plr0b1JrQYBuPf8Q0mgACIu6wkb&s"
            style={{ width: "180px" }}
            alt=""
          />
          <h5 className="font-weight-bold my-4" style= {{marginBottom:"10px"}}>MONGO DB</h5>
        </MDBCol>
        <MDBCol md="2">
          <img
            src="https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F7a00cdd0-fae4-11e7-ae09-7f36f712693a.png&height=640"
            style={{ width: "100px", marginBottom:"20px"}}
            alt=""
          />
          <h5 className="font-weight-bold my-4" style= {{marginBottom:"60px"}}>MONGOOSE</h5>
          </MDBCol>
        <MDBCol md="2">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
            style={{ width: "140px" }}
            alt=""
          />
          <h5 className="font-weight-bold my-4">NODE JS</h5>
        </MDBCol>
        <MDBCol md="2">
          <img
            src="https://camo.githubusercontent.com/31581dcfa3245b72594ba0803b120210852186be/68747470733a2f2f6d64626f6f7473747261702e636f6d2f696d672f4d61726b6574696e672f67656e6572616c2f6c6f676f2f687567652f6d64622d72656163742e706e67"
            style={{ width: "180px" , marginTop:"10px"}}
            alt=""
          />
          <h5 className="font-weight-bold my-4">MDB REACT</h5>
        </MDBCol>
        <MDBCol md="2">
          <MDBIcon fab icon="github" size="5x" className="black-text" />
          <h5 className="font-weight-bold my-4">GITHUB</h5>
        </MDBCol>
        <MDBCol md="2">
          <img
            src="https://react.semantic-ui.com/logo.png"
            style={{ width: "70px"}}
            alt=""
          />
          <h5 className="font-weight-bold my-4">SEMANTIC</h5>
        </MDBCol>

      </MDBRow>
    </section>
  );
};

export default Icon;
