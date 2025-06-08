import Section from "../../components/section.tsx";
import styles from "./FAQ.module.css";
import Tabs from "../../components/tabs/Tabs.tsx";
import Collapsible from "../../components/collapsible/Collapsible.tsx";
import DeleteAccountMobile from "./sections/DeleteAccountMobile.tsx";
import DeleteAccountDesktop from "./sections/DeleteAccountDesktop.tsx";

const faqs = [
    {
        question: 'What is Scuba SEAsons?',
        answer: 'Scuba SEAsons is a comprehensive platform for divers to explore marine life, find dive spots, and connect with a global community of ocean explorers. Discover which marine life is swimming nearby and learn the best locations and times to encounter them on your next dive.'
    },
    {
        question: 'How do I delete my account and personal data?',
        answer: (
          <div>
            <p>{'You can delete your Scuba SEAsons account and all associated personal data by following these steps:'}</p>
            <Tabs
              tabs={[
                {
                  id: 'mobile',
                  label: 'Mobile',
                  content: <DeleteAccountMobile />
                },
                {
                  id: 'desktop',
                  label: 'Desktop',
                  content: <DeleteAccountDesktop />
                }
              ]}
            />
          </div>
        )
    }

  // how to add divesite
  // how to submit a photo
  // how to request partner
]

export default function FAQ() {
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
