import React from "react";
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';

export default class FetchWorkplace extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://gitconnected.com/v1/portfolio/electronicmaji";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ work: data.work[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.work) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
          <Text fontSize="2rem" fontWeight="semibold">A <Text as="span" bgGradient="linear-gradient( 180deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% )" bgClip='text'>{this.state.work.position}</Text>
          <br></br> for <Text as="span" bgGradient="linear-gradient( 180deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% )" bgClip='text'>{this.state.work.name}</Text>.</Text>

      </div>
    );
  }
}