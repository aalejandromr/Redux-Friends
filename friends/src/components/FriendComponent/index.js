import React from 'react'
import { connect } from "react-redux"
import { fetchFriends } from "../../actions"
import AppLoader from "../LoaderComponent"
import Friend from './Friend'
import { Grid, Card, Image } from 'semantic-ui-react'

class FriendList extends React.Component {

  componentDidMount()
  {
    this.props.fetchFriends();
  }

  render() {
    if(this.props.isFetching)
    {
      return(
        <AppLoader/>
      )
    }
    return(
          <Card.Group>
            <Grid columns={3}>
              <Grid.Row>
                { this.props.friendList.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                )) }
                </Grid.Row>
            </Grid>
          </Card.Group>
    )
  }
}



const mapStateToProps = state => {
  return {
    friendList: state.friendList,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchFriends })(FriendList)