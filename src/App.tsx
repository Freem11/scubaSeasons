import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Section from "./components/section";
import sealifeImage from "./assets/sealife.png";
import contributeImage from "./assets/contribute.png";
import userProfileImage from "./assets/user-profile.png";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="spacer"></div>
        <Section>
          <div className="twoCol">
            <img
              src={sealifeImage}
              alt="Scuba SEAsons sea life map."
              className="image"
            />
            <div className="sectionContent">
              <h2>Find any sea creature, anywhere</h2>
              <div>
                <p>
                  The map automatically pulls sea life for the area you are
                  viewing
                </p>
                <p>
                  Select a sea creature to see where it has been spotted and
                  view it's seasonal trends for that area
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="twoCol">
            <div className="sectionContent">
              <h2>Help us grow, with your own contributions</h2>
              <div>
                <p>
                  Add your favorite local dive sites to our list of over 10k,
                  using one of our three options
                </p>
                <p>
                  Show us why we should dive with you by contributing your sea
                  life sightings
                </p>
              </div>
            </div>
            <img
              src={contributeImage}
              alt="Scuba SEAsons forms to add new sea creatures and dive sites."
              className="image"
            />
          </div>
        </Section>
        <Section>
          <div className="twoCol">
            <img
              src={userProfileImage}
              alt="Scuba SEAsons user profile."
              className="image userProfileImage"
            />
            <div className="sectionContent">
              <h2>Tell your diving story</h2>
              <div>
                <p>
                  Every Dive site and sea life sighting you add will be shown on
                  every photo and site
                </p>
                <p>
                  All your sea life contributions are displayed on your profile,
                  showing most recent, all the way to the start
                </p>
              </div>
            </div>
          </div>
        </Section>
        <div className="spacer"></div>
      </main>

      <Footer />
    </>
  );
}

export default App;
