import React, { useCallback, useMemo, useState } from "react"

const BASE_STYLES = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
}

export function Clamp({
  className,
  text,
  lineCount = 2,
  renderShowMore,
  renderShowLess,
}) {
  const [isClamped, setIsClamped] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const style = useMemo(
    () => ({
      ...BASE_STYLES,
      WebkitLineClamp: isExpanded ? "inherit" : lineCount,
    }),
    [lineCount, isExpanded]
  )

  const clampRef = useCallback((el) => {
    if (el == null) return
    if (doesTextOverflowLines(el)) setIsClamped(true)
  }, [])

  const handleExpand = useCallback(() => setIsExpanded(true), [])
  const handleCollapse = useCallback(() => setIsExpanded(false), [])

  return (
    <div className={className}>
      <div style={style} ref={clampRef}>
        {text}
      </div>
      {isClamped &&
        !isExpanded &&
        renderShowMore != null &&
        renderShowMore(handleExpand)}
      {isExpanded && renderShowLess != null && renderShowLess(handleCollapse)}
    </div>
  )
}

function doesTextOverflowLines(el) {
  return el.scrollHeight > el.clientHeight
}
