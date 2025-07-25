import React from "react";
import TopNav from "./TopNav";
import "./CSS/Ruleset.css";

export default function Ruleset() {
  return (
    <>
      <TopNav active="ruleset" />
      <div className="ruleset-page">
        <h1 className="ruleset-title">Ruleset & FAQ</h1>

        <section className="ruleset-section">
          <h2 className="section-heading">Regolamento</h2>
          <div className="pdf-container">
            <iframe
              src="/Regolamento2024.pdf"
              title="Regolamento"
              className="ruleset-pdf"
              allowFullScreen
            />
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-heading">FAQ</h2>
          <div className="faq-list">
            <details>
              <summary>Come posso iscrivermi ad un torneo?</summary>
              <div>La modalità di iscrizione sarà pubblicata a breve.</div>
            </details>
            <details>
              <summary>Che equipaggiamento è obbligatorio?</summary>
              <div>Risposta placeholder. Maggiori dettagli saranno disponibili nel regolamento ufficiale.</div>
            </details>
            <details>
              <summary>Come funzionano i punteggi delle tappe?</summary>
              <div>I dettagli sui punteggi verranno pubblicati prossimamente.</div>
            </details>
            <details>
              <summary>Ho bisogno della tessera CSEN?</summary>
              <div>Consulta il regolamento per la policy tesseramento.</div>
            </details>
            <details>
              <summary>Come posso proporre una nuova FAQ?</summary>
              <div>Contatta gli organizzatori tramite email nella sezione contatti.</div>
            </details>
          </div>
        </section>
      </div>
    </>
  );
}
