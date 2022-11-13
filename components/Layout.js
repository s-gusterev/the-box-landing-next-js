import { Header, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />

    </>
  )
}

export default Layout