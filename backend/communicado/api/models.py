from django.db import models
from django.contrib.auth.models import User
import json


class CusUser(models.Model):
    def subDefault():
        return {
            "plan": "Professional",
            "status": "Active",
            "payment_method": "Bitcoins",
        }

    def corDefault():
        return {
            "lat": "",
            "lng": ""
        }
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    metaMask = models.CharField(max_length=200, null=True)
    firstName = models.CharField(max_length=100, null=True)
    lastName = models.CharField(max_length=100, null=True)
    username = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    avatar = models.CharField(max_length=200, null=True)
    gender = models.CharField(max_length=200, null=True)
    phoneNumber = models.CharField(max_length=200, null=True)
    DOB = models.CharField(max_length=50, null=True)
    address = models.JSONField(default=corDefault)
    subscription = models.JSONField(default=subDefault)

    def __str__(self):
        return self.username

    def dataExport(self):
        return {
            "id": self.id,
            "metaMask": self.metaMask,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "username": self.username,
            "email": self.email,
            "avatar": self.avatar,
            "gender": self.gender,
            "phoneNumber": self.phoneNumber,
            "DOB": self.DOB,
            "address": self.address,
            "subscription": self.subscription,
        }
