export interface User {
    id: number;
    firstname: string;
    lastname: string;
    niss: string;
    nickname: string;
    email: string;
    address: {
      street: string;
      number: string;
      city: string;
      zip_code: number;
    };
    createdAt: string;
    updatedAt: string;
    userProfile: {
      id: number;
      userId: number;
      genre: string;
      orientation: string;
      size: string;
      weight: string;
      penisSize: number;
      braCup: string | null;
      hairColor: string;
      eyeColor: string;
      createdAt: string;
      updatedAt: string;
    };
    announce: {
      id: number;
      userId: number;
      title: string;
      description: string;
      infidelityCard: boolean;
      private: boolean;
      escort: boolean;
      practices: number[];
      pricing: {
        "15min": number;
        "30min": number;
        "45min": number;
        "60min": number;
      };
      createdAt: string;
      updatedAt: string;
    };
  }