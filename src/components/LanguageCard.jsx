function LanguageCard({ language }) {
  return (
    <div className="card">
      {language !== null ? (
        <div className="card-body">
          <h3>{language.title}</h3>
          <p>{language.description}</p>
        </div>
      ) : (
        <div className="card-body">
          <p>Nessun linguaggio è stato selezionato</p>
        </div>
      )}
    </div>
  );
}

export default LanguageCard;
