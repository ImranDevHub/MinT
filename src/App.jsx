const data = ['Ahmed', 'Isa', 'Imran', 'Amir'];

function App() {
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <h1>Hello React With vite.{time}</h1>
      <List />
      <Avater />
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

function Avater() {
  return <img src="./src/assets/images/LinkedIn_Learning.jpg" alt="Img" />;
}

export default App;
