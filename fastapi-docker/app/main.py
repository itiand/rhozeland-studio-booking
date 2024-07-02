from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime, time
import crud, models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

    
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CLIENTS
@app.post("/clients/", response_model=schemas.Clients)
def create_client(client: schemas.ClientsCreate, db: Session = Depends(get_db)):
    db_client = crud.get_client_by_email(db, client_email=client.email)
    if db_client:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_client(db=db, client=client)

@app.get("/clients/{client_id}", response_model=schemas.Clients)
def read_client(client_id: int, db: Session = Depends(get_db)):
    db_client = crud.get_client(db, client_id=client_id)
    if db_client is None:
        raise HTTPException(status_code=404, detail="Client not found")
    return db_client

@app.delete("/clients/{client_email}", response_model= schemas.Clients)
def delete_client(client_email: str, db: Session = Depends(get_db)):
    db_client = crud.get_client_by_email(db, client_email = client_email)
    if db_client is None:
        raise HTTPException(status_code=404, detail="Client not found")
    db.delete(db_client)
    db.commit()
    return db_client

# ROOMS
@app.post("/rooms/", response_model=schemas.Rooms)
def create_room(room: schemas.RoomsCreate, db: Session = Depends(get_db)):
    return crud.create_room(db=db, room=room)

@app.get("/rooms/{room_id}", response_model= schemas.Rooms)
def read_room(room_id: int, db: Session = Depends(get_db)):
    db_room = crud.get_room_by_id(db, room_id= room_id)
    if db_room is None:
        raise HTTPException(status_code=404, detail = "Room does not exist")
    return db_room

@app.delete("/rooms/{room_id}", response_model= schemas.Rooms)
def delete_room(room_id: int, db: Session = Depends(get_db)):
    db_room = crud.get_room_by_id(db, room_id=room_id)
    if db_room is None:
        raise HTTPException(status_code=404, detail = "Room does not exist")
    db.delete(db_room)
    db.commit()
    return db_room

# EMPLOYEES
@app.post("/employees/", response_model=schemas.Employees)
def create_employee(employee: schemas.EmployeesCreate, db: Session = Depends(get_db)):
    return crud.create_employee(db=db, employee=employee)

@app.get("/employees/{employee_id}", response_model= schemas.Employees)
def read_employee(employee_id: int, db: Session = Depends(get_db)):
    db_client= crud.get_employee_by_id(db, employee_id= employee_id)
    if db_client is None:
        raise HTTPException(status_code=404, detail = "Client does not exist")
    return db_client

@app.delete("/employees/{employee_id}", response_model= schemas.Employees)
def delete_client(employee_id: int, db: Session = Depends(get_db)):
    db_client = crud.get_employee_by_id(db, employee_id=employee_id)
    if db_client is None:
        raise HTTPException(status_code=404, detail = "Client does not exist")
    db.delete(db_client)
    db.commit()
    return db_client


# BOOKINGS
@app.post("/bookings/", response_model=schemas.Bookings)
def create_booking(booking: schemas.BookingsCreate, db: Session = Depends(get_db)):
    valid_booking, time = crud.check_valid_booking(db, 
                                             book_date = booking.book_date, 
                                             start_time=booking.start_time, 
                                             end_time=booking.end_time)
    if valid_booking == 'earlier booking':
        raise HTTPException(status_code=400, detail="Earlier booking already exists")
    elif valid_booking == 'later booking':
        raise HTTPException(status_code=400, detail="Later booking already exists")
    return crud.create_booking(db=db, booking=booking)

@app.get("/bookings/{booking_id}", response_model= schemas.Bookings)
def read_booking(booking_id: int, db: Session = Depends(get_db)):
    db_booking =  crud.get_booking_by_id(db, booking_id= booking_id)
    if db_booking is None:
        raise HTTPException(status_code=404, detail = "Booking does not exist")
    return db_booking

@app.delete("/bookings/{booking_id}", response_model= schemas.Bookings)
def delete_booking(booking_id: int, db: Session = Depends(get_db)):
    db_booking = crud.get_booking_by_id(db, booking_id=booking_id)
    if db_booking is None:
        raise HTTPException(status_code=404, detail = "Booking does not exist")
    db.delete(db_booking)
    db.commit()
    return db_booking

# EMPLOYEE AVAILABILITY
@app.get("/employee_availability/{employee_id}", response_model=schemas.Employees)
def read_employee_availability(employee_id: int, date: datetime, db: Session = Depends(get_db)):
    db_employee = crud.get_employee_availability(db, employee_id=employee_id, date = date)
    if db_employee is None:
        raise HTTPException(status_code=404, detail="Employee unavailable on date.")
    return db_employee

@app.get("/available_times/{date}")
def get_available_times(date: datetime, db: Session = Depends(get_db)):
    curr_bookings = crud.get_bookings_by_date(db, date)
    start_time = time(hour = 9, minute = 0)
    closing_time = time(hour = 23, minute = 59)
    available_times = []
    for booking in curr_bookings:
        if booking.start_time.time() == start_time:
            start_time = booking.end_time.time()
        elif booking.start_time.time() > start_time:
            available_times.append([start_time, booking.start_time.time()])
            start_time = booking.end_time.time()
    if start_time < closing_time:
        available_times.append([start_time, closing_time])
    return available_times
    
@app.get("/all_bookings/")
def get_all_bookings(db: Session = Depends(get_db)):
    return db.query(models.Bookings).offset(0).limit(100).all()
    # bookings = crud.get_all_bookings(db)
    # return bookings
    