from django.urls import include, path
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("api/", include("api.urls")),
    path('web3_auth/', include('web3_auth.urls')),
    path("admin/", admin.site.urls),
]
