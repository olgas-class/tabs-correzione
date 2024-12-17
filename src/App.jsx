import { useState } from "react";
import languages from "./data/languages";
import LanguageCard from "./components/LanguageCard";
import AppButton from "./components/AppButton";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <>
      <header>
        <AppButton
          title="Login"
          buttonType="success"
          handleOnClick={() => {
            alert("Ciao");
          }}
        />
        <AppButton
          title="Registrati"
          buttonType="secondary"
          handleOnClick={() => {
            alert("Registrati!");
          }}
        />
      </header>

      <main className="container my-5">
        <div className="d-flex flex-column align-items-center">
          <nav>
            {/* Reset button */}
            <AppButton
              title="Reset"
              buttonType="danger"
              icon="cestino"
              handleOnClick={() => {
                setSelectedLanguage(null);
              }}
            />

            {/* Lista di bottoni */}
            {languages.map((curLang) => (
              <AppButton
                key={curLang.id}
                title={curLang.title}
                buttonType={
                  selectedLanguage && selectedLanguage.id === curLang.id
                    ? "warning"
                    : "primary"
                }
                handleOnClick={() => setSelectedLanguage(curLang)}
              />
            ))}
          </nav>

          <div className="w-50 mt-4">
            <LanguageCard language={selectedLanguage} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
