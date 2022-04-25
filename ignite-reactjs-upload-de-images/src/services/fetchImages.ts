import { api } from './api';

export type ImageInfoResponse = {
  ts: number;
  id: string;
  title: string;
  description: string;
  url: string;
};

interface ImagesQueryResponse {
  after?: {
    id: string;
  };
  data: ImageInfoResponse[];
}

export const fetchImages = async ({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<ImagesQueryResponse> => {
  // debugger;
  try {
    const result = await api.get<ImagesQueryResponse>('/api/images', {
      params: { after: pageParam },
    });
    return result.data;
  } catch (e) {
    throw new Error(e);
  }
};
