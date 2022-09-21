import React, { CSSProperties, useImperativeHandle, useRef } from 'react'
import useTheme from '../use-theme'
import { useSelectContext } from './select-context'
import Dropdown from '../shared/dropdown'
import useClasses from '../use-classes'
import { getRefRect } from '../utils/layouts'

interface Props {
  visible: boolean
  className?: string
  dropdownStyle?: CSSProperties
  disableMatchWidth?: boolean
  getPopupContainer?: () => HTMLElement | null
  typeColor?: string
}

const defaultProps = {
  className: '',
  dropdownStyle: {},
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type SelectDropdownProps = Props & NativeAttrs

const SelectDropdown = React.forwardRef<
  HTMLDivElement | null,
  React.PropsWithChildren<SelectDropdownProps>
>(
  (
    {
      visible,
      children,
      className,
      dropdownStyle,
      disableMatchWidth,
      getPopupContainer,
      typeColor,
    }: React.PropsWithChildren<SelectDropdownProps> & typeof defaultProps,
    dropdownRef,
  ) => {
    const theme = useTheme()
    const internalDropdownRef = useRef<HTMLDivElement | null>(null)
    const { ref } = useSelectContext()
    const classes = useClasses('select-dropdown', className)

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      dropdownRef,
      () => internalDropdownRef.current,
    )

    const parentRect = getRefRect(ref, getPopupContainer)

    const roundedCorner = `calc(4 * ${theme.layout.radius}) `

    return (
      <Dropdown
        parent={ref}
        visible={visible}
        disableMatchWidth={disableMatchWidth}
        getPopupContainer={getPopupContainer}>
        <div ref={internalDropdownRef} className={classes} style={dropdownStyle}>
          {children}
          <style jsx>{`
            .select-dropdown {
              border-radius: 0px 0px ${roundedCorner} ${roundedCorner};
              border: 1px solid ${typeColor};
              border-top: none;
              box-shadow: ${theme.expressiveness.shadowLarge};
              background-color: ${theme.palette.background};
              max-height: 17em;
              overflow-y: auto;
              overflow-anchor: none;
              padding: 0.38em 0;
              scroll-behavior: smooth;
              margin-top: -1px;
            }
            .select-dropdown::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: calc(100% - ${parentRect.width - 1}px);
              margin-top: -1px;
              height: 1px;
              z-index: 1101;
              border-top: 1px inset ${typeColor};
            }
          `}</style>
        </div>
      </Dropdown>
    )
  },
)

SelectDropdown.defaultProps = defaultProps
SelectDropdown.displayName = 'GeistSelectDropdown'
export default SelectDropdown
