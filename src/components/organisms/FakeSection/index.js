import React from 'react'

import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'

const FakeSection = props => {
  return (
    <Section label="Fake Section">
      <Button width={1} onClick={props.swapTheme}>
        Swap themes
      </Button>
    </Section>
  )
}

export default FakeSection
