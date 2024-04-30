import { useEffect, useState } from 'react';
import {
  Lesson10Component,
  DataContainer,
  DataItem,
  ButtonContainer,
  Button,
} from './styles';

function Lesson10() {
  const [data, setData] = useState<string[]>([]); 
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();

      if (result && result.fact) {
        setData(prevData => [...prevData, result.fact]); 
      } else {
        console.error('Invalid data received from API:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const handleGetMoreInfo = async () => {
    await fetchData();
  };

  const handleDeleteAllData = () => {
    setData([]); 
  };

  return (
    <Lesson10Component>
     <DataContainer>
        {data.map((fact, index) => (
    <DataItem key={index}>
      <p>{fact}</p>
    </DataItem>
  ))}
    </DataContainer>
      <ButtonContainer>
        <Button onClick={handleGetMoreInfo}>GET MORE INFO</Button>
        <Button onClick={handleDeleteAllData}>DELETE ALL DATA</Button>
      </ButtonContainer>
    </Lesson10Component>
  );
}

export default Lesson10;
