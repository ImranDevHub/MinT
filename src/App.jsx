const data = ['Ahmed', 'Isa', 'Imran', 'Amir'];

function App() {
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <h1>Hello React With vite.{time}</h1>
      <List />
    </>
  );
}

function List() {
  return (
    <ul>
      {data.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
