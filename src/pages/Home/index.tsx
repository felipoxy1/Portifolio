import Apresentacao from '../../components/Aprensentacao';
import Conhecimentos from '../../components/Conhecimentos';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';
import Projetos from '../../components/Projetos';
import Sobre from '../../components/Sobre';

const Home = () => {
 return (
  <>
   <Apresentacao />
   <Sobre />
   <Conhecimentos />
   <Projetos />
   <Contato />
   <Footer />
  </>
 );
};

export default Home;
