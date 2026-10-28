"use client";

import Lightbox, {
  type LightboxExternalProps,
} from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ImageLightbox({
  withZoom = false,
  ...props
}: LightboxExternalProps & { withZoom?: boolean }) {
  return <Lightbox {...props} plugins={withZoom ? [Zoom] : []} />;
}
