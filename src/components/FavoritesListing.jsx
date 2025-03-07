export function FavoritesListing() {
    return <>
        {/* Affichage des animaux favoris*/}
        <div style={{ marginTop: "20px", padding: "10px", border: "2px solid #ddd", borderRadius: "5px" }}>
            <h2>Animaux Favoris</h2>
            {favoris.length > 0 ? (
                <ul>
                    {favoris.map((animal, index) => (
                        <li key={index}>
                            {animal.nom} - {animal.race}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun animal n'est dans vos favoris.</p>
            )}
        </div>
    </>
}