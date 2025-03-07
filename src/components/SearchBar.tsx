import { useEffect, useState, useMemo } from "react";

interface SearchBarProps<T> {
    list: T[];
    valueToFilter: keyof T;
    onSearch: (filteredList: T[]) => void;
}

export function SearchBar<T>({ list, valueToFilter, onSearch }: SearchBarProps<T>) {
    const [searchTerm, setSearchTerm] = useState(""); // État local pour la valeur de l'input

    const filteredList = useMemo(() => {
        console.log(searchTerm)
        return list.filter((element) =>
            (element[valueToFilter] as string).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, list, valueToFilter]);

    useEffect(() => {
        onSearch(filteredList);
    }, [filteredList, onSearch]);

    return (
        <input
            type="text"
            placeholder="Rechercher un animal.." // Placeholder pour l'input
            value={searchTerm} // Valeur de l'input
            onChange={(event) => setSearchTerm(event.target.value)} // Fonction pour mettre à jour la valeur de l'input
            style={{ padding: "10px", margin: "10px", width: "50%" }} // Style de l'input
        />
    );
}