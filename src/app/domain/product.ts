export interface Product {
    case_id: string;
    case_name: string;
    type: string;
    description: string;
    lawyer: string;
    court_name: string;
    location:string;
    start_date: string;
    status: 'Completed' | 'In-Progress' | 'Rejected'; // Assuming these are the possible statuses
    no_of_hearings: number;
    end_date:string;
    documents: string;
  }
  