export interface Announces {
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
