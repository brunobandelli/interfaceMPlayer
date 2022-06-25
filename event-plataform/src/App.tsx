import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apolo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      tittle
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

// Um dos metodos
// function App() {
//   useEffect(() => {
//     client
//       .query({
//         query: GET_LESSONS_QUERY,
//       })
//       .then((response) => {
//         console.log(response.data)
//       });
//   }, []);

// Outro metodo mais simplificado.
function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
    //  <h1 className="text-2xl">Hello World</h1>
  );
}

export default App;
