from typing import Union
from datetime import datetime, time, date
from pydantic import BaseModel


class ClientsBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: str
    
class ClientsCreate(ClientsBase):
    pass


class Clients(ClientsBase):
    id: int

    class Config:
        orm_mode = True


class RoomsBase(BaseModel):
    room_type: str

class RoomsCreate(RoomsBase):
    pass

class Rooms(RoomsBase):
    id: int

    class Config:
        orm_mode = True

class EmployeesBase(BaseModel):
    first_name: str
    last_name: str
    specialist: bool
    technician: bool

class EmployeesCreate(EmployeesBase):
    pass

class Employees(EmployeesBase):
    id: int
    
    class Config:
        orm_mode = True

class Employee_AvailabilityBase(BaseModel):
    employee_id: int
    available_date: datetime
    in_person: bool
    start_time: time
    end_time: time

class Employee_AvailabilityCreate(Employee_AvailabilityBase):
    pass


class Employee_Availability(Employee_AvailabilityBase):
    id: int

    class Config:
        orm_mode = True


class BookingsBase(BaseModel):
    client_id: int
    room_id: int
    employee_id: int
    book_date: datetime
    start_time: datetime
    end_time: datetime
    canceled: bool
    num_guests: int
    in_person: bool

class BookingsCreate(BookingsBase):
    pass


class Bookings(BookingsBase):
    id: int
    
    class Config:
        orm_mode = True