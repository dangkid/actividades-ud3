// src/App.tsx
import { CabeceraAzul, CabeceraRoja } from './assets/components/Practica18/Cabeceras';
import { ListadoHeroes } from './assets/components/Practica22/ListadoHeroes';
import { RedesSociales } from './assets/components/Practica23/RedesSociales';
import './App.css'; // Si tienes estilos globales

function App() {
  return (
    <>
      <div className="site-container">
        <header className="site-header">
          <div className="cabeceras">
            <CabeceraAzul />
            <CabeceraRoja titulo="Cabecera Roja con TypeScript" />
          </div>
        </header>

        <main className="main-content">
          <section className="section-listado">
            <div className="heroes-columns">
              <div className="heroes-column">
                <ListadoHeroes publisher="DC Comics" />
              </div>
              <div className="heroes-column">
                <ListadoHeroes publisher="Marvel Comics" />
              </div>
            </div>
          </section>
          <aside className="section-redes">
            <RedesSociales redes={["Facebook", "Instagram", "Google"]} />
          </aside>
        </main>
      </div>

      {/* Footer eliminado según solicitud del alumno */}
    </>
  );
}

export default App;