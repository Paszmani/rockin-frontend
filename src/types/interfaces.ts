interface ShowData {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  expirationDate: string;
  showDate: string;
  showLocation: string;
  showMoreInfo: {
    ticketPrice?: number;
    duration?: number;
  };
  band?: {
    id: number;
    name: string;
  };
  images?: {
    url: string;
    altText?: string;
  }[];
}

interface SectionsData {
  id: number;
  name: string;
  score: number;
  data: ShowData[];
}

export type { ShowData, SectionsData };
