from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, BigInteger, DateTime, Date, Time, DATE, TIME
from datetime import datetime, time, date
from sqlalchemy.orm import relationship

from database import Base

class Clients(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(64), index=True, nullable = False)
    last_name = Column(String(64), index=True, nullable = False)
    email = Column(String(128))
    phone = Column(String(16))

    bookings = relationship("Bookings", back_populates = "clients")

class Rooms(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True)
    room_type = Column(String(64))

    bookings = relationship("Bookings", back_populates = "rooms")

class Employees(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(64), index=True, nullable = False)
    last_name = Column(String(64), index=True, nullable = False)
    specialist = Column(Boolean)
    technician = Column(Boolean)

    availabilities = relationship("Employee_Availability", back_populates="employees")
    bookings = relationship("Bookings", back_populates = "employees")

class Employee_Availability(Base):
    __tablename__ = "employee_availability"
    id = Column(Integer, primary_key=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    available_date = Column(DateTime)
    in_person = Column(Boolean)
    start_time = Column(DateTime)
    end_time = Column(DateTime)

    employees = relationship("Employees", back_populates="availabilities")

class Bookings(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    room_id = Column(Integer, ForeignKey("rooms.id"))
    employee_id = Column(Integer, ForeignKey("employees.id"))
    book_date = Column(DateTime)
    start_time = Column(DateTime)
    end_time = Column(DateTime)
    canceled = Column(Boolean)
    num_guests = Column(Integer)
    in_person = Column(Boolean)

    clients = relationship("Clients", back_populates="bookings")
    rooms = relationship("Rooms", back_populates="bookings")
    employees = relationship("Employees", back_populates="bookings")