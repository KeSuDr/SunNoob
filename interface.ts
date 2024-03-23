interface DentistItem {
    _id: string,
    name: string,
    year_of_experience : number,
    area_of_experience : string,
    medical_fee : number,
    id: string
  }
  
  interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: DentistItem[]
  }

  interface BookingItem {
    name: string;
    surname: string;
    id: string;
    dentist: string;
    bookDate: string;
  }