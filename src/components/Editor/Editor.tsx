import { useMemo, useReducer, useState } from 'react';
import { EditorFontWeight } from '../EditorFontWeight';
import { ModifyBackground } from '../ModifyBackground';
import { ModifyWidth } from '../ModifyWidth/ModifyWidth';
import classes from './Editor.module.css';
import { Route } from '../../routes/detail';
import { DetailState, initialState, reducer } from '../../services';
import { useGetterProps } from '../../hooks';
import { ModifyImage } from '../ModifyImage';

export type EditAbleElement = 'page' | 'heading' | 'description' | 'image';
export type PropsKey =
  | 'modifyWidthProps'
  | 'modifyBackgroundProps'
  | 'editorFontWeightProps'
  | 'editorFontSizeProps'
  | 'descriptionEditorWidth'
  | 'descriptionEditorFontWeight'
  | 'imageEditorShape';

const element = {
  page: [
    {
      Component: ModifyWidth,
      propsKey: 'modifyWidthProps' as PropsKey,
    },
    {
      Component: ModifyBackground,
      propsKey: 'modifyBackgroundProps' as PropsKey,
    },
  ],
  heading: [
    {
      Component: EditorFontWeight,
      propsKey: 'editorFontWeightProps' as PropsKey,
    },
    {
      Component: ModifyWidth,
      propsKey: 'editorFontSizeProps' as PropsKey,
    },
  ],
  description: [
    {
      Component: ModifyWidth,
      propsKey: 'descriptionEditorWidth' as PropsKey,
    },
    {
      Component: EditorFontWeight,
      propsKey: 'descriptionEditorFontWeight' as PropsKey,
    },
  ],
  image: [
    {
      Component: ModifyImage,
      propsKey: 'imageEditorShape' as PropsKey,
    },
  ],
} as const;

export function Editor() {
  const data = Route.useLoaderData() as DetailState;
  const [activeElement, setActiveElement] = useState<EditAbleElement | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return data;
  });

  const { getProps } = useGetterProps(dispatch, state);

  function activeSettingElement(event: React.MouseEvent<HTMLDivElement>, element: EditAbleElement) {
    event.stopPropagation();
    setActiveElement(element);
  }

  const settingShape = useMemo(() => {
    if (state.img.shape === 'window') {
      return {
        borderRadius: '20% 20% 0 0',
      };
    }
    if (state.img.shape === 'circle') {
      return {
        borderRadius: '50% 50% 50% 50%',
      };
    }
    return {};
  }, [activeElement, state.img.shape]);

  return (
    <div className={classes['editor-wrapper']}>
      <div className={classes['editor']}>
        <div
          onClick={(e) => activeSettingElement(e, 'page')}
          className={classes['view-edit']}
          style={{
            width: state.width,
            height: state.height,
            backgroundColor: state.backgroundColor,
          }}
        >
          <img
            className={classes['image']}
            src={state.img.src}
            style={{
              width: state.img.size.width,
              height: state.img.size.height,
              ...settingShape,
            }}
            onClick={(e) => activeSettingElement(e, 'image')}
          />

          <div
            className={classes['header']}
            style={{
              top: state.header.position.top,
              left: state.header.position.left,
              fontSize: state.header.fontSize,
              fontWeight: state.header.fontWeight,
            }}
            onClick={(e) => activeSettingElement(e, 'heading')}
          >
            <span contentEditable suppressContentEditableWarning>
              {state.header.text}
            </span>
          </div>

          <div
            className={classes['description']}
            style={{
              top: state.description.position.top,
              left: state.description.position.left,
              fontSize: state.description.fontSize,
              fontWeight: state.description.fontWeight,
            }}
            onClick={(e) => activeSettingElement(e, 'description')}
          >
            <span contentEditable suppressContentEditableWarning>
              {state.description.text}
            </span>
          </div>
        </div>
      </div>
      <div className={classes['modify']}>
        <div className={classes['title-editor']}>Editor Template</div>
        {element[activeElement as EditAbleElement]?.map(({ Component, propsKey }, index) => {
          const propsGroup = getProps(activeElement);
          const props = propsGroup[propsKey];

          return <Component key={`${propsKey}-${index}`} {...props} />;
        })}
      </div>
    </div>
  );
}
