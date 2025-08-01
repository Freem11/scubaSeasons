import Hero from "../components/hero";
import Section from "../components/section";
import { IKImage } from "imagekitio-react";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={'spacer'}></div>
      <Section>
        <div className={'twoCol'}>
          <IKImage
            urlEndpoint="https://ik.imagekit.io/0xoaf9sms"
            path="/sealife.png"
            alt={'Scuba SEAsons sea life map.'}
            className={'image'}
            transformation={[{
              width: 552,
              height: 380
            }]}
          />
          <div className={'sectionContent'}>
            <h2>Explore a world of sea life</h2>
            <div>
              <p>
                Find out which marine life is swimming nearby, and learn the
                best locations and times to encounter them on your next dive.
                It’s all just a tap away!
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className={'twoCol'}>
          <div className={'sectionContent'}>
            <h2>Join a global community of divers</h2>
            <div>
              <p>
                Join a global network of ocean explorers! Contribute your
                favorite dive spots to our growing map of 10,000+ locations,
                share your underwater encounters, and help others discover
                hidden gems.
              </p>
            </div>
          </div>
          <IKImage
            urlEndpoint="https://ik.imagekit.io/0xoaf9sms"
            path="/contribute.png"
            alt={'Scuba SEAsons forms to add new sea creatures and dive sites.'}
            className={'image'}
            transformation={[{
              width: 552,
              height: 380
            }]}
          />
        </div>
      </Section>
      <Section>
        <div className={'twoCol'}>
          <IKImage
            urlEndpoint="https://ik.imagekit.io/0xoaf9sms"
            path="/user-profile.png"
            alt={'Scuba SEAsons user profile.'}
            className={'image userProfileImage'}
            transformation={[{
              width: 552,
              height: 380
            }]}
          />
          <div className={'sectionContent'}>
            <h2>Document your diving adventures</h2>
            <div>
              <p>
                Turn every dive into a lasting memory. Keep a personal log of
                your underwater adventures, track the marine species you
                encounter, and upload stunning photos to share with the
                community.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <div className={'spacer'}></div>
    </main>
  )
}
