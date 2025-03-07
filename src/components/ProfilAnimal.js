import Image from "next/image";

function ProfilAnimal({ nom, race, age, image }) {
    return (
        <div style={{
            border: "1px solid #ccc", padding: "10px",
            borderRadius: "10 px", maxWidth: "200px", textAlign: "center",
            margin: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            //backgroundColor: true ? "#fffae6" : "white"
        }}>
            <Image src={image} alt={nom} style={{ width: "100%", borderRadius: "10px" }} />
            <h1>Nom : {nom}</h1>
            <p>Âge : {age}</p>
            <p>Race : {race}</p>
            <p> ❤️ : {0}</p>
            <button style={{ backgroundColor: "#ff4081", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>J&lsquo;aime ❤️ </button>
            <button style={{
                //backgroundColor: true ? "#ffd700" : "#ccc",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
            }}> {true ? "Retirer des Favoris ⭐" : "Ajouter aux Favoris ☆"} </button>
        </div>
    );
}

export default ProfilAnimal;