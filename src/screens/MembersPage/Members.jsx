import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Heading from './Heading';
import SocialBoxes from './socialBoxes';
import SocialHeading from './SocialHeading';
import MemberChoices from './MemberChoices';


export default class Members extends Component {
  render() {
    return (
      <>
      <main>

      <Heading />
      <MemberChoices />
      <SocialHeading />
      <SocialBoxes />
      </main>
      <Footer />
      </>
    );
  }
}
