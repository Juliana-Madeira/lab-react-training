import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';



function App() {
  return (
    <div className="App">
      <h1 className='title'>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth= {new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth= {new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      <h1 className='title'>Greetings</h1>
        <Greetings lang='de'>Ludwig</Greetings>
        <Greetings lang='fr'>François</Greetings>
      <h1 className='title'>Random</h1>
        <Random min={1} max={10}/>
        <Random min={10} max={100}/>
      <h1 className='title'>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} textColor ='white' />
        <BoxColor r={128} g={255} b={0} textColor ='black' />
      <h1 className='title'>CreditCard</h1>
        <CreditCard
          type="Visa"
          number="0123 4567 8901 8845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123 4567 8901 0995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123 4567 8901 6984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
    </div>
    
  );
}

export default App;
