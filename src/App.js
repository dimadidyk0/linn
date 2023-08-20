import Header from "./components/ui/Header/Header";
import styles from "./App.module.css";
import Container from "./components/ui/Container/Container";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Container>Content</Container>
    </div>
  );
}

export default App;
