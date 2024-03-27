export interface PersonalDataFull {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    niss: string;
    nickname: string;
    password: string;
    address: {
      street: string;
      number: string;
      city: string;
      zip_code: string;
    };
    createdAt: Date;
    updatedAt: Date;
    userProfile: {
      id: number;
      userId: number;
      genre: string;
      orientation: string;
      size: number;
      weight: number;
      penisSize: number;
      braCup: null;
      hairColor: string;
      eyeColor: string;
      createdAt: Date;
      updatedAt: Date;
    };
    announce: {
      title: string;
      description: string;
      private: boolean;
      escort: boolean;
      practices: number[];
      createdAt: Date;
      updatedAt: Date;
    };
  };
}
