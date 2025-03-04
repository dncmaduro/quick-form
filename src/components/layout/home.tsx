import { ReactNode } from 'react'
import { Header } from './header'

interface Props {
  children: ReactNode
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
