export interface User {
    id: number;
    firstname: string;
    lastname: string;
    announce?: {
      id: number;
      userId: number;
      title: string;
      description: string;
      infidelityCard: boolean;
      private: boolean;
      escort: boolean;
    };
    address?: {
        city: string;
    }
  }
  