import React from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'

export default function Friend(props) {
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
          <Card.Header> {props.friend.name} </Card.Header>
          <Card.Meta> {props.friend.age} años </Card.Meta>
          <Card.Description>
          {props.friend.email}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Edit
            </Button>
            <Button basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}