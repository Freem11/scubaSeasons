import { useMemo } from "react";
import Section from "../../components/section.tsx";
import styles from "./Support.module.css";



export default function Support() {
  return(
      <>
          <div className={styles.headerBackground}/>

        <Section>
          <div className={'twoCol'}>

            <div className={'sectionContent'}>
              <h2>Every underwater photo becomes part of your dive</h2>
              <div>
                <p>Instantly see where each photo fits on your dive profile, exactly when it was taken, how deep you were and what marine life you encountered</p>
                <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem', margin: '1rem 0' }}>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Exact dive</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Exact timestamp</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Exact depth</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Dive site</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Marine life</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Dive conditions</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Position on your dive profile</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        </>
  )
}
