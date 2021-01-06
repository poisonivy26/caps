from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    UserRegistrationView,
    UserLoginView,
    UserListView,
    PatientRegistrationView,
    DoctorRegistrationView,
    UpdatePatientProfileView,
    UpdateDoctorProfileView,
    HelloView,
    UserAPI,
)

urlpatterns = [
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('register_patient/', PatientRegistrationView.as_view(), name='register_patient'),
    path('register_doctor/', DoctorRegistrationView.as_view(), name='register_doctor'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('users/', UserListView.as_view(), name='users'),


    # update profiles
    path('update_patient_profile/<int:pk>/', UpdatePatientProfileView.as_view(), name='auth_update_patient_profile'),
    path('update_doctor_profile/<int:pk>/', UpdateDoctorProfileView.as_view(), name='auth_update_doctor_profile'),



    # test view for authentication
    path('hello/', HelloView.as_view(), name='hello'),
    
    
    # get user
    path('user/', UserAPI.as_view(), name='user'),
]