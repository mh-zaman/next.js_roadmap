import LikeButton from './like-button';

function Header({title}) {
  return <h1>{title ? title : 'Getting Started with React'}</h1>;
}

export default function HomePage(){

  const names = ['Components', 'JSX', 'Virtual DOM', 'State', 'Props', 'Router', 'State Management', 'Hooks', 'Error Handling'];
  return (
    <div>
    <Header title='Getting Started with React'/>
    <ul>
      {names.map((name) => (
        <li key={name}> {name} </li>
        ))}
      </ul>
      <LikeButton />
    </div>
  )
}