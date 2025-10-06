interface ShowData {
  showId: number;
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
}

interface SectionsData {
  sectionId: number;
  name: string;
  data: ShowData[];
}

export type { ShowData, SectionsData };
