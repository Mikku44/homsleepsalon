import * as React from 'react'
import { Select } from '@base-ui-components/react/select'
import styles from '../assets/css/combobox.module.css'
import Flag from './Flag'

export interface Option {
  label: string
  value: string | null
  flag?: string
}

interface ComboboxProps {
  items: Option[]
  value?: string | null
  className?: string
  onChange?: (value: string | null) => void
}

export default function Combobox ({
  items,
  value,
  className,
  onChange
}: Readonly<ComboboxProps>) {
  return (
    <div className={className}>
      <Select.Root
        items={items}
        value={value}
        onValueChange={val => onChange?.(val as string | null)}
      >
        <Select.Trigger className={styles.Select}>
          {value ? (
            <Flag
              flag={value}
              className='size-8 rounded-full'
            />
          ) : <div className='size-8 rounded-full bg-gray-500 text-gray-200
           flex items-center justify-center'>?</div>}
        </Select.Trigger>

        <Select.Portal>
          <Select.Positioner className={styles.Positioner} sideOffset={8}>
            <Select.ScrollUpArrow className={styles.ScrollArrow} />
            <Select.Popup className={styles.Popup}>
              {items.map(({ label, value, flag }) => (
                <Select.Item key={label} value={value} className={styles.Item}>
                  <Select.ItemIndicator className={styles.ItemIndicator}>
                    <CheckIcon className={styles.ItemIndicatorIcon} />
                  </Select.ItemIndicator>
                  <Select.ItemText className={styles.ItemText}>
                    {flag && (
                      <div className='size-[20px] bg-white rounded-full'>
                        <Flag flag={flag} className='w-full h-full' />
                      </div>
                    )}
                    {label}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Popup>
            <Select.ScrollDownArrow className={styles.ScrollArrow} />
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

function ChevronUpDownIcon (props: Readonly<React.ComponentProps<'svg'>>) {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      stroke='currentcolor'
      strokeWidth='1.5'
      {...props}
    >
      <path d='M0.5 4.5L4 1.5L7.5 4.5' />
      <path d='M0.5 7.5L4 10.5L7.5 7.5' />
    </svg>
  )
}

function CheckIcon (props: Readonly<React.ComponentProps<'svg'>>) {
  return (
    <svg
      fill='currentcolor'
      width='10'
      height='10'
      viewBox='0 0 10 10'
      {...props}
    >
      <path d='M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z' />
    </svg>
  )
}
