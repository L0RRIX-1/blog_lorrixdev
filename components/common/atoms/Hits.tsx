// Rimuovi il commento se non è necessario oppure mantienilo per disabilitare il warning
// /* eslint-disable @next/next/no-img-element */

const Hits = () => {
  return (
    <img
      alt=""
      src=""
      style={{ display: 'none' }} // Nasconde l'immagine
      width={0} // Setta larghezza a 0
      height={0} // Setta altezza a 0
    />
  )
}

export default Hits
