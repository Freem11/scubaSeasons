import { useMemo } from "react";

import Collapsible from "../../components/collapsible/Collapsible.tsx";
import Section from "../../components/section.tsx";
import styles from "./FAQ.module.css";

import DeleteAccount from "./sections/DeleteAccount.tsx";
import AddDiveSite from "./sections/AddDiveSite.tsx";
import AddPhoto from "./sections/AddPhoto.tsx";
import AddDiveSiteReview from "./sections/AddDiveSiteReview.tsx";
import CreateTrip from "./sections/CreateTrip.tsx";
import BecomePartner from "./sections/BecomePartner.tsx";
import WhyAddSite from "./sections/WhyAddSite.tsx";
import WhyAddPhoto from "./sections/WhyAddPhoto.tsx";
import WhyAddSiteReview from "./sections/WhyAddSiteReview.tsx";
import WhyPartner from "./sections/WhyPartner.tsx";
import Preamble from "./sections/PreAmble.tsx";
import WhyLeverage from "./sections/WhyLeverage.tsx";


export default function FAQ() {
  const faqs = useMemo(() => (
    [
      {
        question: "What is Scuba SEAsons?",
        answer: <Preamble/>
      },
      {
        question: "Why should I add my dive sites to Scuba SEAsons?",
        answer: <WhyAddSite />
      },    
      {
        question: "How do I add a dive site?",
        answer: <AddDiveSite />
      },
      {
        question: "Why should I contribute my sea life sightings to Scuba SEAsons?",
        answer: <WhyAddPhoto />
      },
      {
        question: "How do I submit my sea creature sighting photos?",
        answer: <AddPhoto />
      },
      {
        question: "Why should I add reviews to dive sites in Scuba Seasons?",
        answer: <WhyAddSiteReview />
      },
      {
        question: "How do I add a review of a dive site?",
        answer: <AddDiveSiteReview />
      },
      {
        question: "I run / work at a dive centre, why should I upgrade my account to a Partner Account?",
        answer: <WhyPartner />
      },
      {
        question: "How do I upgrade to a partner account?",
        answer: <BecomePartner />
      },
      {
        question: "How can a Partner Account use sea life data and diver contributions to promote dive trips?",
        answer: <   WhyLeverage />
      },
      {
        question: "I run / work at a dive centre, how can I promote my dive trips with Scuba Seasons?",
        answer: <CreateTrip />
      },
      {
        question: "How do I delete my account and personal data?",
        answer: <DeleteAccount />
      }
    ]), []);
  
  const createSlug = (question: string) => {
    return question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }

  return (
    <div className={styles.faqPage}>
      <div className={styles.headerBackground}/>
      <Section>
        <div className={styles.faqHeader}>
          <h1>{'Frequently Asked Questions'}</h1>
          <p>{'Find answers to common questions about Scuba SEAsons'}</p>
        </div>
      </Section>

      <Section>
        <div className={styles.faqContent}>
          {faqs.map((faq, index) => {
            const questionId = createSlug(faq.question)
            return (
              <Collapsible
                key={index}
                title={
                  <a href={`#${questionId}`} className={styles.faqAnchor}>
                    {faq.question}
                  </a>
                }
                className={styles.faqItem}
              >
                <div className={styles.faqAnswer}>{faq.answer}</div>
              </Collapsible>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
