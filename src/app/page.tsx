"use client";

import React, { useState } from 'react';
import animalsJson from '../data/animals.json';
import { SearchBar } from '../components/SearchBar';
import { AnimalList } from '../components/AnimalList';
import { Animal } from "@/lib/interfaces/Animal.interface";
import { RaceEnum } from "@/lib/enums/RaceEnum";

const { animals } = animalsJson



export default function Home() {
  const [filteredList, setListFilteredList] = useState<Animal[]>([]);

  const mappedAnimalList = animals.map((animal, key) => ({
    name: animal.name,
    race: RaceEnum[animal.race as keyof typeof RaceEnum],
    age: animal.age,
    id: key,
    image: animal.image,
  }))

  function onFilterList(searchedList: Animal[]) {
    setListFilteredList(searchedList);
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1> Bienvenue sur le site de rencontre de vos animaux préf </h1>
      <SearchBar list={mappedAnimalList} valueToFilter="race" onSearch={onFilterList} />
      <AnimalList list={filteredList.length > 0 ? filteredList : mappedAnimalList} />
    </main>
  );
}
