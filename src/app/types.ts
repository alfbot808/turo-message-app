export type Car = "tesla" | "hyundai";
export type Location = "airport" | "kaneohe";
export type Stage = "booking" | "pickup" | "checkout" | "posttrip";
export type FAQCategory = "pickup" | "vehicle" | "trip" | "issues" | "return" | "policy";

export interface MessageVariables {
  guestName: string;
  lockboxCode: string;
}

export type MessageTemplate = string;

export type MessageTemplates = {
  [key in Car]: {
    [key in Location]: {
      [key in Stage]: MessageTemplate;
    };
  };
};

export type FAQTemplates = {
  [key: string]: MessageTemplate;
};

export type TripStatus = "booked" | "picked_up" | "returned" | "reviewed" | "completed";

export interface Trip {
  id: string;
  guestName: string;
  car: Car;
  location: Location;
  startDate: string;
  endDate: string;
  pickupTime?: string;
  returnTime?: string;
  status: TripStatus;
  notes?: string;
  createdAt: string;
}
