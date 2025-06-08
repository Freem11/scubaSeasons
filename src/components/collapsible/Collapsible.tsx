import { useState, ReactNode, useRef, useEffect } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import styles from './Collapsible.module.css';

interface CollapsibleProps {
  title: string | ReactNode
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export default function Collapsible({ 
  title, 
  children, 
  defaultOpen = false, 
  className = '' 
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }

    updateHeight()

    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        updateHeight()
      })

      resizeObserver.observe(contentRef.current)

      // Set up MutationObserver to catch DOM changes
      const mutationObserver = new MutationObserver(() => {
        // Use setTimeout to ensure DOM has updated
        setTimeout(updateHeight, 0)
      })

      mutationObserver.observe(contentRef.current, {
        childList: true,
        subtree: true,
        attributes: true
      })

      return () => {
        resizeObserver.disconnect()
        mutationObserver.disconnect()
      }
    }
  }, [children, isOpen])

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between ${styles.trigger}`}
      >
        <div className={'font-medium text-gray-900'}>
          {title}
        </div>
        <div className={styles.iconWrapper}>
          <ChevronDownIcon 
            size={20} 
            className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`} 
          />
        </div>
      </button>
      
      <div 
        className={styles.contentWrapper}
        style={{
          height: isOpen ? `${contentHeight}px` : '0px'
        }}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
} 