import React from 'react'
import cx from 'classnames'
// import Row from './Row';
// import Col from './Col';
import { useStyleConfig } from '../../hooks'
import { Pane } from '../../layers'

const pseudoSelectors = {}

const internalStyles = {
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  // 15 instead of 16 in order to maintain height with 1px border
  padding: '15px'
}

const Grid = function(props) {
  const { appearance = 'default', intent = 'info', className, ...restProps } = props

  const intentToken = intent === 'none' ? 'info' : intent
  const { className: themedClassName, ...styleProps } = useStyleConfig(
    'Grid',
    { appearance, intent: intentToken },
    pseudoSelectors,
    internalStyles
  )

  return (
    <Pane className={cx(className, themedClassName)} role="alert" {...styleProps} {...restProps}>
      grid....
    </Pane>
  )
}

export default Grid
