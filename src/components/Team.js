import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import LogoItang from '../components/images/itang.jpg';
import LogoDian from '../components/images/dian.jpg';
import LogoRoby from '../components/images/roby.jpg';
import LogoTaufiq from '../components/images/taufiq.jpg';


const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={LogoItang}
                className="z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Muhammad Iqbal</h5>
              <p className="text-uppercase blue-text">Leader Team | Full Stack Developer</p>
              {/* <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p> */}
              <ul className="list-unstyled mb-0">
              <a href="https://www.instagram.com/iqbaliiii/" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-iqbal-488335197/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
                
                <a href="https://github.com/iqbalmmm" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={LogoDian}
                className="z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Dian Puspita Sari</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              {/* <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p> */}
              <ul className="list-unstyled mb-0">
              <a href="https://www.instagram.com/dianpus86/" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/dian-puspita-9b9735199/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
                
                <a href="https://github.com/Dianpuspitasari86" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={LogoRoby}
                className="z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Roby Afrizal Palmendha</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              {/* <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p> */}
              <ul className="list-unstyled mb-0">
              <a href="https://www.instagram.com/robypalmendha/" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/roby-afrizal-90a630198/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
                
                <a href="https://github.com/robyafrizal" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={LogoTaufiq}
                className="z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Taufiq Hidayat</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              {/* <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p> */}
              <ul className="list-unstyled mb-0">
              <a href="https://www.instagram.com/taufikkk01/" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/taufik-hidayat-98538012b/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
                
                <a href="https://github.com/taufiq66645" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;