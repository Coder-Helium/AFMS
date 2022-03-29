/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import Nav from '../../components/Nav';
import { sideBar } from './sideBars'
import OptionsContainer from '../../components/OptionsContainer';
// import { ISideBar } from '../../servies/APIModel/sideBar';
export default () => {
  return (
      <div>
        <Nav/>
        <OptionsContainer {...sideBar}/>
      </div>
  )
}
