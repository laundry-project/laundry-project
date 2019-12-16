import React from "react";
import Team from "./Team";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Icon from "./Icon";
import ProfileUsers from "./ProfileUsers";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <ProfileUsers />
      <Team />
      <Icon />
      <Footer />
    </div>
  );
}
