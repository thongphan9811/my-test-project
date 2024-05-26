import { useMemo, useReducer, useState } from 'react';
import { EditorFontWeight } from '../EditorFontWeight';
import { ModifyBackground } from '../ModifyBackground';
import { ModifyWidth } from '../ModifyWidth/ModifyWidth';
import classes from './Editor.module.css';
import { Route } from '../../routes/detail';
import { DetailState, initialState, reducer } from '../../services';
import { useGetterProps } from '../../hooks';
import { ModifyImage } from '../ModifyImage';
import { ForwardedTooltip } from '../tooltip/Tooltip';
import { useFloating, useHover, useInteractions } from '@floating-ui/react';

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
  const [isOpen, setIsOpen] = useState(false);
  const [hoverElement, setHoverElement] = useState<EditAbleElement | null>(null);
  const { refs, floatingStyles, context } = useFloating({
    placement: 'right',
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    return data;
  });

  const { getProps } = useGetterProps(dispatch, state);

  function mouseOver(event: React.MouseEvent<HTMLDivElement>, element: EditAbleElement) {
    event.stopPropagation();
    setHoverElement(element);
  }

  function mouseOut() {
    setHoverElement(null);
  }

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
          onMouseEnter={(e) => mouseOver(e, 'page')}
          onMouseLeave={mouseOut}
          ref={refs.setReference as React.Ref<HTMLDivElement>}
          id="template-export"
          onClick={(e) => activeSettingElement(e, 'page')}
          className={classes['view-edit']}
          style={{
            width: state.width,
            height: state.height,
            backgroundColor: state.backgroundColor,
          }}
          {...getReferenceProps()}
        >
          <img
            onMouseLeave={mouseOut}
            onMouseEnter={(e) => mouseOver(e, 'image')}
            className={classes['image']}
            src={state.img.src}
            style={{
              width: state.img.size.width,
              height: state.img.size.height,
              top: state.img.position.top,
              left: state.img.position.left,
              ...settingShape,
            }}
            onClick={(e) => activeSettingElement(e, 'image')}
          />

          <div
            onMouseEnter={(e) => mouseOver(e, 'heading')}
            onMouseLeave={mouseOut}
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
            onMouseLeave={mouseOut}
            onMouseEnter={(e) => mouseOver(e, 'description')}
            className={classes['description']}
            style={{
              top: state.description.position.top,
              left: state.description.position.left,
              fontSize: state.description.fontSize,
              fontWeight: state.description.fontWeight,
              width: state.description.width,
            }}
            onClick={(e) => activeSettingElement(e, 'description')}
          >
            <span contentEditable suppressContentEditableWarning>
              {state.description.text}
            </span>
          </div>
        </div>
        {isOpen && (
          <ForwardedTooltip
            title={hoverElement || ''}
            ref={refs.setFloating as React.Ref<HTMLDivElement>}
            style={floatingStyles}
            {...getFloatingProps()}
          />
        )}
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
