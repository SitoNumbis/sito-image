import { forwardRef, useState } from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";
import "./style.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const SitoImage = forwardRef((a, b) => {
  const [c, d] = useState(1),
    {
      src: e,
      errorComponent: f,
      loadingComponent: g,
      onLoad: h,
      onError: i,
      alt: j,
      sx: k,
      id: l,
      name: m,
      style: n,
    } = a,
    o = (a) => 0 <= a.indexOf("%"),
    p = (a) => (o(a) ? "100%" : a),
    q = css({
      width: k.width ? k.width : "100%",
      height: k.width ? k.width : "100%",
      img: {
        filter: k.filter,
        borderRadius: k.borderRadius,
        objectFit: k.objectFit,
        objectPosition: k.objectPosition,
        ...k,
        width: `${p(k.width ? k.width : "100%")}`,
        height: `${p(k.height ? k.height : "100%")}`,
        opacity: 0,
        transition: "opacity 200ms ease",
      },
    });
  return _jsx("div", {
    ref: b,
    id: l,
    name: m,
    style: n,
    className: q,
    children: _jsxs("div", {
      className: css({ position: "relative", width: "100%", height: "100%" }),
      children: [
        _jsx("img", {
          className: q,
          src: e,
          alt: j,
          loading: "lazy",
          onLoad: (a) => {
            d(0), (a.target.style.opacity = 1), h(a);
          },
          onError: (a) => {
            d(-1), i(a);
          },
        }),
        _jsxs("div", {
          className: css({
            zIndex: 1 === c ? 1 : -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: `${p(k.width ? k.width : "100%")}`,
            height: `${p(k.height ? k.height : "100%")}`,
            transition: "all 500ms ease",
            opacity: 1 === c ? 1 : 0,
          }),
          children: [
            g
              ? g
              : _jsx("div", {
                  className: `shimmer ${css({
                    width: `${p(k.width ? k.width : "100%")}`,
                    height: `${p(k.height ? k.height : "100%")}`,
                  })}`,
                }),
            -1 === c && f,
          ],
        }),
      ],
    }),
  });
});
(SitoImage.defaultProps = {
  id: "",
  name: "",
  alt: "no-image",
  src: "",
  errorComponent: void 0,
  loadingComponent: void 0,
  sx: {},
  style: {},
  extraProps: {},
  onLoad: () => {},
  onError: () => {},
}),
  (SitoImage.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    errorComponent: PropTypes.node,
    loadingComponent: PropTypes.node,
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
    style: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
    extraProps: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
    onLoad: PropTypes.func,
    onError: PropTypes.func,
  });
export default SitoImage;
