from django.urls import path

from . import views

urlpatterns = [
    path('request_message/', views.request_message, name='request_message'),
    path('verify_message/', views.verify_message, name='verify_message')
]
