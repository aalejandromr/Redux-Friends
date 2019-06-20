import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const AppLoader = () => {
  return (
    <FullHeightSegment>
      <Dimmer active>
        <Loader size='big'>Loading....</Loader>
      </Dimmer>
    </FullHeightSegment>
  )
}

const FullHeightSegment = styled(Segment)`
height: 100%
`

export default AppLoader;