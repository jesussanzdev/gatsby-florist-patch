import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const instagramLink = (
    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" alt="instagram link">
      Instagram
    </a>
  )
  const facebookLink = (
    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" alt="facebook link">
      Facebook
    </a>
  )
  const twitterLink = (
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" alt="twitter link">
      Twitter
    </a>
  )
  
  const Footer = () => (
    <Segment
      vertical
      style={{
        padding: '3em 0em',
        marginTop: '2em',
      }}
    >
      <Container text>
        <Grid stackable>
          <Grid.Row>
          <Grid.Column width={5}>
              <Header as="h4" content="Quick links" />
              <List>
                <List.Item as={Link} to="/privacy/">
                  Privacy
                </List.Item>
                <List.Item as={Link} to="/refunds/">
                  Refund Policy
                </List.Item>
                <List.Item as={Link} to="/terms/">
                  Terms of Service
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h4" content="Navigation" />
              <List>
                <List.Item as={Link} to="/">
                  Home
                </List.Item>
                <List.Item as={Link} to="/about/">
                  About
                </List.Item>
                <List.Item as={Link} to="/faq/">
                  FAQ
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h4">RRSS</Header>
              <List horizontal style={{display: 'flex'}}>
                <List.Item
                  icon="instagram"
                  style={{display: 'flex'}}
                  content={instagramLink}
                />
                <List.Item
                  icon="facebook"
                  style={{display: 'flex'}}
                  content={facebookLink}
                />
                <List.Item
                  icon="twitter"
                  style={{display: 'flex'}}
                  content={twitterLink}
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
  
  export default Footer
  