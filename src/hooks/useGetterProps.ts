import { useCallback } from 'react';
import { EditAbleElement } from '../components/Editor';
import { Shape } from '../components/ModifyImage';
import {
  DetailState,
  DispatchState,
  setBackGroundColor,
  setFontSizeAction,
  setFontSizeDescriptionAction,
  setFontWeightAction,
  setFontWeightDescriptionAction,
  setShapeImg,
  setWidth,
} from '../services';

export function useGetterProps(dispatch: DispatchState, state: DetailState) {
  const getProps = useCallback(
    (element?: EditAbleElement | null) => {
      switch (element) {
        case 'page':
          return {
            modifyWidthProps: {
              setWidth: (width: number) => {
                return setWidth(dispatch, width);
              },
              value: state.width,
            },
            modifyBackgroundProps: {
              setBackGround: (color: string) => {
                return setBackGroundColor(dispatch, color);
              },
              value: state.backgroundColor,
            },
          };
        case 'heading':
          return {
            editorFontWeightProps: {
              setFontWeight: (fontSize: string) => {
                return setFontWeightAction(dispatch, fontSize);
              },
              value: state.header.fontWeight,
            },
            editorFontSizeProps: {
              setWidth: (size: number) => {
                return setFontSizeAction(dispatch, size);
              },
              value: state.header.fontSize,
            },
          };
        case 'description':
          return {
            descriptionEditorWidth: {
              setWidth: (width: number) => {
                return setFontSizeDescriptionAction(dispatch, width);
              },
              value: state.description.fontSize,
            },
            descriptionEditorFontWeight: {
              setFontWeight: (weight: string) => {
                return setFontWeightDescriptionAction(dispatch, weight);
              },
              value: state.description.fontWeight,
            },
          };
        case 'image':
          return {
            imageEditorShape: {
              onChange: (shape: Shape) => {
                return setShapeImg(dispatch, shape);
              },
              value: state.img.shape,
            },
          };
        default:
          return {};
      }
    },
    [dispatch, state],
  );

  return { getProps };
}
