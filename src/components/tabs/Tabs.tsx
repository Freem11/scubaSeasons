import { useState, useRef, useEffect } from 'react'
import styles from './Tabs.module.css'

type Tab = {
  id: string
  label: string
  content: React.ReactNode
}

type TabsProps = {
  tabs: Tab[]
  defaultTab?: string
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  const [isContentVisible, setIsContentVisible] = useState(true)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabsListRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return

    setIsContentVisible(false)

    setTimeout(() => {
      setActiveTab(tabId)
      setIsContentVisible(true)
    }, 150)
  }

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = tabs.findIndex(tab => tab.id === activeTab)
      const activeTabElement = tabRefs.current[activeIndex]
      
      if (activeTabElement && tabsListRef.current) {
        const tabsListRect = tabsListRef.current.getBoundingClientRect()
        const activeTabRect = activeTabElement.getBoundingClientRect()
        
        setIndicatorStyle({
          left: activeTabRect.left - tabsListRect.left,
          width: activeTabRect.width
        })
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTab, tabs])

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsList} ref={tabsListRef}>
        <div 
          className={styles.indicator}
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: indicatorStyle.width
          }}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={`${styles.tabContent} ${isContentVisible ? styles.fadeIn : styles.fadeOut}`}>
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
} 