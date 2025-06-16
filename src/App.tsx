import { Main } from './components/Main';
import styled from "styled-components";
// const StyledDiv =styled.div`
//   margin: 0 auto;
//   padding: 0;
//   box-sizing: border-box;`;


// const Layout = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 0 auto;
//   flex-direction: row; 
//   @media (max-width: 900px){
//     flex-direction: column; 
//   }
// `;



// function Root(){
//   return(
//     <>
//      <Layout><Nav/> 
//       <Routes>
//         <Route path="/" element={<Main />} />
//       </Routes>
//       </Layout> 
//     </>
//   );
// }

// const router = createBrowserRouter(
//   [
//     {path: "*", Component: Root}
//   ]
// );

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;       
  width: 100vw;        
  text-align: center;
`;

function App() {
  return (
    <StyledDiv>
      <Main />
    </StyledDiv>
  );
}

export default App;