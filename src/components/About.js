import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const About = () => {
  return (
    <div>
      <section className="text-center my-5">
        <h1 className="h1-responsive font-weight-bold my-5">Company Profile</h1>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Is a business unit that is managed by reliable and experienced
          performance in providing services engaged in laundry or laundry,
          including the concept of washing and ironing per kilogram. Has
          superior services, namely washing and maintaining premium unit
          clothing with standard fabric care and already using ionization
          technology for wet cleaning. In addition, Fresh and Clean Laundry also
          has a business line of shoe care and branded bags, as well as washing
          sofas / spring beds supported by sophisticated and modern equipment.
        </p>
        <h2 className="h1-responsive font-weight-bold my-5">
          Why Fresh and Clean Laundry?
        </h2>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="medal" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">Professional and Trusted</h5>
            <p className="grey-text mb-md-0 mb-5">
              Proven to provide laundry services for more than 10,000 customers
              with agency support spread across strategic points, making it
              easier for consumers to get Fresh and Clean Laundry services.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="mail-bulk" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">
              Online & Realtime Cashier System
            </h5>
            <p className="grey-text mb-md-0 mb-5">
              Fresh and Clean laundry follows the development of the era and
              technology, especially for cashier systems that use Android-based
              applications and can send notes via the Whatsapp (WA) platform.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="spray-can" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">
              Using Environmentally Friendly Detergents
            </h5>
            <p className="grey-text mb-md-0 mb-5">
              Accompanied by a certificate from Sucofindo, it is known that our
              detergent waste can fertilize plants and neutralize active
              chemicals in the environment.
            </p>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="users" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">1 Machine for 1 Customer</h5>
            <p className="grey-text mb-md-0 mb-5">
              To maintain the hygiene of clothes, with a certain amount of
              weight, the process of washing clothes is not mixed with other
              customers.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="tshirt" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">
              Wash according to the Washing Care Label
            </h5>
            <p className="grey-text mb-md-0 mb-5">
              In accordance with our motto that is professional kilo laundry,
              that although washing kilos we still prioritize services where the
              washing process is tailored to the washing care label logo on
              clothing. So that your clothes become more durable and awake.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="stopwatch" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">
              SPEED WARRANTY: "4 HOURS" Super Express Service
            </h5>
            <p className="grey-text mb-md-0 mb-5">
              Density of activity often forgets to wash the clothes to be worn,
              with the fast washing service is expected to help customers solve
              the problem.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default About;
