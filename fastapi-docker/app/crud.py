from sqlalchemy.orm import Session
from datetime import datetime, time, date
import models, schemas
from sqlalchemy import func, Date, Time

# CLIENT TABLE
def get_client(db: Session, client_id: int):
    return db.query(models.Clients).filter(models.Clients.id == client_id).first()

def get_client_by_email(db: Session, client_email: str):
    return db.query(models.Clients).filter(models.Clients.email == client_email).first()

def create_client(db: Session, client: schemas.Clients):
    db_client = models.Clients(first_name = client.first_name,
                               last_name = client.last_name,
                               email = client.email,
                                phone = client.phone )
    db.add(db_client)
    db.commit()
    db.refresh(db_client)
    return db_client

def delete_client(db: Session, client: schemas.Clients):
    # UNUSED
    db_client = models.Clients(first_name = client.first_name,
                               last_name = client.last_name,
                               email = client.email,
                               phone = client.phone)
    db.delete(db_client)
    db.commit()
    return db_client

# ROOM TABLE
def get_room_by_id(db: Session, room_id: int):
    return db.query(models.Rooms).filter(models.Rooms.id == room_id).first()

def create_room(db: Session, room: schemas.Rooms):
    db_room = models.Rooms(room_type = room.room_type)
    db.add(db_room)
    db.commit()
    db.refresh(db_room)
    return db_room

def get_room_type(db: Session, id: int):
    return db.query(models.Rooms).filter(models.Rooms.id == id).first()

# EMPLOYEE TABLE
def get_employee_by_id(db:Session, employee_id: int):
    return db.query(models.Employees).filter(models.Employees.id == employee_id).first()

def get_specialists(db:Session):
    specialists = []
    for employee in db.query(models.Employees).filter(models.Employees.specialist == True):
        specialists.append(employee.first_name + " " + employee.last_name)
    return specialists

def get_technicians(db:Session):
    technicians = []
    for employee in db.query(models.Employees).filter(models.Employees.technician == True):
        technicians.append(employee.first_name + " " + employee.last_name)
    return technicians

def create_employee(db:Session, employee: schemas.Employees):
    db_employee = models.Employees(first_name = employee.first_name,
                                   last_name = employee.last_name,
                                   specialist = employee.specialist,
                                   technician = employee.technician)
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee



# BOOKING TABLE
def create_booking(db: Session, booking: schemas.Bookings):
    db_booking = models.Bookings(client_id = booking.client_id, 
                                room_id = booking.room_id,
                                employee_id = booking.employee_id,
                                book_date = booking.book_date,
                                start_time = booking.start_time,
                                end_time = booking.end_time,
                                canceled = booking.canceled,
                                num_guests = booking.num_guests,
                                in_person = booking.in_person)
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

def get_bookings_by_date(db:Session, date):
    return db.query(models.Bookings).filter(func.date(models.Bookings.book_date, type_=Date) == date.date()).order_by(models.Bookings.start_time.asc()).all()

def get_all_bookings(db: Session):
    print(db.query(models.Bookings).all())
    return db.query(models.Bookings).all()

def check_valid_booking(db:Session, book_date, start_time, end_time):
    curr_bookings = get_bookings_by_date(db, book_date)
    for booking in curr_bookings:
        if not booking.canceled:
            if booking.start_time.time() <= start_time.time() <= booking.end_time.time():
                return 'earlier booking', str(booking.end_time.time()) 
            elif booking.start_time.time() <= end_time.time() <= booking.end_time.time():
                return 'later booking', str(booking.start_time.time() )
    return True, True

def get_booking_by_id(db: Session, booking_id):
    return db.query(models.Bookings).filter(models.Bookings.id == booking_id).first()

# EMPLOYEE AVAILABILITIES TABLE
def get_employee_availability(db: Session, employee_id: int, date: datetime):
    return db.query(models.Employee_Availability).filter(models.Employee_Availability.id == id,
                                                         func.date(models.Employee_Availability.available_date) == date.date()).all()


