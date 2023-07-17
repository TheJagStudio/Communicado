from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("getUsers/", views.getUsers, name="getUsers"),
    path("enterData/", views.enterData, name="enterData"),
    path("setMetaMask/", views.setMetaMask, name="setMetaMask"),
]
