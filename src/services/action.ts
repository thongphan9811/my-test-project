import { DispatchState } from '.';

export function setWidth(dispatch: DispatchState, width: string) {
  return dispatch({
    type: 'SET_PAGE_WIDTH',
    payload: {
      width: Number(width),
    },
  });
}

export function setBackGroundColor(dispatch: DispatchState, color: string) {
  return dispatch({
    type: 'SET_BACKGROUND_COLOR',
    payload: {
      backgroundColor: color,
    },
  });
}

export function setFontWeightAction(dispatch: DispatchState, fontWeight: string) {
  return dispatch({
    type: 'SET_FONT_WEIGHT_HEADING',
    payload: {
      header: {
        fontWeight: fontWeight,
      },
    },
  });
}

export function setFontSizeAction(dispatch: DispatchState, fontSize: string) {
  return dispatch({
    type: 'SET_FONT_SIZE_HEADING',
    payload: {
      header: {
        fontSize: Number(fontSize),
      },
    },
  });
}

export function setFontSizeDescriptionAction(dispatch: DispatchState, fontSize: string) {
  return dispatch({
    type: 'SET_FONT_SIZE_DESCRIPTION',
    payload: {
      description: {
        fontSize: Number(fontSize),
      },
    },
  });
}

export function setFontWeightDescriptionAction(dispatch: DispatchState, fontWeight: string) {
  return dispatch({
    type: 'SET_FONT_WEIGHT_DESCRIPTION',
    payload: {
      description: {
        fontWeight: fontWeight,
      },
    },
  });
}

export function setShapeImg(dispatch: DispatchState, shape: string) {
  return dispatch({
    type: 'SET_SHAPE_IMG',
    payload: {
      img: {
        shape: shape,
      },
    },
  });
}
