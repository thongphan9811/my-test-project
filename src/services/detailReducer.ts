import { Dispatch } from 'react';

export const initialState = {
  id: 0,
  width: 400,
  height: 300,
  backgroundColor: 'white',
  header: {
    text: 'Header',
    fontWeight: 'normal',
    fontSize: 300,
    position: {
      top: 5,
      left: 5,
    },
  },
  img: {
    src: '',
    shape: '',
    position: {
      top: 50,
      left: 50,
    },
    size: {
      width: 100,
      height: 100,
    },
  },
  description: {
    text: 'Description load from api',
    fontSize: 30,
    fontWeight: 'normal',
    position: {
      top: 60,
      left: 50,
    },
  },
};

export type DetailState = typeof initialState;

export type ActionType =
  | 'SET_INTIAL_STATE'
  | 'SET_PAGE_WIDTH'
  | 'SET_BACKGROUND_COLOR'
  | 'SET_FONT_WEIGHT_HEADING'
  | 'SET_FONT_SIZE_HEADING'
  | 'SET_FONT_WEIGHT_DESCRIPTION'
  | 'SET_FONT_SIZE_DESCRIPTION'
  | 'SET_SHAPE_IMG';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type Action = {
  type: ActionType;
  payload: RecursivePartial<DetailState>;
};

export type DispatchState = Dispatch<Action>;

export function reducer(state: DetailState, action: Action): DetailState {
  switch (action.type) {
    case 'SET_PAGE_WIDTH':
      return {
        ...state,
        width: action.payload.width ?? initialState['width'],
      };
    case 'SET_BACKGROUND_COLOR':
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor ?? initialState['backgroundColor'],
      };
    case 'SET_FONT_WEIGHT_HEADING':
      return {
        ...state,
        header: {
          ...state.header,
          fontWeight: action.payload.header?.fontWeight ?? initialState['header']['fontWeight'],
        },
      };
    case 'SET_FONT_SIZE_HEADING':
      return {
        ...state,
        header: {
          ...state.header,
          fontSize: action.payload.header?.fontSize ?? initialState['header']['fontSize'],
        },
      };
    case 'SET_FONT_SIZE_DESCRIPTION':
      return {
        ...state,
        description: {
          ...state.description,
          fontSize: action.payload.description?.fontSize ?? initialState['description']['fontSize'],
        },
      };
    case 'SET_FONT_WEIGHT_DESCRIPTION':
      return {
        ...state,
        description: {
          ...state.description,
          fontWeight: action.payload.description?.fontWeight ?? initialState['description']['fontWeight'],
        },
      };
    case 'SET_SHAPE_IMG':
      return {
        ...state,
        img: {
          ...state.img,
          shape: action.payload.img?.shape ?? initialState['img']['shape'],
        },
      };
    default:
      return state;
  }
}
