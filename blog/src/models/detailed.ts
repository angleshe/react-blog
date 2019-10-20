import { Model } from 'dva';
import { Reducer } from 'redux';

export interface DetailedModelState {
  content: string;
}

export abstract class DetailedModelType implements Model {
  namespace = 'detailed';

  abstract state: DetailedModelState;

  abstract reducers: {
    setContent: Reducer<DetailedModelState>;
  };
}

const DetailedModel: DetailedModelType = {
  namespace: 'detailed',

  state: {
    content: '',
  },

  reducers: {
    setContent: (state, action) => ({
      ...state,
      content: action.payload,
    }),
  },
};

export default DetailedModel;
