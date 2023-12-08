// src/app/page.tsx
import GlucoseForm from './components/GlucoseForm';

const Home: React.FC = () => {

  return (
    <div>
      <h1>Anotador de Glucosa</h1>
      <GlucoseForm />
      {/* Puedes mostrar registros anteriores aquí */}
    </div>
  );
};

export default Home;
