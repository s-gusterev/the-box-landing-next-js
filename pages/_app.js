import Layout from '../components/Layout';
import '../styles/globals.css';
import '../components/About/About.css'
import '../components/App/App.css';
import '../components/Header/Header.css';
import '../components/Burger/Burger.css';
import '../components/Consultation/Consultation.css';
import '../components/Experience/Experience.css';
import '../components/Feedback/Feedback.css';
import '../components/Footer/Footer.css';
import '../components/Hero/Hero.css';
import '../components/HeroSwiperCard/HeroSwiperCard.css';
import '../components/Logo/Logo.css';
import '../components/Menu/Menu.css';
import '../components/MenuMobile/MenuMobile.css';
import '../components/Projects/Projects.css';
import '../components/Reputation/Reputation.css';
import '../components/ReputationCard/ReputationCard.css';
import '../components/SectionTitle/SectionTitle.css';
import '../components/Services/Services.css';



const MyApp = ({ Component, pageProps }) => {
  return <Layout><Component {...pageProps} /></Layout>

}

export default MyApp
