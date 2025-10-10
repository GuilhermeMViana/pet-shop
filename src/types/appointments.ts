export type AppointmentPeriodTime = 'morning' | 'afternoon' | 'evening';

export type Appointment = {
  id: string;
  time: string;
  tutorName: string;
  petName: string;
  phone: string;
  description: string;
  scheduleAt: Date;
  period: AppointmentPeriodTime;
};

export type AppointmentPeriod = {
  title: string;
  type: AppointmentPeriodTime;
  timeRange: string;
  appointments: Appointment[];
};
