import { useMemo } from "react";

import Collapsible from "../../components/collapsible/Collapsible.tsx";
import Section from "../../components/section.tsx";
import styles from "./FAQ.module.css";

import DeleteAccount from "./sections/DeleteAccount.tsx";
import AddDiveSite from "./sections/AddDiveSite.tsx";
import AddPhoto from "./sections/AddPhoto.tsx";
import BecomePartner from "./sections/BecomePartner.tsx";

export default function FAQ() {
  const faqs = useMemo(() => (
    [
      {
        question: "What is Scuba SEAsons?",
        answer: "Scuba SEAsons is a comprehensive platform for divers to explore marine life, find dive spots, and connect with a global community of ocean explorers. Discover which marine life is swimming nearby and learn the best locations and times to encounter them on your next dive."
      },
      {
        question: "How do I delete my account and personal data?",
        answer: <DeleteAccount />
      },
      {
        question: "How do I add a dive site?",
        answer: <AddDiveSite />
      },
      {
        question: "How do I submit a photo of a sea creature sighting?",
        answer: <AddPhoto />
      },
      {
        question: "How do I become a partner?",
        answer: <BecomePartner />
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
