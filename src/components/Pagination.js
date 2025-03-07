export function Pagination() {
    return <>
        {/* Pagination */}
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
            Précédent
        </button>

        <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
            Suivant
        </button>
    </>
}