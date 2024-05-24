import { DispatchState } from '.';
import { Shape } from '../components/ModifyImage';

export function setWidth(dispatch: DispatchState, width: number) {
  return dispatch({
    type: 'SET_PAGE_WIDTH',
    payload: {
      width: width,
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

export function setFontSizeAction(dispatch: DispatchState, fontSize: number) {
  return dispatch({
    type: 'SET_FONT_SIZE_HEADING',
    payload: {
      header: {
        fontSize: fontSize,
      },
    },
  });
}

export function setFontSizeDescriptionAction(dispatch: DispatchState, fontSize: number) {
  return dispatch({
    type: 'SET_FONT_SIZE_DESCRIPTION',
    payload: {
      description: {
        fontSize: fontSize,
      },
    },
  });
}

export function setFontWeightDescriptionAction(dispatch: DispatchState, fontWeight: string) {
  console.log(fontWeight, 'runn');

  return dispatch({
    type: 'SET_FONT_WEIGHT_DESCRIPTION',
    payload: {
      description: {
        fontWeight: fontWeight,
      },
    },
  });
}

export function setShapeImg(dispatch: DispatchState, shape: Shape) {
  return dispatch({
    type: 'SET_SHAPE_IMG',
    payload: {
      img: {
        shape: shape,
      },
    },
  });
}
