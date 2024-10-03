export interface Report {
    id: number;
    status: string;
    type: string;
    severity: string;
    title: string;
    createdAt: string;
    project: {
      id: number;
      name: string;
    };
    user: {
      id: number;
      email: string;
    };
  }
  
