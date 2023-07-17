from django.http import HttpResponse
import json
from .models import CusUser
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return HttpResponse("Hello moto!")


@csrf_exempt
def setMetaMask(request):
    if request.method == "POST":
        metaMask = request.POST.get("metaMask")
        request.session["metaMask"] = metaMask
        user = CusUser.objects.filter(metaMask=metaMask).first()
        if user:
            return HttpResponse(json.dumps({"msg": "success"}), content_type="application/json")
        else:
            return HttpResponse(json.dumps({"msg": "signup"}), content_type="application/json")


def enterData(request):
    for i in data:
        newObj = CusUser()
        newObj.metaMask = i["metaMask"]
        newObj.password = i["password"]
        newObj.firstName = i["firstName"]
        newObj.lastName = i["lastName"]
        newObj.username = i["username"]
        newObj.email = i["email"]
        newObj.avatar = i["avatar"]
        newObj.gender = i["gender"]
        newObj.phoneNumber = i["phoneNumber"]
        newObj.DOB = i["DOB"]
        newObj.address = json.dumps(i["address"])
        newObj.save()
        print(newObj.metaMask)
    return HttpResponse("Done")


def getUsers(request):
    users = CusUser.objects.all()
    userList = []
    for user in users:
        userList.append(user.dataExport())
    return HttpResponse(
        json.dumps({"data": userList}), content_type="application/json"
    )
