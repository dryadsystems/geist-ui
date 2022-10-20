import React from 'react'
import CssTransition from '../shared/css-transition'
import useTheme from '../use-theme'

const X: React.FC<unknown> = () => {
  const theme = useTheme()
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision">
      <path d="M6 9l6 6 6-6" />
      <path d="M18 6L6 18M6 6l12 12"></path>
      <style jsx>{`
        svg {
          color: inherit;
          stroke: ${theme.palette.background};
          transition: all 200ms ease;
          width: 1.214em;
          height: 1.214em;
          padding-x: 0.5em;
        }
      `}</style>
    </svg>
  )
}

export interface ModalExitProps {
  onClick: () => void
  visible: boolean
}

export const ModalExit: React.FC<ModalExitProps> = ({
  onClick,
  visible,
}: ModalExitProps) => {
  return (
    <CssTransition visible={visible} clearTime={300}>
      <div onClick={onClick} className="exit" style={{ padding: '.38rem' }}>
        <X />
        <style jsx>{`
          .exit {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }

          .exit-enter {
            opacity: 0;
            transform: translate3d(0px, -30px, 0px);
          }

          .exit-enter-active {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }

          .exit-leave {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }

          .exit-leave-active {
            opacity: 0;
            transform: translate3d(0px, -30px, 0px);
          }
        `}</style>
      </div>
    </CssTransition>
  )
}
