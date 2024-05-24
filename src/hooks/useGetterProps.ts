import { useCallback } from 'react';
import { EditAbleElement } from '../components/Editor';
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
import { EditProps } from '../common/type';

export function useGetterProps(dispatch: DispatchState, state: DetailState) {
  const getProps = useCallback(
    (element?: EditAbleElement | null): Record<string, EditProps> => {
      switch (element) {
        case 'page':
          return {
            modifyWidthProps: {
              onChange: (width: string) => {
                return setWidth(dispatch, width);
              },
              value: state.width,
            },
            modifyBackgroundProps: {
              onChange: (color: string) => {
                return setBackGroundColor(dispatch, color);
              },
              value: state.backgroundColor,
            },
          };
        case 'heading':
          return {
            editorFontWeightProps: {
              onChange: (fontSize: string) => {
                return setFontWeightAction(dispatch, fontSize);
              },
              value: state.header.fontWeight,
            },
            editorFontSizeProps: {
              onChange: (size: string) => {
                return setFontSizeAction(dispatch, size);
              },
              value: state.header.fontSize,
            },
          };
        case 'description':
          return {
            descriptionEditorWidth: {
              onChange: (width: string) => {
                return setFontSizeDescriptionAction(dispatch, width);
              },
              value: state.description.fontSize,
            },
            descriptionEditorFontWeight: {
              onChange: (weight: string) => {
                return setFontWeightDescriptionAction(dispatch, weight);
              },
              value: state.description.fontWeight,
            },
          };
        case 'image':
          return {
            imageEditorShape: {
              onChange: (shape: string) => {
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
