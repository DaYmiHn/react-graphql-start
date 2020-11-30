import { gql, useMutation } from '@apollo/client';

function App() {
  const [addTodo] = useMutation(gql`
  mutation($name: String, $age: Int){
    addDirector(name: $name, age: $age){
      id
      name
      age
    }
  }`);
  return (
    <div className="App">
      <button onClick={()=>addTodo({ variables: { name: '4234', age: 50 } }).then(({data: {addDirector}})=>console.log({addDirector}))}>sdfsdfs</button>
      
    </div>
  );
}

export default App;
