import ProfilAnimal from './ProfilAnimal';
import { Animal } from "@/lib/interfaces/Animal.interface";


interface AnimalListProps {
    list: Animal[];
}

export function AnimalList({ list }: AnimalListProps) {
    return (<ul style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", listStyle: "none" }}>
        {list.length > 0 ? list.map((animal, index) => (
            <li key={index}
            >
                <ProfilAnimal
                    nom={animal.name}
                    age={animal.age}
                    race={animal.race}
                    image={animal.image}
                />
            </li>
        )) : <p>Pas d&lsquo;animal dans la liste</p>}
    </ul>)
}