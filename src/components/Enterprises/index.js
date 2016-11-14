import React, { PropTypes } from 'react'
import Loading from '../Loading'
// import ToolbarNavi from '../ToolbarNavi'
const styles = {
  containerPrivate: {
    display: "block",
    minHeight: "calc(100vh - 110px)"
  }
}
function EnterprisesUI(props) {
  return (
    <div>
      {/* <ToolbarNavi
        singular="Intreprindere"
        list={props.enterprises}/> */}
      <h1>Lista Intreprinderi</h1>

    </div>
  );
}
EnterprisesUI.propTypes = {
  enterprises: PropTypes.array,
};
function Enterprises(props) {
  return (
    <div style={styles.containerPrivate}>
      {
        props.isLoading === true
          ? <Loading />
          : <EnterprisesUI
              enterprises={props.enterprises} />
      }
    </div>
  );
}
Enterprises.propTypes = {
  isLoading: PropTypes.bool,
  enterprises: PropTypes.array
};
export default Enterprises;
