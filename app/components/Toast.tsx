import React from 'react'
import { Toast } from '@base-ui-components/react/toast'
import styles from '../assets/css/toast.module.css'

// 1️⃣ Provider wrapper
export function ToasterProvider({ children }: { children: React.ReactNode }) {
  return (
    <Toast.Provider>
      {children}
      <Toast.Portal>
        <Toast.Viewport className={styles.Viewport}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  )
}

// 2️⃣ Hook to trigger toasts anywhere
export function useToast() {
  const toastManager = Toast.useToastManager()
  return React.useCallback(
    (title: string, description?: string) => {
      toastManager.add({ title, description })
    },
    [toastManager]
  )
}

// 3️⃣ ToastList component (renders all toasts)
function ToastList() {
  const { toasts } = Toast.useToastManager()
  return (
    <>
      {toasts.map((toast) => (
        <Toast.Root key={toast.id} toast={toast} className={styles.Toast}>
          <Toast.Content className={styles.Content}>
            <Toast.Title className={styles.Title}>{toast.title}</Toast.Title>
            {toast.description && (
              <Toast.Description className={styles.Description}>
                {toast.description}
              </Toast.Description>
            )}
            <Toast.Close className={styles.Close} aria-label="Close">
              <XIcon className={styles.Icon} />
            </Toast.Close>
          </Toast.Content>
        </Toast.Root>
      ))}
    </>
  )
}

// 4️⃣ Close Icon
function XIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
