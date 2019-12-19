import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import axios from "axios";

import logoKemang from "../components/images/kemang.png";
import logoTebet from "../components/images/tebet.jpeg";
import logoGrogol from "../components/images/grogol.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookLaundry from "./BookLaundry";
import { ServiceProvider } from "./ServiceContext";
import { URI } from "../helpers/envPath";

const FindLaundry = () => {
  const [laundryPlaces, setLaundryPlaces] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(URI + "/laundry")
      .then(result => {
        setLaundryPlaces(result.data.result);
      })
      .catch(error => {
        if (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      });
  }, []);
  return (
    <div>
      <Navbar />
      <section className="my-5">
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          Find the Nearest Fresh and Clean Laundry Branch
        </h1>
        <MDBRow className="mx-auto">
          {error && <div>Cannot Fetch Laundry Places</div>}
          {laundryPlaces &&
            laundryPlaces.map(laundry => (
              <MDBCol md="4" className="md-0 mb-5 text-center ">
                <MDBRow>
                  <MDBCol lg="2" md="3" size="2"></MDBCol>
                  <MDBCol lg="10" md="9" size="10">
                    <img
                      src={`${URI}/${laundry.imagePath}`}
                      className=" z-depth-1 img-fluid"
                      alt="Sample avatar"
                      style={{ height: "300px", width: "600px" }}
                    />
                    <h2 className="font-weight-bold">{laundry.name}</h2>
                    <p className="grey-text">
                      Address : {laundry.address}
                      <br />
                      Telepon : {laundry.telephone}
                    </p>
                    <ServiceProvider>
                      <BookLaundry laundryName={laundry.name} />
                    </ServiceProvider>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            ))}
        </MDBRow>
      </section>
      <Footer />
    </div>
  );
};

export default FindLaundry;
