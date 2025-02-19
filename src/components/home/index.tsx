// Home.js
import Container from '../container';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen bg-[url('../src/assets/bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      {/* Conteúdo */}
      <Container>
        <section className="relative z-10 flex items-center justify-center w-full h-screen flex-col gap-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">SLOGAN AQUI</h1>
            <h1 className="text-4xl sm:text-6xl font-bold text-center text-custom-orange">SLOGAN AQUI</h1>
            <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">SLOGAN AQUI</h1>
          </div>

          {/* Botão que rola para About */}
          <button 
            className="bg-custom-orange text-bold text-white text-2xl rounded-lg p-4 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={scrollToAbout}
          >
            Saiba mais 
            <IoIosArrowDown className="text-3xl"/>
          </button>
        </section>
      </Container>
    </section>
  );
};

export default Home;
