import LogoCarousel from "../carousel";
import Container from "../container";

const logos = [
  "https://chapadensenews.com.br/wp-content/uploads/2024/09/images-2.jpeg",
  "https://cocal-institucional-hml.s3.amazonaws.com/app/uploads/2023/08/RI_LOGO_MARCA.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1Ah8fidGF0h41Oi7m6ThUx17ITbeCE2eVQ&s",
  "https://media.licdn.com/dms/image/v2/C4D0BAQE7R8UCm6pa5w/company-logo_200_200/company-logo_200_200/0/1630541593237?e=2147483647&v=beta&t=cbKA4wodpBk2zxPd2xgrEHCxciuMA_O5AQZJdZtkV3g",
];

const OurClients = () => {
  return (
    <section className="py-20 px-6 flex flex-col justify-center items-center">
      <Container>
        <h2 className="text-4xl font-bold text-custom-orange text-center">
          Nossos Clientes
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center">
          Empresas que já aderiram ao método RAM.
        </p>

        <div className="w-full mt-12 flex items-center justify-center">
          <LogoCarousel logos={logos} />
        </div>
      </Container>
    </section>
  );
};

export default OurClients;

