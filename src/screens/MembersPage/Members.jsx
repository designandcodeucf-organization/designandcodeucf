import { Component } from 'react';
import Footer from '../../components/Footer';
import MemberHeading from './Heading';
import SocialBoxes from './socialBoxes';
import SocialHeading from './SocialHeading';
import MemberChoices from './MemberChoices';
import MembershipComparison from './MembershipComparison';


export default class Members extends Component {
  render() {
    return (
      <>
      <main>
      <MemberHeading />
      <MemberChoices />
      <MembershipComparison />
      <SocialHeading />
      <SocialBoxes />
      </main>
      <Footer />
      </>
    );
  }
}
