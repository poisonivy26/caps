# caps
caps caps caps user registration admin/patient/doctor with roles


### Register Admin Endpoint
'api/auth/register/'
### Register Patient Endpoint
'api/auth/register_patient/'
### Register Doctor Endpoint
'api/auth/register_doctor/'

### Login User Endpoint
'api/auth/login/'
### All Users Endpoint ( Must be Admin Account to access
'api/auth/users/'


### Update Patient Profile User
'api/auth/update_patient_profile/id/'
### Update Doctor Profile User
'api/auth/update_doctor_profile/id/'


# How to get access token
- Register a user and login there will be an access and refresh token response.

Sample POST using HTTPIE with JWT Auth
'http --form POST http://localhost:8000/api/auth/users/ "Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA4MDg2OTEyLCJqdGkiOiJjMzlmZDk3ZDk4NjA0M2YxYTgxMjI4MDRiMDRmMGJlOCIsInVzZXJfaWQiOjJ9.aF1j3_7TgBsFrlr3Jy2K6YW7Pj39rr7vWLQ_bh17se8"

