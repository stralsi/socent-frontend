import React from 'react'
import Loading from '../Loading'
const styles = {
  container: {
    display: "block",
    minHeight: "calc(100vh - 50px)",
    paddingTop: 90
  }
}
function HomeUI(props) {
  return (
    <div>
      <h1>Home Containerised</h1>
    </div>
  );
}

function Home(props) {
  return (
    <div style={styles.container}>
      {
        props.isLoading === true
          ? <Loading />
          : <HomeUI
              />
      }
    </div>
  );
}

export default Home;
