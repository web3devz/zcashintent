import type React from "react"
import type { PropsWithChildren } from "react"

import Layout from "@src/components/Layout"
import { PreloadFeatureFlags } from "@src/components/PreloadFeatureFlags"

const OtcDeskLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PreloadFeatureFlags>
     <h2>Working on this</h2>
    </PreloadFeatureFlags>
  )
}

export default OtcDeskLayout
