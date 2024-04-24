// Типизация через type
// type Animal {
//   name: string;
//   species: string;
//   image: string;
// }

// Типизация через interface
interface Animal{
    name: string;
    species: string;
    image: string;
  }
  
  export interface AnimalCardProps {
    animalData: Animal
  }
  