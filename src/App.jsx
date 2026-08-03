import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <StudentCard 
        name="Ali" 
        age={15} 
        className="9th" 
        city="Karachi" 
      />
    </div>
  );
}

export default App;