import React from "react";
import "./style.css";
import Navbar from "../../components/Header/Header";
function AboutSection(userData, logout) {
  return (
    <section className="about-section">
      <Navbar userData={userData} logout={logout} />
      <h2 className="section-title">BNONI SWAY</h2>
      <div className="hero">
        <div className="hero-desc">
          <p className="section-description">
            <h4>Main</h4>
            <h3>who we are</h3>
            The company of reasons was named after its purpose, which is to take
            into account the reasons for life's affairs. The Bnoni Sway brand is
            a registered Saudi trademark that specializes in enhancing fertility
            naturally and safely, as well as in the field of care, perfumery,
            and dietary supplements.
          </p>
          <button className="explore-button">Store</button>
        </div>

        <div className="logo-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/c146/e61d/9816db2d3585942d448ec841f6caf700?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeHi5mjjG9VoUAfrthYDkCRVvCTrYDkaxhC-zaCUtaxXnaISQalYtULZPkxUZcieNmS2sEhiq05GmHQmsgDvGMVDXqe9tf9g0TmCrX-8wq~n9WHkSb~9znAy9dk1EMzFWixv54L3xs0V3fbUIPgw5pXmnqlwUpNeqLGjIu8vnOePCSNk5K5gu1TxEWJEdCISn2C-0iWPnaf18tbeUUk-W~ncxvI6NCYMvHdHEOjifkVYRYCE3H7FaFQY7ytOefFqedLqF1Xm0yjEu5m6pDPGB0jzQmjdkrit3UhS-axaGZq4-hRo93wp119zK3XEHMxyl5JJJ6YMyxboHqJbycaFVQ__"
            alt="BNONI SWAY Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
