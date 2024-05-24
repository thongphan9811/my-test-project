import { createFileRoute, LoaderFnContext } from '@tanstack/react-router';
import { Editor } from '../components/Editor';
import { api } from '../api/mockApi';

export const Route = createFileRoute('/detail')({
  component: () => <Editor />,
  loader(context: LoaderFnContext) {
    const { templateId } = context.location.search;

    return api.find((item) => item.id === templateId);
  },
});
